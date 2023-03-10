import React from 'react'
import './css/ContactMe.css'

function ContactMe(props) {
  return (
    <div>
    <section class="section-4" id="section-4">
        <h1 class="section-heading section-4-heading">{props.heading}</h1>
        <form class="contact-form center">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <input type="submit" value="Submit" class="contact-form-btn" />
        </form>
      </section>
    </div>
  )
}

export default ContactMe