import React, {
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
} from "react"
import "../../sass/header.scss"
import logo from "../../materials/layout_materials/img/logo.png"
import user from "../../materials/layout_materials/img/user.jpg"

import { SearchContext } from "../RoomsSearch"

const HeaderRooms = ({ autoFocus }) => {
  // const handleChange = (e) => {
  //   handleSearchText(e.target.value)}

  const inputRef = useRef(null)
  const [focused, setFocused] = useState(null)
  const context = useContext(SearchContext)

  useLayoutEffect(() => {
    if (autoFocus) {
      inputRef.current.focus()
      setFocused(true)
    }
  }, [autoFocus])

  useEffect(() => {
    function handleClick(event) {
      if (event.target === inputRef.current) {
        inputRef.current.focus()
        setFocused(true)
      } else {
        // inputRef.current.blur()
        setFocused(false)
      }
    }

    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  })

  function handleInputChange(event) {
    context.setInputValue(event.currentTarget.value)
  }

  const focusCn = focused ? "HeaderRooms focused" : "HeaderRooms"

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
            <div
              class="search-input"
              // style={{ display: "none" }}
            >
              <div className={focusCn}>
                <form>
                  <input
                    type="search"
                    placeholder="Search rooms"
                    ref={inputRef}
                    onChange={handleInputChange}
                  />
                </form>
              </div>
              {/* {data
                .filter((item) => {
                  if (!value) return true
                  if (item.title.toLowerCase().includes(value)) {
                    return true
                  }
                  return false
                })
                .map((item) => (
                
                    <Room
                      key={item.id}
                      title={item.title}
                      price={item.price}
                      size={item.size}
                    />
                
                ))} */}
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
