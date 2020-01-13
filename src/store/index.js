// vuex.Store实例文件
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import populationDistuibution from './modules/population-distribution'
import immovables from "./modules/immovables"
import housePeople from "./modules/house-people"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        // populationDistuibution,
        housePeople,
        immovables
    },
    getters
})

export default store