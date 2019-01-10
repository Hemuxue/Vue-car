<template>
    <div class="login">
        <div class="log_form">
            <div class="user_title">
                <span class="title">易行租车系统</span>
            </div>
            <p class="user_login">用户登录</p>
            <el-input v-model="empName" class = 'input'
            placeholder="员工名"
            clearable 
            ></el-input>
            <el-input type="password" v-model="password" class = 'input'
            placeholder="请输入密码"
            clearable
            ></el-input>
            <el-button 
            class="login_btn" 
            @click="handleLogin"
            type="primary">登录</el-button>
        </div>
        
    </div>  
</template>
<script>
import axios from 'axios'
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            empName:'',
            password:''
        }
    },
    methods:{
        handleLogin () {
            console.log(this.empName,this.password)
            axios.post('/api/login',{
                empName:this.empName,
                password:this.password
            }).then((response) =>{
                if(response.data == 'ok'){
                    this.password = '';
                    this.$router.push({name : 'Sta'})
                    this.changeEmpName(this.empName)
                }
            })

        },
        ...mapMutations(['changeEmpName'])
    }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl'
    .login
        position absolute
        left 0 
        top 0
        right 0
        bottom 0
        background-image url(http://img2.zol.com.cn/product/104_940x705/893/ceJI5XnHnwQnk.jpg)
        background-size 100% 100% 
        
        .log_form
            text-align center
            background-image url(../../assets/img/login-background.jpg) 
            background-size 100% 100%
            width 400px;
            padding 40px 0
            position absolute
            top 0
            left 50%;
            margin-left -200px
            .user_title
                width 300px;
                margin 0 auto
                border-bottom 1px solid #fff
                margin-bottom 20px
                .title 
                    color #fff
                    height 40px
                    line-height 40px
            .user_login
                height 30px;
                line-height 30px;
                margin-left 50px;
                text-align left
                color #fff

            .input 
                width 300px; 
                margin-bottom 10px;  
            .login_btn
                width 300px;
                height 50px;
            .register
                margin-top 10px;
                margin-left 0px;
                width 300px;
                height 50px
                &.hover
                    color 
                .link
                    color $color-link
</style>
