<template>
    <div class="person_register">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>

            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">注册</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            
        </el-form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            form:{
                name:'',
                sex:'',
                address:'',
                phone:'',
                birthday:'',
            }
        }
    },
    methods:{
        onSubmit () {
            if(!this.isEmpty(this.form)){
                this.$message.error('请完整的填写信息');
                return ;
            }
            if(!this.isPhone(this.form.phone)){
                this.$message.error('您输入的手机号格式不对');
                return ;
            }
            let data = {};
            let createTime = new Date().getTime()
            for(let prop in this.form){
                if(prop == 'birthday' ){
                    data['birth'] = this.form['birthday'].getTime();
                }else if(prop == 'sex'){
                    data[prop] = this.form[prop] == '男' ? 1: 0;
                }else{
                    data[prop] = this.form[prop]
                }   
            }
            data.createTime = createTime
            axios.post('/api/custRegister',data).then((response) =>{
                if(response.data == 'ok'){
                    this.$message({
                        message:'恭喜注册成功',
                        type:'success'
                    });
                    this.form = {};
                }
            })
        },
        isPhone(phone){
            let reg = /^0*(1)\d{10}$/;
            return reg.test(phone)
        },
        isEmpty(data){
            for(let prop in data){
                if(data[prop] === ''){
                    return false
                }
            }
            return true
        }
    }
}
</script>
<style lang="stylus" scoped>
    .person_register 
        width 400px;
        margin 0 auto
        margin-top 50px
</style>
