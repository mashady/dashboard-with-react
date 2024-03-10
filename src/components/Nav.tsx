import { NavLink } from "react-router-dom"
import { IoIosStats } from "react-icons/io"
import { HiOutlineUsers } from "react-icons/hi2"
import { MdPostAdd } from "react-icons/md"
import { IoSettingsSharp } from "react-icons/io5"
import { IoLogInOutline } from "react-icons/io5"
import { SiAuth0 } from "react-icons/si"

import "../styles/nav.css"

export default function Nav() {
  return (
    <div className="bg-white text-main fixed hidden md:block w-[300px] h-full p-6">
      <div className=" py-4 border-b-[1px] mb-4">
        <span className="text-3xl ">Board</span>
      </div>
      <div>
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
  )
}
