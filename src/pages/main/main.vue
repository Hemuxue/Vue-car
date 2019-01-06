<template>
    <el-container style="position:absolute;left:0;right:0;top:0;bottom:0;">
        <el-header>易行租车网</el-header>
        <el-container style="height: 500px; border: 1px solid #eee">
        
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                <el-menu-item index="1-1" @click="handleMain"><i class="el-icon-menu"></i>首页</el-menu-item>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>会员管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="1-1" @click="handlePerson_reg">会员注册</el-menu-item>
                    <el-menu-item index="1-2" @click="handlePerson_search">会员查询</el-menu-item>
                    <el-menu-item index="1-3">会员租车</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-tickets"></i>订单管理</template>
                    <el-menu-item-group>

                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>车辆管理</template>
                    <el-menu-item-group>

                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>   
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-setting"></i>门店管理</template>
                    <el-menu-item-group>

                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    </el-menu-item-group>   
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-setting"></i>员工管理</template>
                    <el-menu-item-group>

                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    </el-menu-item-group>   
                </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header class="mian_title" ><el-button class="out_btn" @click="handleOut">退出系统</el-button></el-header>
                <el-main>
                    <slot></slot>
                </el-main>
            </el-container>
            
            
        </el-container>
    </el-container>
    
</template>
<script>
export default {
    methods:{
        handlePerson_reg (){
            this.$router.push({name : 'person_reg'})
        },
        handleOut(){
            this.$router.push({name : 'login'})
        },
        handlePerson_search(){
            this.$router.push({name : 'person_search'})
        },
        handleMain(){
            this.$router.push({name : 'Sta'})
        }
    }
}
</script>
<style lang="stylus" scoped>

    .el-header
        background-color: #409EFF;
        color: #fff;
        text-align: left;
        line-height: 60px;
        padding 0 60px

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .mian_title
        background #fff
        color #409EFF
        text-align right
        cursor pointer
        .out_btn
            color #409EFF
    .el-main 
        background-color rgb(238,241,246)

</style>
