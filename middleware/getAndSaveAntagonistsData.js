import axios from 'axios'

export default function ({ store }) {
  const antagonistDataFromStore = store.getters.getSavedAntagonistsData
  const isObjEmpty = Object.keys(antagonistDataFromStore.length === 0 && antagonistDataFromStore.constructor === Object)
  return isObjEmpty ? axios.get(`${process.env.baseURL}/data/antagonists.json`).then((res) => {
    const nintendo = res.data.nintendo
    const xbox = res.data.xbox
    store.commit('saveAntagonistsData', {
      nintendo,
      xbox
    })
  }) : null
}
