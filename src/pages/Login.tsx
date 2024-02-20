import { useState } from "react"
import LoginForm from "../components/LoginForm"
import SideImg from "../components/SideImg"
import { useUserStore } from "../store"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const login = useUserStore((state) => state.login)

  const [msg, setMsg] = useState("")

  const handleSubmit = async (username: string, password: string) => {
    const msg = await login({ username, password })
    if (msg === "ok") {
      navigate("/", { replace: true })
    } else {
      setMsg(msg)
    }
  }

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    shadow-2xl bg-gray-200 rounded-2xl md:w-1/3 md:h-2/5 w-full
    flex justify-end"
    >
      <div className="flex-1 px-10 py-8 ">
        <LoginForm handleSubmit={handleSubmit} />
      </div>
      <SideImg />
    </div>
  )
}

export default Login
