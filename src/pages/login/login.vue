<template>
    <div class="login">
        <el-input v-model="phoneNum" class = 'input'
        placeholder="请输入手机号"
        clearable 
        size="small"></el-input>
        <el-input v-model="password" class = 'input'
        placeholder="请输入密码"
        clearable
        size="small"></el-input>
        <el-button size="small" @click="handleLogin">注册</el-button>
    </div>  
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            phoneNum:'',
            password:''
        }
    },
    methods:{
        handleLogin () {
            console.log(this.phoneNum,this.password)
            axios.post('/api/login',{
                stuNum:this.phoneNum,
                password:this.password
            }).then((response) =>{
                console.log(response)
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    .login
        width 300px;
        .input 
            width 200px; 
            margin-bottom 10px;  
            
</style>
