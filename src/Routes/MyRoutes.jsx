import { Route, Routes } from "react-router-dom"
import LandingPages from "../pages/LandingPages"
import DetailCard from "../pages/DetailCard"


const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/detail/:id" element={<DetailCard />} />
    </Routes>
  )
}

export default MyRoutes
