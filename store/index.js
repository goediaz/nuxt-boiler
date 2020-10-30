export const state = () => ({
  homeData: {}
})

export const mutations = {
  saveHomeData (state, payload) {
    state.homeData = payload
  }
}
