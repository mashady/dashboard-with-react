import { Outlet } from "react-router-dom"

import Nav from "../components/Nav"
import SmallNav from "../components/SmallSizeNav"

export default function Layout() {
  return (
    <>
      <Nav />
      <main className="md:ml-[300px] dark:bg-[#1f1f1f] bg-[#f7f8f9]  text-main ">
        <SmallNav />
        <div className="p-6 min-h-screen">
          <Outlet />
        </div>
      </main>
    </>
  )
}
