import { Outlet } from "react-router-dom";
import Header from "../Header/Header";



export default function Root() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Outlet/>
    </div>
  )
}
