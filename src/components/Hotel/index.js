import React from "react"
import "../../sass/hotel.scss"
import user3 from "../../materials/layout_materials/img/user-3.jpg"
import user4 from "../../materials/layout_materials/img/user-3.jpg"
import user5 from "../../materials/layout_materials/img/user-3.jpg"
import user6 from "../../materials/layout_materials/img/user-3.jpg"
import quotes from "../../materials/layout_materials/img/double-quote-serif-left-256.png"
import user1 from "../../materials/layout_materials/img/user-1.jpg"
import user2 from "../../materials/layout_materials/img/user-2.jpg"

const Hotel = () => {
  return (
    <div class="hotel-wrapper">
      <div class="title-hotel">
        <div id="hotel" class="title-text">
          HOTEL LAS PALMAS
        </div>
        <div class="title-add">
          <a href="#link" class="link">
            Albufeira, Portrugal
          </a>
          <div class="votes">
            <div class="float">8.6</div>
            <div class="number">429 VOTES</div>
          </div>
        </div>
      </div>
      <div class="content-background">
        <div class="content-column">
          <div class="big-column">
            <div class="row-one">
              <div class="content-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </div>
              <div class="content-description">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </div>
            </div>

            <div class="line"></div>

            <div class="row-two">
              <div class="content-description">
                <span>Close to the beach</span>
                <span>Free airport shuttle</span>
                <span>Air conditioning and heating</span>
                <span>We speak all languages</span>
              </div>
              <div class="content-description">
                <span>Breakfast included</span>
                <span>Free wifi in all rooms</span>
                <span>Pets allowed</span>
                <span>Perfect for families</span>
              </div>
            </div>

            <div class="line"></div>

            <div class="row-three">
              <div class="text-avatar">
                Lucy and three other friends recommend this hotel
              </div>
              <div class="four-avatars">
                <div class="avatar">
                  <img src={user3} alt="user" />
                </div>
                <div class="avatar">
                  <img src={user4} alt="user" />
                </div>
                <div class="avatar">
                  <img src={user5} alt="user" />
                </div>
                <div class="avatar">
                  <img src={user6} alt="user" />
                </div>
              </div>
            </div>
          </div>

          <div class="small-column">
            <div class="card">
              <img class="quotes" src={quotes} alt="quotes" />
              <div class="text-card">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe.
              </div>
              <div class="card-bottom">
                <div class="avatar-image">
                  <img src={user1} alt="user" />
                </div>
                <div class="mini-text">
                  <div class="avtar-name">NICK SMITH</div>
                  <div class="avatar-date">Feb 23rd, 2017</div>
                </div>
                <div class="votes">
                  <div class="float">7.8</div>
                </div>
              </div>
            </div>
            <div class="card">
              <img class="quotes" src={quotes} alt="quotes" />
              <div class="text-card">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe.
              </div>
              <div class="card-bottom">
                <div class="avatar-image">
                  <img src={user2} alt="user" />
                </div>
                <div class="mini-text">
                  <div class="avatar-name">MARY THOMAS</div>
                  <div class="avatar-date">Sep 13th, 2017</div>
                </div>
                <div class="votes">
                  <div class="float">9.3</div>
                </div>
              </div>
            </div>
            <div class="link-row">
              <a href="#link" class="link">
                Show all &rarr;
              </a>
            </div>
          </div>

          <div class="button-column">
            <button
              class="button"
              type="button"
              data-hover="ONLY 4 ROOMS LEFT"
              data-active="I'M ACTIVE"
            >
              <div>BOOK NOW</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
