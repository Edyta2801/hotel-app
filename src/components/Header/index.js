import React from "react"
import "../../sass/header.css";

import logo from "../../materials/layout_materials/img/logo.png"
import user from "../../materials/layout_materials/img/user.jpg"

const Header = () => {
  return (
    <>
    <div className='container'>
      <div classNameName="header-wrapper">
        <div className="logo">
          <div className="logo-image">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="search">
          <div className="search-input">
            <form>
              <input type="text" placeholder="Search rooms" />
            </form>
          </div>
        </div>
        <div className="avatar">
          <div className="avatar-image">
            <img src={user} alt="user" />
          </div>
          <div className="hello">
            <div className="hello-text">Hi John</div>
          </div>
        </div>
      </div>
      <div className="line"></div></div>
    </>
  )
}

export default Header
