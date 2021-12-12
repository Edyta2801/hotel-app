import React from "react"
import "../../sass/sidebar.scss"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div class="sections-wrapper">
      <div class="sidebar-wrapper">
        <div class="sidebar-item">
          <div class="sidebar-text">
            <a href="#about">
              <Link to="/">ABOUT US </Link>
            </a>
          </div>
        </div>
        <div class="sidebar-item">
          <div class="sidebar-text">
            <a href="#hotel">
              <Link to="/hotel">HOTEL</Link>
            </a>
          </div>
        </div>
        <div class="sidebar-item">
          <div class="sidebar-text">
            <a href="#contact">
              <Link to="/contact">CONTACT US</Link>
            </a>
          </div>
        </div>
        <div class="sidebar-item">
          <div class="sidebar-text">
            <a href="#rooms">
              <Link to="/rooms">ROOMS</Link>
            </a>
          </div>
        </div>
        <div class="trademark">
          <div class="trademark-text">© 2021 All right reserved</div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
