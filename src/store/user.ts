import { create } from "zustand"
import http from "../api/http"
import { setToken } from "../utils/token"

interface UserState {
  login: (userInfo: UserInfo) => Promise<string>
  register: (userInfo: UserInfo, repeat: string) => Promise<string>
}

const useUserStore = create<UserState>()((_set) => ({
  login: async (userInfo: UserInfo) => {
    const msg = validatePwd(userInfo.password)
    if (msg) return msg

    return await post("/login", userInfo)
  },
  register: async (userInfo: UserInfo, repeat: string) => {
    const msg = validatePwd(userInfo.password)
    if (msg) return msg

    if (userInfo.password !== repeat) {
      return "Passwords do not match!"
    }
    return await post("/register", userInfo)
  },
}))

export default useUserStore

const validatePwd = (password: string) => {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
  if (reg.test(password)) return ""
  return "Password must contain at least one letter and one number!"
}

const post = async (url: string, userInfo: UserInfo) => {
  const res = await http.post(url, userInfo)
  const token = res.headers.authorization
  if (token) setToken(token)
  const data = res.data as Data
  if (data.code === 200) return "ok"
  return data.msg
}
