import axios from 'axios'

export default function ({ store }) {
  return axios.get(`${process.env.baseURL}/data/home.json`).then(res => store.commit('saveHomeData', res.data))
}
