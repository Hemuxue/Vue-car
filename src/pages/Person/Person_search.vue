<template>
  <div class="person_sea">
    <el-input class="search_input" placeholder="请输入关键字搜索" v-bind="search" size="medium"></el-input>
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
          <span style="margin-left:-0px;">{{ scope.row.name }}</span>
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
          <span >{{ scope.row.birth }}</span>
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
  export default {
    data() {
      return {
        tableData: [{
          name: '小虎',
          sex: '男',
          birth:'2016-05-02',
          address: '中国四川',
          phone:'15983494055',
          yajin:'1000'
        },{
          name: '小虎',
          sex: '男',
          birth:'2016-05-02',
          address: '中国四川',
          phone:'15983494055',
          yajin:'1000'}
        ],
        search:''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
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

