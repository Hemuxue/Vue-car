import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        custData:{},
        storeData:{},
        key:'false',
        storeKey:'false',
    },
    mutations:{
        addCustData(state,data){
            state.custData = data
        },
        changeKey(state,bool){
            state.key = bool
        },
        addStoreData(state,data){
            state.storeData = data
        },
        changeStoreKey(state,bool){
            state.storeKey = bool
        }
    },
    actions:{
        addCustData(ctx,data){
            ctx.commit('changeCity',data)
        }
    }
})