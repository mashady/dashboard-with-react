import { Link, NavLink } from "react-router-dom"
import { CiMenuBurger } from "react-icons/ci"
import { IoIosStats } from "react-icons/io"
import { HiOutlineUsers } from "react-icons/hi2"
import { MdPostAdd } from "react-icons/md"
import { IoSettingsSharp } from "react-icons/io5"
import { IoLogInOutline } from "react-icons/io5"
import { SiAuth0 } from "react-icons/si"

export default function SmallNav() {
  return (
    <div className="md:hidden p-8 flex dark:bg-[#121212] dark:text-white bg-white justify-between items-center  mb-2">
      <Link to="/" className="text-3xl">
        Board<span className="text-3xl font-bold text-[#077a8f]">.</span>
      </Link>
      <div className="group  ">
        <CiMenuBurger className="text-2xl cursor-pointer " />
        {/** small windows menu */}
        <div className="group-hover:block dark:bg-[#121212] dark:text-white bg-white  w-[350px] hidden  absolute right-[24px]  top-[60px] pt-10">
          <div className="">
            <ul className="py-2">
              <NavLink className="" to="/">
                {({ isActive }) => (
                  <li
                    className={
                      isActive
                        ? "bg-sec text-white p-4 rounded mb-2"
                        : " p-4 rounded mb-2"
                    }
                  >
                    <div className="flex items-center ">
                      <IoIosStats className="text-2xl cursor-pointer mr-4" />
                      <span className="text-lg">Stats</span>
                    </div>
                  </li>
                )}
              </NavLink>
              <NavLink className="" to="/users">
                {({ isActive }) => (
                  <li
                    className={
                      isActive
                        ? "bg-sec text-white p-4 rounded mb-2"
                        : " p-4 rounded mb-2"
                    }
                  >
                    <div className="flex items-center">
                      <HiOutlineUsers className="text-2xl cursor-pointer mr-4" />
                      <span className="text-lg">Users</span>
                    </div>
                  </li>
                )}
              </NavLink>
              <NavLink className="" to="/posts">
                {({ isActive }) => (
                  <li
                    className={
                      isActive
                        ? "bg-sec text-white p-4 rounded mb-2"
                        : " p-4 rounded mb-2"
                    }
                  >
                    <div className="flex items-center">
                      <MdPostAdd className="text-2xl cursor-pointer mr-4" />

                      <span className="text-lg">posts</span>
                    </div>
                  </li>
                )}
              </NavLink>
              <NavLink className="" to="/settings">
                {({ isActive }) => (
                  <li
                    className={
                      isActive
                        ? "bg-sec text-white p-4 rounded mb-2"
                        : " p-4 rounded mb-2"
                    }
                  >
                    <div className="flex items-center">
                      <IoSettingsSharp className="text-2xl cursor-pointer mr-4" />

                      <span className="text-lg">settings</span>
                    </div>
                  </li>
                )}
              </NavLink>
              <NavLink className="" to="/register">
                {({ isActive }) => (
                  <li
                    className={
                      isActive
                        ? "bg-sec text-white p-4 rounded mb-2"
                        : " p-4 rounded mb-2"
                    }
                  >
                    <div className="flex items-center">
                      <SiAuth0 className="text-2xl cursor-pointer mr-4" />
                      <span className="text-lg">register</span>
                    </div>
                  </li>
                )}
              </NavLink>
              <NavLink to="/login">
                {({ isActive }) => (
                  <li
                    className={
                      isActive
                        ? "bg-sec text-white p-4 rounded mb-2"
                        : " p-4 rounded mb-2"
                    }
                  >
                    <div className="flex items-center">
                      <IoLogInOutline className="text-2xl cursor-pointer mr-4" />

                      <span className="text-lg">login</span>
                    </div>
                  </li>
                )}
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
