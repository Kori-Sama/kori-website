import axios from "axios"
import { getToken } from "../utils/token"
import constants from "../utils/constants"

const token = constants.TOKEN_PREFIX + getToken()

const http = axios.create({ baseURL: constants.BASE_URL })

http.interceptors.request.use((config) => {
  config.headers.Authorization = token
  return config
})

export async function get(url: string, params?: Record<string, any>) {
  const query = new URLSearchParams(params).toString()
  console.log(`${url}?${query}`)
  const res = await http.get(`${url}?${query}`)
  return res.data as Data
}

export async function post(url: string, data: any) {
  const res = await http.post(url, data)
  return res.data as Data
}

export default http
