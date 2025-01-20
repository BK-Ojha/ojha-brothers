import React, { useEffect, useRef, useState } from 'react'
import {
  Container,
  Table,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
} from 'react-bootstrap'
import Footer from '../components/Footer'
import styled, { keyframes } from 'styled-components'
import WhatsappChat from './WhatsappChat'

const fadeSlideRight = keyframes`
from {
  opacity: 0;
  transform: translateX(15rem);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`
const AnimatedHeading = styled.h1`
  animation: ${({ inView }) => (inView ? fadeSlideRight : 'none')} 1.5s
    ease-in-out;
`
const AnimatedHeading2 = styled.h1`
  animation: ${({ inView }) => (inView ? fadeSlideLeft : 'none')} 1.5s
    ease-in-out;
`
const fadeSlideLeft = keyframes`
from{
  opactiy:0;
  transform:translateX(-10rem);
}
  to{
  opacity:1;
  transform:translateX(0)
  }`

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2rem); /* Start from below */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* End at the original position */
  }
`

// Styled component for the animated heading
const AnimatedHeading3 = styled.h1`
  font-family: 'Merriweather', serif;
  animation: ${({ inShortView }) => (inShortView ? fadeSlideUp : 'none')} 1.5s
    ease-in-out;
`
const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [blurVideo, setBlurVideo] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const handleShow = () => setShowModal(true)
  const handleClose = () => {
    setShowModal(false)
  }
  useEffect(() => {
    handleShow()
  }, [])

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    messageType: '',
    destination: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted', formData)
    // Add further logic to handle form submission (e.g., API call)
    alert('Form Submitted Successfully!')
  }

  const handleScroll = () => {
    const currentScroll = window.scrollY
    setBlurVideo(currentScroll > 100)
  }
  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    checkMobileView()
    window.addEventListener('resize', checkMobileView)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkMobileView)
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  const [inView, setInView] = useState(false)
  const [inShortView, setInShortView] = useState(false)
  const headingRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInShortView(true)
        }
      },
      { threshold: 0.5 }, // Trigger animation when 50% of the heading is visible
    )

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current)
      }
    }
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the element is visible
    )

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current)
      }
    }
  }, [])

  const videoContainer = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }

  const videoStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1',
    filter: blurVideo ? 'blur(10px)' : 'none',
    transition: 'filter 0.9s ease',
  }
  const mobileVideoStyle = {
    position: 'fixed',
    top: '6rem',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1',
    filter: blurVideo ? 'blur(10px)' : 'none',
    transition: 'filter 0.5s ease',
  }
  const contentStyle = {
    position: 'relative',
    paddingTop: '49rem',
    zIndex: '1',
  }

  const scrollUpStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const mouseImageStyle = {
    width: '5rem',
    height: 'auto',
    opacity: 1,
    animation: 'bounce 2s infinite',
  }
  const scrollUpTextStyle = {
    position: 'absolute',
    bottom: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const textScrollStyle = {
    width: '8rem',
    height: 'auto',
    color: 'white',
    opacity: 1,
    fontFamily: "'Pacifico', cursive",
    animation: 'bounce 2s infinite',
  }

  const colors = ['black', 'red']
  const text1 = 'GET IN TOUCH'
  const text2 = 'WELCOME TO '
  const text3 = '- HANUMAT KRIPA ROADLINES'

  return (
    <>
      <style>
        {`


          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
            @keyframes bounceText {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
            }

    .animated-paragraph {
      font-size: 1.5rem;
      animation: colorfulShadow 7s infinite;
      color: #fff; /* Text color */
      padding: 1rem;
      background: gray; /* Semi-transparent background */
      border-radius: 10px;
    }
  `}
      </style>

      <div
        style={{
          minHeight: '230vh',
          // marginTop: '1.5rem',
          marginBottom: '1.5rem',
          // paddingTop: '1.5rem',
          paddingBottom: '2.5rem',
          display: 'block',
          flexDirection: 'column',
        }}
      >
        <div style={{ flex: 1 }}>
          <Modal show={showModal} onHide={handleClose} centered size="xl">
            <div
              style={{
                boxShadow: '0px 10px 30px rgba(134, 36, 190, 0.4)', // Add prominent shadow here
                borderRadius: '12px', // Smooth corners
                // border: 'none',
              }}
            >
              <Modal.Header
                closeButton
                style={{
                  backgroundColor: '#f8f9fa',
                  borderBottom: '2px solid #ddd',
                  fontFamily: "'Pacifico', cursive",
                }}
              >
                <Modal.Title
                  className="text-center w-100 fw-bold"
                  style={{
                    fontFamily: "'Pacifico', cursive",
                    fontSize: '1.8rem',
                    textShadow: '0 4px 5px gray',
                  }}
                >
                  {text2.split('').map((char, index) => (
                    <span
                      key={index}
                      style={{ color: colors[index % colors.length] }}
                    >
                      {char}
                    </span>
                  ))}{' '}
                  <span style={{ color: 'white' }}>Ojha Brothers </span>
                  {text3.split('').map((char, index) => (
                    <span
                      key={index}
                      style={{ color: colors[index % colors.length] }}
                    >
                      {char}
                    </span>
                  ))}{' '}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  padding: '30px',
                  fontFamily: "'Pacifico', cursive",
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: '#333',
                  overflowY: 'auto', // Add scrollbar if content overflows
                }}
              >
                At{' '}
                <span style={{ fontWeight: 'bold', color: 'red' }}>
                  Ojha Brothers
                </span>
                , your satisfaction and peace of mind are our top priorities.
                Whether you have a question, need assistance with our services,
                or simply want to share feedback, we're always available to
                help. Our dedicated team is ready to provide the support you
                need to make your experience with us seamless and enjoyable.
                Don't hesitate to reach out anytime, and we'll ensure you get
                the help you're looking for. Your concerns matter to us, and
                we're here to address them promptly and efficiently. Let us know
                how we can serve you better!
              </Modal.Body>
            </div>
          </Modal>

          <div
            className="position-relative"
            style={{
              padding: '0',
              marginTop: '18rem',
              marginBottom: '50vh',
              // backgroundColor: 'var(--bs-secondary-bg)', // Correct inline CSS syntax
              // color: 'rgb(var(--bs-secondary-bg-rgb))',
              // background: 'linear-gradient(to right,#0072ff, red)',
              // backgroundColor: 'transparent',
              // padding: '9rem 1rem',
              height: '28rem',
              zIndex: -1,
            }}
          >
            <div style={{ marginTop: '-8rem', marginBottom: '7rem', flex: 1 }}>
              <AnimatedHeading3
                ref={headingRef}
                inShortView={inShortView}
                className="text-bold text-center"
                style={{
                  top: '-3rem',
                  // color: '#333',
                  // color: 'black',
                  fontFamily: 'cursive',
                  textShadow: '0 4px 5px gray',
                  fontWeight: '700',

                  // fontFamily: "'Merriweather', serif",
                  // animation: 'fadeIn 1.5s ease-in-out',
                }}
              >
                {' '}
                {text1.split('').map((char, index) => (
                  <span
                    key={index}
                    style={{
                      color: colors[index % colors.length], // Cycle through colors
                    }}
                  >
                    {char}
                  </span>
                ))}
              </AnimatedHeading3>
            </div>
            <img
              src="/dheeru_half_image.jpg"
              alt="Dheeru Half"
              style={{
                position: 'absolute',
                top: '7rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '20rem',
                height: '20rem',
                borderRadius: '50%',
                objectFit: 'cover',
                zIndex: 1,
                border: '3px solid white',
              }}
            />

            <Card
              className="p-4 mx-auto shadow"
              style={{
                maxWidth: '1000px',
                height: '600px',
                borderRadius: '2rem',
                border: 'none',
                // backgroundColor: 'transparent',
                background: 'linear-gradient(to right,white, blue)',
              }}
            >
              <Card.Body>
                <Row
                  className="align-items-center"
                  style={{
                    marginTop: '15rem',
                    fontFamily: "'Pacifico', cursive",
                  }}
                >
                  <Col xs={12} className="text-white">
                    <p
                      className=" fw-bold text-center "
                      style={{
                        letterSpacing: '3px',
                        fontSize: '2rem',
                        // color: 'white',
                      }}
                    >
                      Deepak Ojha (Dheeru Bhai)
                    </p>

                    <p>
                      <i
                        className="bi bi-geo-alt-fill text-start "
                        style={{ color: 'white', marginLeft: '13.5rem' }}
                      ></i>
                      {'  '}
                      Gram Aunjhar, Post Nibi, Thana Mau, Chitrakoot, Uttar
                      Pradesh
                    </p>
                    <p>
                      <i
                        className="bi bi-envelope-fill text-start"
                        style={{ color: 'white', marginLeft: '13.5rem' }}
                      ></i>
                      {'  '}deepakojha6386@gmail.com
                    </p>
                    <p>
                      <i
                        class="bi bi-telephone-fill text-start"
                        style={{ color: 'white', marginLeft: '13.5rem' }}
                      ></i>{' '}
                      {'  '}9838875119
                    </p>
                  </Col>
                </Row>

                <div className="d-flex align-items-center justify-content-center mt-4">
                  <Button
                    style={{
                      background: 'linear-gradient(to right, white, blue)',
                      padding: '0.8rem 2.5rem',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      letterSpacing: '1px',
                      border: 'none',
                      color: '#fff',
                      // fontFamily: "'Pacifico', cursive",
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease-in-out',
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.background =
                        'linear-gradient(to right,gray, black)')
                    }
                    onMouseOut={(e) =>
                      (e.target.style.background =
                        'linear-gradient(to right,black, gray)')
                    }
                  >
                    CALL / SEND{'-'}MAIL TO ACTION
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <Container
            fluid
            className="d-flex align-items-center justify-content-center"
            style={
              {
                // backgroundColor: '#fff',
                // padding: '20px',
              }
            }
          >
            <Card
              className=" w-100 "
              style={{
                // maxWidth: '100rem',
                // width: '50rem',
                // display: 'flex',
                // flexDirection: 'column',
                border: 'none',
              }}
            >
              <div
                className="row"
                style={{
                  minHeight: '30vh',
                }}
              >
                {/* Video Section */}
                <div
                  className="col-lg-6 col-12 d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: 'transparent', padding: '20px' }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    className=" rounded"
                    style={{ height: 'auto', maxWidth: '30rem' }}
                  >
                    <source src="/contact2_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Form Section */}
                <div
                  className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center"
                  style={
                    {
                      // top:"-3rem",
                      // height: '-20px',
                    }
                  }
                >
                  <AnimatedHeading
                    ref={headingRef}
                    inView={inView}
                    className="text-center"
                    style={{
                      color: 'red',
                      fontWeight: '700',
                      // color: 'black',
                      fontFamily: 'cursive',
                      textShadow: '0 4px 5px gray',
                      // fontFamily: "'Merriweather', serif",
                    }}
                  >
                    Leave us a message
                  </AnimatedHeading>
                  <hr style={{ color: 'black' }} />
                  <AnimatedHeading2
                    ref={headingRef}
                    inView={inView}
                    className="text-center"
                    style={{
                      color: '#333',
                      // color: 'black',
                      fontFamily: 'cursive',
                      textShadow: '0 4px 5px gray',
                      fontWeight: '700',
                      // fontFamily: "'Merriweather', serif",
                    }}
                  >
                    We Love to Hear from You!
                  </AnimatedHeading2>
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      backgroundColor: '#fff',
                      color: 'black',
                      borderColor: 'none',
                      fontFamily: "'Pacifico', cursive",
                    }}
                    className="mt-3 p-3 "
                  >
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="messageType" className="form-label">
                        Message Type
                      </label>
                      <select
                        className="form-select"
                        id="messageType"
                        name="messageType"
                        value={formData.messageType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="booking-assistance">
                          Booking Assistance
                        </option>
                        <option value="complaint">Complaint</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="destination" className="form-label">
                        Choose Your Destination
                      </label>
                      <select
                        className="form-select"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="within-city">Within City</option>
                        <option value="within-state">Within State</option>
                        <option value="outside-state">Outside the State</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-dark w-100 fw-bold"
                        style={{
                          letterSpacing: '2px',
                          background: 'linear-gradient(to right, gray, black)',
                          border: 'none',
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.background =
                            'linear-gradient(to right, black, gray)')
                        }
                        onMouseOut={(e) =>
                          (e.target.style.background =
                            'linear-gradient(to right,gray, black)')
                        }
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Card>
          </Container>
        </div>

        {/* Map Section */}
        <div className="row justify-content-center">
          <div
            className="col-lg-8 col-md-10 col-sm-12"
            style={{
              // margin: '0rem 0',
              // padding: '50px',
              width: '80%',
              textAlign: 'center',
              // marginBottom: '-.4rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              paddingTop: '1.5rem',
              paddingBottom: '2.5rem',
            }}
          >
            <div className="map-container">
              <iframe
                title="Aunjhar, Mau, Chitrakoot Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28495.399135580265!2d80.89059859658933!3d25.183720098710985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d6ad7405d3f79%3A0xc7156c81f18d7928!2sAunjhar%2C%20Mau%2C%20Chitrakoot%2C%20Uttar%20Pradesh%20210180!5e0!3m2!1sen!2sin!4v1702228125623!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{
                  border: 0,
                  borderRadius: '8px',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <WhatsappChat />
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
