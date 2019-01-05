<template>
    <div class="sta">
        <el-row :gutter="22">
            <el-col :span="12">
                <div class="total_turnover">
                    <div class="des">
                        <p class="des_num">
                            <span class="icon">$</span><span class="number">{{total}}</span>
                        </p>
                        <p class="title">总营业额</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="total_turnover">
                    <div class="des">
                        <p class="des_num">
                            <span class="icon">$</span><span class="number">{{order}}</span>
                        </p>
                        <p class="title">订单总数</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="total_turnover">
                    <div class="des">
                        <p class="des_num">
                            <span class="icon"></span><span class="number">{{person}}</span>
                        </p>
                        <p class="title">会员总数</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                
                <div class="total_turnover_buttom">
                    <div class="icon_big">
                        <span class="buttom_icon">$</span>
                    </div>
                    <div class="des">
                        
                        <p class="title">门电总数</p>
                        <p class="des_num">
                            <span class="number">{{house}}</span>
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                
                <div class="total_turnover_buttom">
                    <div class="icon_big">
                        <span class="buttom_icon">$</span>
                    </div>
                    <div class="des">
                        
                        <p class="title">汽车库存</p>
                        <p class="des_num">
                            <span class="number">{{car_num}}</span>
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                
                <div class="total_turnover_buttom">
                    <div class="icon_big">
                        <span class="buttom_icon">$</span>
                    </div>
                    <div class="des">
                        
                        <p class="title">故障车辆</p>
                        <p class="des_num">
                            <span class="number">{{car_fault}}</span>
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                
                <div class="total_turnover_buttom">
                    <div class="icon_big">
                        <span class="buttom_icon">$</span>
                    </div>
                    <div class="des">
                        
                        <p class="title">汽车品牌数</p>
                        <p class="des_num">
                            <span class="number">{{brand}}</span>
                        </p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            total:'6888',
            order:'2',
            person:'4',
            house:'10',
            car_num:'500',
            car_fault:'10',
            brand:'15'
        }
    },
    
}
</script>
<style lang="stylus" scoped>
    .sta
        .el-row
            height 150px;
            margin-bottom 10px;
            .total_turnover
                border-radius 5px
                position relative
                height 150px
                background #409EFF
                .des
                    position absolute
                    height 50px;
                    width 80px;
                    left 20px
                    top 20px
                    color #eee
                    .des_num
                        margin-bottom 5px
                        font-size 20px
                        .icon
                            margin-right 10px
                    
                    .title
                        font-size 12px
            .icon_big
                margin 17px 0 0 15px;
                height 50px
                width 50px;
                display inline-block
                .buttom_icon
                    color #eee
                    font-size 40px;
            .total_turnover_buttom
                border-radius 5px
                position relative
                height 80px
                background #409EFF
                .des
                    position absolute
                    height 50px;
                    width 80px;
                    right 10px
                    top 15px
                    color #eee
                    text-align right 
                    .des_num
                        margin 5px 0
                        font-size 30px
                    
                    .title
                        font-size 12px




</style>
