import React from "react"
import "../../sass/room.scss"
import image from "./hotel-1.jpg"

const Room = ({ title, price, size }) => {
  return (
    <div class="room-wrapper">
      <div class="image">
        <img src={image} alt="room"></img>
      </div>
      <div class="description">
        <div class="title">{title}</div>

        <div class="price">
          <div class="number">{price}</div>
          <div class="currency">$</div>
        </div>
        <div class="size">
          <div class="int">{size}</div>
          <div class="size">2</div>
        </div>
      </div>
    </div>
  )
}

export default Room
