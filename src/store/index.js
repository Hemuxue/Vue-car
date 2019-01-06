import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        custData:{},
        key:false
    },
    mutations:{
        addCustData(state,data){
            state.custData = data
        },
        changeKey(state,bool){
            state.key = bool
        }
    },
    actions:{
        addCustData(ctx,data){
            ctx.commit('changeCity',data)
        }
    }
})