<template>
    <div class="person_register">
        <el-form ref="form" :model="store" label-width="80px">
            <el-form-item label="门店编号">
                <el-input v-model="store.storeId"></el-input>
            </el-form-item>
            <el-form-item label="门店名称">
                <el-input v-model="store.storeName"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="store.address" ></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="store.phone" placeholder="请输入11位手机号码"></el-input>
            </el-form-item>
            <el-form-item label="店长">
                <el-input v-model="store.manager" placeholder="请输入员工编号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">添加</el-button>
                <el-button @click="handleOut">取消</el-button>
            </el-form-item>
            
        </el-form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            store:{
                storeId:'',
                storeName:'',
                address:'',
                phone:'',
                manager:'',
            }
        }
    },
    methods:{
        onSubmit () {
            if(!this.isEmpty(this.store)){
                this.$message.error('请完整的填写信息');
                return ;
            }
            if(!this.isPhone(this.store.phone)){
                this.$message.error('您输入的手机号格式不对');
                return ;
            }
            axios.post('/api/storRegister',this.store).then((response) =>{
                if(response.data == 'ok'){
                    this.$message({
                        message:'恭喜注册成功',
                        type:'success'
                    });
                    this.store = {};
                    this.$router.push({name:'store_show'})
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
        },
        handleOut(){
            this.$router.push({name:'Sta'})
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
