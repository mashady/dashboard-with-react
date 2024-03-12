import { MdWebStories } from "react-icons/md"
import { GrMoney } from "react-icons/gr"
import { BsPersonCheckFill } from "react-icons/bs"
import { HiOutlineUsers } from "react-icons/hi2"
import { GrProjects } from "react-icons/gr"
import { GrTransaction } from "react-icons/gr"

import { Link } from "react-router-dom"
import ChartConatiner from "../components/ChartContainer"

export default function Stats() {
  const links = [
    {
      name: "Earning",
      icon: <GrMoney className="text-[1.2rem] " />,
      number: "150.00$",
    },
    {
      name: "Users",
      icon: <HiOutlineUsers className="text-[1.2rem] " />,
      number: "300",
    },
    {
      name: "Posts",
      icon: <MdWebStories className="text-[1.2rem] " />,
      number: "99",
    },
    {
      name: "Visitors",
      icon: <BsPersonCheckFill className="text-[1.2rem] " />,
      number: "900",
    },
    {
      name: "Projects",
      icon: <GrProjects className="text-[1.2rem] " />,
      number: "999",
    },
    {
      name: "Transaction",
      icon: <GrTransaction className="text-[1.2rem] " />,
      number: "1500.00$",
    },
  ]
  return (
    <>
      <div>
        <div className="flex flex-col dark:text-white">
          <div className="text-[14px]">
            <span className="cursor-pointer hover:underline">
              <Link to="/stats">Pages</Link>
            </span>
            <span className="mx-2">/</span>
            <span className="cursor-pointer  hover:underline">
              {" "}
              <Link to="/stats">Stats</Link>
            </span>
          </div>
          <h1 className="text-3xl font-bold cursor-pointer">Stats</h1>
        </div>
        {/** stats */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-6">
          {links.map((link, index) => (
            <div
              className="bg-white dark:bg-[#121212] dark:text-white flex flex-row rounded-[20px] shadow-lg cursor-pointer"
              key={index}
            >
              <div className=" ml-4 flex justify-center items-center h-[90px]">
                <div className="simi-dark-bg w-12 h-12 flex justify-center items-center rounded-full">
                  {link.icon}
                </div>
              </div>
              <div className=" flex justify-center items-center ml-4">
                <div className="flex flex-col">
                  <div className="text-sm font-mediumn text-[#dbd7d]  ">
                    {link.name}
                  </div>
                  <div className="text-xl font-bold">{link.number}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/** chart start here */}
        <ChartConatiner />
        {/** add some posts and users table */}
      </div>
    </>
  )
}
