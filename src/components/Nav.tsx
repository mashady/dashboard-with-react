import { NavLink } from "react-router-dom"
import { IoIosStats } from "react-icons/io"
import { HiOutlineUsers } from "react-icons/hi2"
import { MdPostAdd } from "react-icons/md"
import { IoSettingsSharp } from "react-icons/io5"
import { IoLogInOutline } from "react-icons/io5"
import { SiAuth0 } from "react-icons/si"
import { CiDark } from "react-icons/ci"
import { CiLight } from "react-icons/ci"

import "../styles/nav.css"
import { useState } from "react"

export default function Nav() {
  const [dark, setDark] = useState(false)
  function handleClick() {
    setDark(!dark)
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark")
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark")
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light"
    } else {
      localStorage.theme = "dark"
    }
  }
  return (
    <div className="dark:bg-[#121212] dark:text-white bg-white text-main fixed hidden md:block w-[300px] h-full p-6">
      <div className=" py-4 border-b-[1px] mb-4 flex items-center justify-between">
        <span className="text-3xl ">
          Board
          <span className="text-3xl  font-bold text-[#077a8f]">.</span>
        </span>
        <div>
          {dark ? (
            <CiDark
              color="white"
              fontSize={25}
              className="cursor-pointer mt-[1px]"
              onClick={handleClick}
            />
          ) : (
            <CiLight
              color="black"
              fontSize={25}
              className="cursor-pointer mt-[1px]"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      {/** dark mode toggle */}
      <div className="flex" onClick={handleClick}>
        <div className="flex-initial w-64 font-bold underline decoration-sky-500 text-red-800">
          Change Mode (Dark/Light)
        </div>
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
          <div className="ml-2 mt-6 mb-2 font-bold text-[0.88rem]">
            Authentication
          </div>
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
