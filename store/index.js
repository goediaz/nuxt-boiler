export const state = () => ({
  homeData: {},
  antagonistsData: {},
  userPreferredConsole: {}
})

export const mutations = {
  saveHomeData (state, payload) {
    state.homeData = payload
  },
  saveAntagonistsData (state, payload) {
    state.antagonistsData.nintendoData = payload.nintendo
    state.antagonistsData.xboxData = payload.xbox
  },
  savePreferredConsole (state, payload) {
    // TODO Found a more elegant way
    if (payload.selectedConsole === 'nintendo' && !state.userPreferredConsole.xbox) {
      state.userPreferredConsole[payload.selectedConsole] = payload.value
    } else if (payload.selectedConsole === 'nintendo' && state.userPreferredConsole.xbox) {
      state.userPreferredConsole[payload.selectedConsole] = payload.value
      state.userPreferredConsole.xbox = !payload.value
    } else if (payload.selectedConsole === 'xbox' && !state.userPreferredConsole.nintendo) {
      state.userPreferredConsole[payload.selectedConsole] = payload.value
    } else if (payload.selectedConsole === 'xbox' && state.userPreferredConsole.nintendo) {
      state.userPreferredConsole[payload.selectedConsole] = payload.value
      state.userPreferredConsole.nintendo = !payload.value
    }
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
  },
  getPreferredConsole: (state) => {
    return state.userPreferredConsole
  }
}
