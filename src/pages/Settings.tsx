import { Link } from "react-router-dom"

export default function Settings() {
  return (
    <>
      <div>
        <div className="flex flex-col dark:text-white">
          <div className="text-[14px]">
            <span className="cursor-pointer hover:underline">
              <Link to="/">Pages</Link>
            </span>
            <span className="mx-2">/</span>
            <span className="cursor-pointer  hover:underline">
              {" "}
              <Link to="/settings">Settings</Link>
            </span>
          </div>
          <h1 className="text-3xl font-bold cursor-pointer">Settings</h1>
        </div>
        <div className="bg-white dark:bg-[#121212] dark:text-white rounded shadow my-4 min-h-screen p-4">
          <div>
            <h2 className="text-lg font-bold">Profile settings</h2>
            <div className="my-4">
              {/** name */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5 ">
                <div className="pt-2">
                  <label>Name</label>
                </div>
                <div className=" lg:col-span-2">
                  <input
                    type="text"
                    className="mb-4 dark:border-white dark:text-white  border-[#191919] border-opacity-25 focus:border-[#077a8f] bg-inherit  border-[2px]  text-[#191919] text-[16px] rounded-lg block w-full p-[0.3rem] mt-2.5 transition duration-300 ease-out outline-none"
                  />
                </div>
              </div>
              {/** email */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5">
                <div className="">
                  <label>Email</label>
                </div>
                <div className=" lg:col-span-2">
                  <input
                    type="email"
                    className="mb-4 dark:border-white dark:text-white  border-[#191919] border-opacity-25 focus:border-[#077a8f] bg-inherit  border-[2px]  text-[#191919] text-[16px] rounded-lg block w-full p-[0.3rem] mt-2.5 transition duration-300 ease-out outline-none"
                  />
                </div>
              </div>
              {/** bio */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5 ">
                <div className="">
                  <label>Bio</label>
                </div>
                <div className=" lg:col-span-2">
                  <textarea className="mb-4 dark:border-white dark:text-white  border-[#191919] border-opacity-25 focus:border-[#077a8f] bg-inherit  border-[2px]  text-[#191919] text-[16px] rounded-lg block w-full p-[0.3rem] mt-2.5 transition duration-300 ease-out outline-none" />
                </div>
              </div>
              {/** available for work */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-5 ">
                <div className="">
                  <label>Available for work</label>
                </div>
                <div className=" lg:col-span-2">
                  <div className=" lg:col-span-2">
                    <select className="mb-4 dark:border-white dark:text-white  border-[#191919] border-opacity-25 focus:border-[#077a8f] bg-inherit  border-[2px]  text-[#191919] text-[16px] rounded-lg block w-full p-[0.3rem] mt-2.5 transition duration-300 ease-out outline-none">
                      <option value="yes">yes</option>
                      <option value="no">no</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 mt-6 mb-6"></div>
          <div className="w-full  flex justify-end">
            <button className="bg-[#077a8f] text-white rounded h-[40px] text-lg w-[70px]">
              save
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
