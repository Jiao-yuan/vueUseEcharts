const state = {
  immovables: {
    earthArea: [], // 地市土地面积
    houseArea: [], // 地市房产面积
    privincehouseArea: [], // 省直房产面积
    organizationPeople: [], // 编制人员数量
    landArea: [], // 省直土地面积
    unitsNumber: [], // 省直单位数量
    landPlan: [], // 土地用途占比
    units: [] // 单位数量
  }
}
const actions = {}
const mutations = {
  SET_earthArea: (state, payload) => {
    state.immovables.earthArea = payload
  },
  SET_houseArea: (state, payload) => {
    state.immovables.houseArea = payload
  },
  SET_privincehouseArea: (state, payload) => {
    state.immovables.privincehouseArea = payload
  },
  SET_organizationPeople: (state, payload) => {
    state.immovables.organizationPeople = payload
  },
  SET_landArea: (state, payload) => {
    state.immovables.landArea = payload
  },
  SET_unitsNumber: (state, payload) => {
    state.immovables.unitsNumber = payload
  },
  SET_landPlan: (state, payload) => {
    state.immovables.landPlan = payload
  },
  SET_units: (state, payload) => {
    state.immovables.units = payload
  }

}

const populationDistuibution = {
  state: state,
  actions: actions,
  mutations: mutations
}
export default populationDistuibution
