import { useState } from "react"

const LoginForm = ({ handleSubmit }: { handleSubmit: Function }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="flex flex-col justify-between h-full">
      <h1 className="text-4xl text-center mb-4 md:mt-6 md:mb-0">Login</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(username, password)
        }}
      >
        <input
          className="p-2 m-2 rounded-sm"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-2 m-2 rounded-sm"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-gray-700 text-white font-bold rounded-md
          py-2 px-6 mt-4 md:px-8 md:mt-6"
          type="submit"
        >
          Submit
        </button>
      </form>
      <a href="/register" className="text-blue-300 underline">
        Register
      </a>
    </div>
  )
}

export default LoginForm
