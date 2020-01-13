const state = {
    regionPopulation: {
        heatMap: [],
        lengthTime: [],
        populationType: [],
        genderAge: {},
        numberOfUsers: [],
        totalUsers: [],
        homeOfNumber: [],
        currentPopulation: [],
        totalNumber: 0,
        zoom: 0,
        historyTime: "",
        showDialog: false,
    },
    floatingPopulation: {
        moveOutNum: []
    }
}
const actions = {}
const mutations = {
    SET_TIME: (state, time) => {
        state.regionPopulation.historyTime = time
    },
    SET_ZOOM: (state, zoom) => {
        state.regionPopulation.zoom = zoom
    },
    SET_CITYCENTER: (state, cityCenter) => {
        state.regionPopulation.cityCenter = cityCenter
    },
    SET_AGE: (state, genderAge) => {
        state.regionPopulation.genderAge = genderAge
    },
    SET_USERS: (state, numberOfUsers) => {
        state.regionPopulation.numberOfUsers = numberOfUsers
    },
    SET_TOTALUSERS: (state, totalUsers) => {
        state.regionPopulation.totalUsers = totalUsers
    },
    SET_TYPE: (state, populationType) => {
        state.regionPopulation.populationType = populationType
    },
    SET_HEATMAP: (state, heatMap) => {
        state.regionPopulation.heatMap = heatMap
    },
    SET_LENGTHTIME: (state, lengthTime) => {
        state.regionPopulation.lengthTime = lengthTime
    },
    SET_HOMENUMBER: (state, homeOfNumber) => {
        state.regionPopulation.homeOfNumber = homeOfNumber
    },
    SET_CURRENTPOPULATION: (state, currentPopulation) => {
        state.regionPopulation.currentPopulation = currentPopulation
    },
    SET_TOTALNUMBER: (state, totalNumber) => {
        state.regionPopulation.totalNumber = totalNumber
    },
    SET_MOVEOUTNUM: (state, moveOutNum) => {
        state.floatingPopulation.moveOutNum = moveOutNum
    },
    SET_SHOWDIALOG: (state, showDialog) => {
        state.regionPopulation.showDialog = showDialog
    },
    SET_PARAMSNAME: (state, cityName) => {
        state.regionPopulation.cityName = cityName
        console.log(state.regionPopulation.cityName, 7777)
    }
}

const populationDistuibution = {
    state: state,
    actions: actions,
    mutations: mutations
}
export default populationDistuibution