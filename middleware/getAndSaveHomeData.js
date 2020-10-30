import axios from 'axios'

export default function ({ store }) {
  const homeDataFromStore = store.getters.getSavedHomeData
  const isObjEmpty = Object.keys(homeDataFromStore.length === 0 && homeDataFromStore.constructor === Object)
  return isObjEmpty ? axios.get(`${process.env.baseURL}/data/home.json`).then((res) => {
    const data = res.data.data
    const mappedData = {}
    data.forEach((console) => {
      mappedData[console.name] = console
    })
    store.commit('saveHomeData', {
      nintendo: mappedData.nintendo,
      xbox: mappedData.xbox
    })
  }) : null
}
