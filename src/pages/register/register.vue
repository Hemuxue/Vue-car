<template>
    <div class="register">
        <div class="reg_form">
            <el-input v-model="user_name" class = 'input'
            placeholder="用户名"
            clearable 
            ></el-input>
            <el-input v-model="phoneNum" class = 'input'
            placeholder="请输入手机号"
            clearable 
            ></el-input>
            <el-input v-model="password" class = 'input'
            placeholder="请输入密码"
            clearable
            ></el-input>
            <el-button 
            class="reg_btn" 
            @click="handleLogin"
            type="primary">注册</el-button>
            
        </div>
        
    </div>  
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            user_name:'',
            phoneNum:'',
            password:''
        }
    },
    methods:{
        handleLogin () {
            console.log(this.phoneNum,this.password)
            axios.post('/api/login',{
                stuNum:this.phoneNum,
                password:this.password,
                userName:this.user_name

            }).then((response) =>{
                console.log(response)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl'
    .register
        position absolute
        left 0 
        top 0
        right 0
        bottom 0
        background-image url(http://img2.zol.com.cn/product/104_940x705/893/ceJI5XnHnwQnk.jpg)
        background-size 100% 100% 
        
        .reg_form
            text-align center
            background-color transparent
            width 400px;
            padding 40px 0
            position absolute
            top 0
            left 50%;
            margin-left -200px
            .input 
                width 300px; 
                margin-bottom 10px;  
            .reg_btn
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
