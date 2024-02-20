import { Navigate } from "react-router-dom"
import { getToken } from "../utils/token"
import { ReactElement } from "react"

const Auth = ({ children }: { children: ReactElement }) => {
  const token = getToken()
  return <>{token ? children : <Navigate to="/login" replace />}</>
}

export default Auth
