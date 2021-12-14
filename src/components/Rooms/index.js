import React from "react"
import Room from "../Room"
import "../../sass/rooms.scss"
import rooms from "../../assets/data/rooms.json"

function Rooms() {
  // const [searchTerm, setSearchTerm] = React.useState("")
  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value)
  // }

  const elements = Object.values(rooms)[0]
  console.log(elements)
  const [searchTerm, setSearchTerm] = React.useState("")
  const filterData = (text) => {
    const filteredUserData = rooms.filter((item) => {
      const name = item.title
      return name.toLowerCase().includes(text)
    })
    setSearchTerm(filteredUserData)
  }

  const handleChange = (text) => {
    setSearchTerm(text)
    filterData(text)
  }
  
  // TODO fix searchTerm
  return (
    <>
      <div class="search">
        <div class="search-input">
          <form>
            <input
              type="text"
              placeholder="Search rooms"
              searchTerm={searchTerm}
              handleChange={handleChange}

              // value={searchTerm}
              // onChange={handleChange}
            />
          </form>
        </div>
      </div>

      <ul>
        {elements.map((data) => (
          <Room
            key={data.id}
            title={data.title}
            price={data.price}
            size={data.size}
          />
        ))}
      </ul>
    </>
  )
}

export default Rooms
