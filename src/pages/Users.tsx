import { Link } from "react-router-dom"
import UsersTable from "../components/UsersTable"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Users() {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <div className="text-[14px]">
            <span className="cursor-pointer hover:underline">
              <Link to="/">Pages</Link>
            </span>
            <span className="mx-2">/</span>
            <span className="cursor-pointer  hover:underline">
              {" "}
              <Link to="/users">Users</Link>
            </span>
          </div>
          <h1 className="text-3xl font-bold cursor-pointer">Users</h1>
        </div>
        {/** users table */}
        <div className="bg-white h-auto rounded shadow my-4">
          <UsersTable />
        </div>
      </div>
    </>
  )
}
