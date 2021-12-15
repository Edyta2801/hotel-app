import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUsPage from "../../routes/pages/AboutUsPage"
import HotelPage from "../../routes/pages/HotelPage"
import ContactUsPage from "../../routes/pages/ContactUsPage"
import RoomsSearch from "../../components/RoomsSearch"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/rooms" element={<RoomsSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
