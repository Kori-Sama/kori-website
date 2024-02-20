const getToken = () => {
  return localStorage.getItem("token")
}

const setToken = (token: string) => {
  token = token.replace("Bearer ", "")
  localStorage.setItem("token", token)
}

const clearToken = () => {
  localStorage.removeItem("token")
}

export { getToken, setToken, clearToken }
