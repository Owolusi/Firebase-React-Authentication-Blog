import React from 'react';
import { useEffect, useState, useRef } from 'react'
//import {Popup } from 'react-leaflet'
//import emailjs from '@emailjs/browser'
import './index.css'



const Contact = () => {
  //const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => {
      clearTimeout(timeoutId); // Cancel the timeout when the component unmounts
    };
  }, []);
  

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_24z9oga',
        'template_nvaiqoa',
        refForm.current, 
        'aosa5YaqVHhMv5JMX',
      )


      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className='contact-heading'>
           
          </h1>
          <p className='contact-text'>
            I am willing to partner in large projects, or work as a freelancer. If you have 
            questions, and want to say hi, kindly use the form below.Thank you.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Contact