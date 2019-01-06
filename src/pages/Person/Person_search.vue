<template>
  <div class="person_sea">
    <el-input 
    class="search_input" 
    placeholder="请输入姓名搜索" 
    v-model='search'
    size="medium"
    @input='handleSearch'></el-input>
    <el-table
      :data="tableData"
      style="width: 100%"
      :stripe='true'
      :border='true'>
      >
      <el-table-column
        label="姓名"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left:-0px;">{{ scope.row.cusName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        width="100">
        <template slot-scope="scope">
          <span style="">{{ scope.row.sex }}</span>
        </template>
      
      </el-table-column>
      <el-table-column
        label="出生年月"
        width="200">
        <template slot-scope="scope">
          <span >{{ scope.row.birthday }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="家庭住址"
        width="250">
        <template slot-scope="scope">
          <span >{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="手机号"
        width="200">
        <template slot-scope="scope">
          <span >{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="押金"
        width="150">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.yajin }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import axios from 'axios'
import {mapMutations,mapState} from 'vuex'
  export default {
    data() {
      return {
        tableData: [],
        search:'',
        timer:''
      }
    },
    created(){
      axios.get('/api/allCust').then(response =>{
          let dataArr = response.data
          
          dataArr.forEach((ele,index) =>{
            ele.sex = ele.sex == 1? '男' : '女';
            ele.birthday = `${new Date(ele.birthday).getFullYear()}--${new Date(ele.birthday).getMonth()}--${new Date(ele.birthday).getDay()}`
          })
          this.baseData = dataArr
          this.handleData(this.baseData);
        })
    },
    computed:mapState(['key']),
    methods: {
      ...mapMutations(['addCustData','changeKey']),
      handleEdit(index, row) {
        let data = {};
        for(let prop in row){
          if(prop == 'birthday' || prop == 'yajin'){

          }else{
            data[prop] = row[prop]
          }
          
        }
        this.addCustData(data)

        this.$router.push({name : 'person_updata'})
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            axios.post('/api/deleCus',{
              phone:row.phone
            }).then(response =>{
              if(response.data == 'ok'){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
          });          
        });
        
        this.baseData = this.baseData.filter((ele,index) =>{
          if(ele.phone !== row.phone){
            return true
          }
        })
        this.handleData(this.baseData)

      },
      handleData(data){
        if(this.search == ''){
          this.tableData = data
        }else{
          let tempArr = data.filter((ele,index) =>{
            if(ele.cusName.indexOf( this.search) !== -1){
              return true;
            }
          })
          this.tableData = tempArr
        }
      },
      handleSearch(e){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
          this.handleData(this.baseData)
        },1000)
      },
      
    },
    activated(){
      if(this.key === 'true'){
        this.changeKey(false)
        axios.get('/api/allCust').then(response =>{
          let dataArr = response.data
          
          dataArr.forEach((ele,index) =>{
            ele.sex = ele.sex == 1? '男' : '女';
            ele.birthday = `${new Date(ele.birthday).getFullYear()}--${new Date(ele.birthday).getMonth()}--${new Date(ele.birthday).getDay()}`
          })
          this.baseData = dataArr
          this.handleData(this.baseData);
        })
      }
    },
  }

</script>

<style lang="stylus" scoped>
  .person_sea
    width 100%
    .search_input
      width 250px
      height 40px
      line-height 40px
      margin 20px 0
</style>

