import React from "react"
import "../../sass/hero.scss"
import hotel1 from "../../materials/layout_materials/img/hotel-1.jpg"
import hotel2 from "../../materials/layout_materials/img/hotel-2.jpg"
import hotel3 from "../../materials/layout_materials/img/hotel-3.jpg"

const Hero = () => {
  return (
    <div class="inline-wrapper">
      <div class="imageHero-wrapper">
        <div class="imageHero">
          <img src={hotel1} alt="hotel" />
        </div>
        <div class="imageHero">
          <img src={hotel2} alt="hotel" />
        </div>
        <div class="imageHero">
          <img src={hotel3} alt="hotel" />
        </div>
      </div>
    </div>
  )
}

export default Hero
