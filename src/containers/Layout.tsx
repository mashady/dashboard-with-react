import { Outlet } from "react-router-dom"

import Nav from "../components/Nav"
import SmallNav from "../components/SmallSizeNav"

export default function Layout() {
  return (
    <>
      <Nav />
      <main className="md:ml-[300px] bg-main text-main min-h-screen ">
        <SmallNav />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </>
  )
}
