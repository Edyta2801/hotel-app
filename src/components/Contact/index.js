import React from "react"
import "../../sass/contact.scss"

const Contact = () => {
  return (
    <div class="contact-wrapper">
      <div class="title-contact">
        <div id="contact" class="title-text">
          CONTACT US
        </div>
        <div class="title-add">
          <a href="#hotel" class="link">
            Hotel
          </a>
        </div>
      </div>
      <div class="content-background">
        <div class="content-text">
          If you have any questions please send us a message
        </div>
        <div class="form-wrapper">
          <div class="cell">
            <form>
              <input type="text" placeholder="Name and Surname" />
            </form>
          </div>
          <div class="cell">
            <form>
              <input type="text" placeholder="Email" />
            </form>
          </div>
          <div class="cell">
            <form>
              <input type="text" placeholder="Phone number" />
            </form>
          </div>
          <div class="cell">
            <form>
              <textarea>Describe your message...</textarea>
            </form>
          </div>
          <div class="button-wrapper">
            <button class="button" type="button">
              SEND MESSAGE
            </button>
          </div>
        </div>
        <div class="content-text">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </div>
      </div>
    </div>
  )
}

export default Contact
