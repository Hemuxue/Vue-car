<template>
  <div class="person_sea">
    <el-input 
    class="search_input" 
    placeholder="请输入店名搜索" 
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
        label="门店名称"
        width="250">
        <template slot-scope="scope">
          <span style="margin-left:-0px;">{{ scope.row.storeName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="门店地址"
        width="250">
        <template slot-scope="scope">
          <span style="">{{ scope.row.address }}</span>
        </template>
      
      </el-table-column>

      <el-table-column
        label="联系电话"
        width="250">
        <template slot-scope="scope">
          <span >{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="店长"
        width="250">
        <template slot-scope="scope">
          <span >{{ scope.row.empName }}</span>
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
      axios.get('/api/allStore').then(response =>{
        let dataArr = response.data
        console.log(dataArr);
        this.baseData = dataArr
        this.handleData(this.baseData);
      })
    },
    computed:mapState(['storeKey']),
    methods: {
      ...mapMutations(['changeStoreKey','addStoreData']),
      handleEdit(index, row) {
        console.log(row)
        let data = {};
        for(let prop in row){
          if(prop == 'empName' ){

          }else{
            data[prop] = row[prop]
          }
          
        }
        this.addStoreData(data)

        this.$router.push({name : 'store_update'})
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            axios.post('/api/deleStore',{
              storeName:row.storeName
            }).then(response =>{
              if(response.data == 'ok'){
                this.baseData = this.baseData.filter((ele,index) =>{
                  if(ele.storeName !== row.storeName){
                    return true
                  }
                })
                this.handleData(this.baseData)
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
      },
      handleData(data){
        if(this.search == ''){
          this.tableData = data
        }else{
          let tempArr = data.filter((ele,index) =>{
            if(ele.storeName.indexOf( this.search) !== -1){
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
      console.log(this.storeKey)
      if(this.storeKey === 'true'){
        this.changeStoreKey('false')
        axios.get('/api/allStore').then(response =>{
          let dataArr = response.data
          console.log(dataArr);
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

