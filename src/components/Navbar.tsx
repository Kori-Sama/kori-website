import { FaHome } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const handleHome = () => navigate("/")

  return (
    <>
      <div
        className="flex align-middle justify-start items-center
        flex-row w-full h-1/8 py-4
        md:flex-col md:h-screen md:w-24 md:p-4 
        bg-gray-700"
      >
        <img
          src="src/assets/avatar.jpg"
          className="rounded-full size-16
          md:ml-4 md:mb-8 ml-2 mr-4"
        />
        <div onClick={handleHome} className="icon">
          <FaHome className="text-3xl" />
        </div>
      </div>
    </>
  )
}

export default Navbar
