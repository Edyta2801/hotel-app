import React from "react"
import "../../sass/header.scss"

import logo from "../../materials/layout_materials/img/logo.png"
import user from "../../materials/layout_materials/img/user.jpg"

const Header = () => {
  return (
    <>
      <div class="sections-wrapper">
        <div class="header-wrapper">
          <div class="logo">
            <div class="logo-image">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div class="search">
            <div class="search-input">
              <form>
                <input type="text" placeholder="Search rooms" />
              </form>
            </div>
          </div>
          <div class="avatar">
            <div class="avatar-image">
              <img src={user} alt="user" />
            </div>
            <div class="hello">
              <div class="hello-text">Hi John</div>
            </div>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </>
  )
}

export default Header
