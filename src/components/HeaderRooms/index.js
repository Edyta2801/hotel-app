import React from "react"
import "../../sass/header.scss"

import logo from "../../materials/layout_materials/img/logo.png"
import user from "../../materials/layout_materials/img/user.jpg"

// const names = ["Single", "Double", "Triple", "Quad", "Queen", "King"]

function HeaderRooms() {
  //   const [searchTerm, setSearchTerm] = React.useState("")
  //   const handleChange = (event) => {
  //     setSearchTerm(event.target.value)
  //   }

  //   const results = !searchTerm
  //     ? names
  //     : names.filter((name) =>
  //         names.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  //       )

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
            <div class="search-input" style={{ display: "none" }}>
              <form>
                <input
                  type="text"
                  placeholder="Search rooms"
                  // value={searchTerm}
                  // onChange={handleChange}
                />
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

export default HeaderRooms
