export const state = () => ({
  homeData: {},
  antagonistsData: {}
})

export const mutations = {
  saveHomeData (state, payload) {
    state.homeData = payload
  },
  saveAntagonistsData (state, payload) {
    state.antagonistsData.nintendoData = payload.nintendo
    state.antagonistsData.xboxData = payload.xbox
  }
}

export const getters = {
  getSavedHomeData: (state) => {
    return state.homeData
  },
  getSavedAntagonistsData: (state) => {
    return state.antagonistsData
  },
  getNintendoData: (state) => {
    return state.antagonistsData.nintendoData
  },
  getXboxData: (state) => {
    return state.antagonistsData.xboxData
  }
}
