import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"
export default function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />

    </div>
  )
}