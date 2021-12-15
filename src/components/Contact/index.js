import React, { useState } from "react"
import "../../sass/contact.scss"
import { useForm } from "react-hook-form"

const Contact = () => {
  const { register, handleSubmit, errors } = useForm()
  const [formSend, setFormSend] = useState("")

  const onSubmit = (data, e) => {
    if (data.name && data.email && data.bio && data.phone) {
      setFormSend(true)
      e.target.reset()
      window.alert("Form has been sent")
    }
  }

  const showError = (
    <div>
      <span className="error">this field is required</span>
    </div>
  )

  return (
    // <div className="contact-wrapper">
    //   <div className="title-contact">
    //     <div id="contact" className="title-text">
    //       CONTACT US
    //     </div>
    //     <div className="title-add">
    //       <a href="#hotel" className="link">
    //         Hotel
    //       </a>
    //     </div>
    //   </div>
    //   <div className="content-background">
    //     <div className="content-text">
    //       If you have any questions please send us a message
    //     </div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <span>FORM</span>
      <div className="name-wrapper">
        <label>name:</label>
        <input
          type="text"
          name="name"
          {...register("test", { required: true })}
          // style={errors.name && { border: "1px solid red" }}
        />
      </div>
      {errors.name && showError}

      <div className="email-wrapper">
        <label>email:</label>
        <input
          type="email"
          name="email"
          {...register("test", { required: true })}
          style={errors.email && { border: "1px solid red" }}
        />
      </div>
      {errors.email && showError}

      <div className="phone-wrapper">
        <label>phone:</label>
        <input
          type="phone"
          name="phone"
          {...register("test", { required: true })}
          style={errors.phone && { border: "1px solid red" }}
        />
      </div>
      {errors.phone && showError}

      <div className="bio-wrapper">
        <label>bio:</label>
        <textarea
          name="bio"
          id="bio"
          {...register("test", { required: true })}
          style={errors.bio && { border: "1px solid red" }}
          rows="10"
        ></textarea>
      </div>
      {errors.bio && showError}

      <input type="submit" className="button" />
      {formSend && <span>form has been sent</span>}
    </form>
    //     <div className="content-text">
    //       Accusantium cumque, quas, ut corporis incidunt deserunt quae
    //       architecto voluptate delectus, inventore iure aliquid aliquam.
    //     </div>
    //   </div>
    // </div>
  )
}

export default Contact
