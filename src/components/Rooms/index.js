import React from "react"
import Room from "../Room"
import "../../sass/rooms.scss"

function Rooms(title, price, size) {
  const elements = [
    {
      id: "0001",
      title: "Single",
      price: "80",
      currency: "usd",
      image: "/rooms/room-1.jpeg",
      size: "11m",
    },
    {
      id: "0002",
      title: "Double",
      price: "100",
      currency: "usd",
      image: "/rooms/room-2.jpeg",
      size: "16m",
    },
    {
      id: "0003",
      title: "Triple",
      price: "120",
      currency: "usd",
      image: "/rooms/room-3.jpeg",
      size: "20m",
    },
    {
      id: "0004",
      title: "Quad",
      price: "140",
      currency: "usd",
      image: "/rooms/room-4.jpeg",
      size: "28m",
    },
    {
      id: "0005",
      title: "Queen",
      price: "160",
      currency: "usd",
      image: "/rooms/room-5.jpeg",
      size: "28m",
    },
    {
      id: "0006",
      title: "King",
      price: "200",
      currency: "usd",
      image: "/rooms/room-6.jpeg",
      size: "45m",
    },
  ]
  const [searchTerm, setSearchTerm] = React.useState("")
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
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
              value={searchTerm}
              onChange={handleChange}
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
