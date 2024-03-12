import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function Login() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center dark:bg-[#1f1f1f] bg-[#f7f8f9]  text-main">
        <div className="w-[500px] h-[400px] bg-white dark:bg-[#121212] dark:text-white rounded shadow">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center dark:text-white">
              Log in
            </h1>
            <div className="flex gap-5 justify-center mt-4">
              <div className="flex w-[50%] h-[30px] items-center dark:text-white dark:bg-[#1f1f1f] bg-[#f7f8f9] p-2 rounded  cursor-pointer">
                <FaTwitter className="text-xl mr-2" />
                <span className="text-lg">Login with twitter</span>
              </div>
              <div className="flex items-center w-[50%] h-[30px] dark:text-white dark:bg-[#1f1f1f] bg-[#f7f8f9] p-2 rounded cursor-pointer">
                <FaFacebook className="text-xl mr-2" />
                <span className="text-lg">Login with facebook</span>
              </div>
            </div>
            <div className="flex justify-center text-xl dark:text-white">
              or
            </div>
            <div>
              <label className="dark:text-white">Email</label>
              <input
                type="email"
                className="mb-4 dark:border-white dark:text-white  border-[#191919] border-opacity-25 focus:border-[#077a8f] bg-inherit  border-[2px]  text-[#191919] text-[16px] rounded-lg block w-full p-[0.3rem] mt-2.5 transition duration-300 ease-out outline-none"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label className="dark:text-white">Password</label>
                <span className="underline font-bold text-[0.9rem] text-[#077a8f]">
                  Forget?
                </span>
              </div>

              <input
                type="email"
                className="mb-4 dark:border-white dark:text-white  border-[#191919] border-opacity-25 focus:border-[#077a8f] bg-inherit  border-[2px]  text-[#191919] text-[16px] rounded-lg block w-full p-[0.3rem] mt-2.5 transition duration-300 ease-out outline-none"
              />
            </div>
            <button className="w-full h-[35px] text-white bg-[#077a8f] rounded">
              Login
            </button>
            <div className="flex justify-center mt-2 dark:text-white">
              Dont have an account?{" "}
              <span className="underline ml-2 font-bold text-[0.9rem] text-[#077a8f]">
                <Link to="/register">get started</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
