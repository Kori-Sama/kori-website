import { RouterProvider } from "react-router-dom"
import { Suspense } from "react"
import "./index.css"
import router from "./router"
import Loading from "./components/Loading"

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
