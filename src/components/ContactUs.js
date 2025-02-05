import React, { useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Footer from '../components/Footer'
import WhatsappChat from './WhatsappChat'

const ContactUs = () => {
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
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <>
      <style>
        {`

             /* Global reset for box-sizing */
                *,
                *::before,
                *::after {
                  box-sizing: border-box;
                  margin: 0;
                  padding: 0;
                }

                body,
                html {
                  margin: 0;
                  padding: 0;
                  width: 100%;
                  overflow-x: hidden; /* Prevent horizontal scrolling */
                }
                  .text-btn{
                      animation:blink-animation 2s infinite;
                      
                  }
                  @keyframes blink-animation{
                      0% {
                          opacity: 1; /* Fully visible */
                          color: white;
                        }
                        10% {
                          opacity: 0.5; /* Half transparent */
                          color: yellow;
                        }
                        100% {
                          opacity: 1; /* Fully visible */
                          color: white;
                        }
                  }
                  @media (max-width:768px){
                  .first-container{
                       margin-top:-6rem !important;
                  }
                       .join-us{
                       margin-top:-6rem !important;
                       }
                      .image-container{
                         width: 15rem !important;
                         height: 15rem !important;
                      }
                      .contact-large-container{
                        width:90% !important;
                        height:auto !important;
                         display: flex;
                        align-items: center;
                        justify-content: center;
                        letter-spacing: 0px !important;
                      }
                        .name-text{
                        margin-top:-3rem;
                        font-size:15px !important;
                        }
                      .address-text{ 
                       margin-top:1rem !important;
                        font-size:16px !important;
                        text-align:start !important;
                        justify-content:flex-start !important;
                         margin-left: -10rem !important;
                        align-items:left !important;
                        display:flex !important;
                        letter-spacing:1px !important;
                      }
                        .danger-call-btn{
                         margin-top:-.5rem !important;
                        }
                         .below-container{
                         margin-top:-8rem !important;
                         }
                  }
  `}
      </style>

      <div
        className="first-container"
        style={{
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            marginTop: '8rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <hr
            style={{
              width: '5rem',
              height: '5px',
              backgroundColor: 'red',
              border: 'none',
            }}
          />
          <hr
            style={{
              width: '1rem',
              height: '1rem',
              backgroundColor: 'red',
              border: 'none',
              transform: 'rotate(135deg)',
            }}
          />
          <hr
            style={{
              width: '5rem',
              height: '5px',
              backgroundColor: 'red',
              border: 'none',
            }}
          />
        </div>
        <h2
          className="text-center mb-4 text-black fw-bold"
          data-aos="fade-up"
          style={{
            fontWeight: 'bold',
            letterSpacing: '2px',
            fontFamily: 'normal',
          }}
        >
          <span className="text-danger">GET IN </span>
          <span className="text-success"> TOUCH</span>
        </h2>
        <div style={{ flex: 1 }}>
          <div
            className="position-relative "
            style={{
              padding: '0',
              marginTop: '10rem',
              marginBottom: '20vh',
              height: '28rem',
              zIndex: -1,
            }}
          >
            <img
              className="image-container"
              src="/dheeru_half_image.jpg"
              data-aos="zoom-out"
              data-aos-delay="400"
              data-aos-duration="1000"
              alt="Dheeru Half"
              style={{
                position: 'absolute',
                top: '-8rem',
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
              data-aos="flip-left"
              data-aos-delay="100"
              className="p-4 mx-auto text-start contact-large-container"
              style={{
                maxWidth: '900px',
                height: '500px',
                borderRadius: '100px 0 100px 0',
                border: 'none',
                background: 'linear-gradient(to right,red,blue)',
                textShadow: '0 4px 10px black',
                boxShadow:
                  '0 10px 25px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Card.Body className="contact-container">
                <Row
                  className="align-items-center fw-bold"
                  style={{
                    marginTop: '10rem',
                    letterSpacing: '3px',
                  }}
                >
                  <Col xs={12} className="text-white">
                    <p
                      data-aos="fade-left"
                      data-aos-delay="900"
                      className=" fw-bold text-center name-text"
                      style={{
                        fontSize: '2rem',
                      }}
                    >
                      <span style={{ fontFamily: 'normal' }}>DEEPAK OJHA</span>{' '}
                      <span
                        style={{
                          fontFamily: "'Pacifico', normal",
                          textShadow: '0 4px 10px red',
                        }}
                      >
                        (DHEERU BHAI)
                      </span>
                    </p>

                    <p
                      className="address-text"
                      data-aos="fade-right"
                      data-aos-delay="900"
                    >
                      <i
                        className="bi bi-geo-alt-fill text-start "
                        style={{ color: 'white', marginLeft: '13.5rem' }}
                      ></i>
                      {'  '}
                      Mau, Chitrakoot, Uttar Pradesh
                    </p>
                    <p
                      className="address-text"
                      data-aos="fade-right"
                      data-aos-delay="900"
                    >
                      <i
                        className="bi bi-envelope-fill text-start "
                        style={{ color: 'white', marginLeft: '13.5rem' }}
                      ></i>
                      {'  '}deepakojha6386@gmail.com
                    </p>
                    <p
                      data-aos="fade-right"
                      data-aos-delay="900"
                      className="address-text"
                    >
                      <i
                        class="bi bi-telephone-fill text-start"
                        style={{ color: 'white', marginLeft: '13.5rem' }}
                      ></i>{' '}
                      {'  '}9838875119
                    </p>
                  </Col>
                  <div className="btn d-flex align-items-center justify-content-center mt-4 danger-call-btn">
                    <Button
                      data-aos="fade-down"
                      data-aos-delay="100"
                      style={{
                        borderRadius: '30px 0 30px 0',
                        padding: '0.8rem 2.5rem',
                        fontSize: '1rem',
                        letterSpacing: '2px',
                        textShadow: '0 4px 10px black',
                        border: 'none',
                        color: '#fff',
                        fontWeight: 'bold',
                        background: 'linear-gradient(to right,red,blue)',
                      }}
                    >
                      <span className="text-btn">
                        {' '}
                        <i
                          class="bi bi-telephone-fill"
                          style={{ color: 'inherit' }}
                        ></i>{' '}
                        CALL / SEND{'-'}MAIL TO ACTION
                      </span>
                    </Button>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </div>

          {/* Join as partner Section */}
          <section className="join-us py-5 " style={{ marginTop: '0rem' }}>
            <div
              className="vission-hr"
              style={{
                marginTop: '-3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <hr
                style={{
                  width: '5rem',
                  height: '5px',
                  backgroundColor: 'red',
                  border: 'none',
                }}
              />
              <hr
                style={{
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: 'red',
                  border: 'none',
                  transform: 'rotate(135deg)',
                }}
              />
              <hr
                style={{
                  width: '5rem',
                  height: '5px',
                  backgroundColor: 'red',
                  border: 'none',
                }}
              />
            </div>
            <h2
              className="text-center mb-4 text-black fw-bold"
              data-aos="fade-up"
              style={{
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontFamily: 'normal',
                // textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
              }}
            >
              <span className="text-danger">JOIN US AS </span>
              <span className="text-success"> A PARTNER</span>
            </h2>

            <div
              className="container d-flex flex-column flex-lg-row align-items-center justify-content-between text-justify"
              style={{
                gap: '1rem',
                padding: '1rem',
                // marginTop: '1.5rem',
                marginBottom: '1.5rem',
                // paddingTop: '1.5rem',
                paddingBottom: '2.5rem',
              }}
            >
              <div
                className="d-flex flex-wrap justify-content-start justify-content-lg-end text-justify"
                style={{ gap: '1rem' }}
              ></div>
              <img
                data-aos="fade-left"
                data-aos-duration="1500"
                src="/partners.jpg"
                alt="Our Vision"
                className="img-fluid"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  // borderRadius: '8px',
                  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-justify"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#555',
                  marginTop: '1rem',
                  flex: '1',
                  textAlign: 'justify',
                  fontFamily: "'Pacifico', normal",
                }}
              >
                {' '}
                <strong style={{ fontSize: '24px', color: 'indigo' }}>
                  Grow Your Business with Ojha Brothers - Hanumat Kripa
                  Roadlines
                </strong>
                <br />
                <strong>Are you a car rental provider or a truck owner?</strong>
                <br />
                <strong>
                  {' '}
                  Do you want to maximize your bookings and reach more
                  customers?
                </strong>
                <br />
                Join Ojha Brothers - Hanumat Kripa Roadlines today and become a
                part of our growing network of trusted service providers.
              </h5>
            </div>
          </section>
          <section className="join-us py-5 " style={{ marginTop: '0rem' }}>
            <div
              className="vission-hr"
              style={{
                marginTop: '-3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Center vertically
                gap: '1rem',
              }}
            >
              <hr
                style={{
                  width: '5rem',
                  height: '5px',
                  backgroundColor: 'red',
                  border: 'none',
                }}
              />
              <hr
                style={{
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: 'red',
                  border: 'none',
                  transform: 'rotate(135deg)',
                }}
              />
              <hr
                style={{
                  width: '5rem',
                  height: '5px',
                  backgroundColor: 'red',
                  border: 'none',
                }}
              />
            </div>
            <h2
              className="text-center mb-4 text-black fw-bold"
              data-aos="fade-up"
              style={{
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontFamily: 'normal',
                // textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
              }}
            >
              <span className="text-danger">BOOK YOUR RI</span>
              <span className="text-success">DE OR TRANSPORT</span>
            </h2>

            <div
              className="container d-flex flex-column flex-lg-row align-items-center justify-content-between text-justify"
              style={{
                gap: '1rem',
                padding: '1rem',
                // marginTop: '1.5rem',
                marginBottom: '1.5rem',
                // paddingTop: '1.5rem',
                paddingBottom: '2.5rem',
              }}
            >
              <div
                className="d-flex flex-wrap justify-content-start justify-content-lg-end text-justify"
                style={{ gap: '1rem' }}
              ></div>

              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-justify"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#555',
                  marginTop: '1rem',
                  flex: '1',
                  textAlign: 'justify',
                  fontFamily: "'Pacifico', normal",
                }}
              >
                {' '}
                <strong style={{ fontSize: '24px', color: 'indigo' }}>
                  Looking for a reliable car booking or truck loading service?
                </strong>
                <br />
                Ojha Brothers - Hanumat Kripa Roadlines offers safe, affordable,
                and hassle-free transport solutions for all your needs. Whether
                you need a comfortable car for your journey or a truck for heavy
                loading, we’ve got you covered!
              </h5>
              <img
                data-aos="fade-left"
                data-aos-duration="1500"
                src="/book_image.png"
                alt="Our Vision"
                className="img-fluid"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                  boxShadow:
                    '0 10px 25px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15)',
                  borderRadius: '50px 0 50px 0',
                  // borderRadius: '8px',
                  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          </section>
          <Container
            fluid
            className="d-flex align-items-center justify-content-center below-container"
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
                  data-aos="fade-up"
                  data-aos-delay="500"
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
                    <source src="/contact_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Form Section */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="col-lg-6 col-12 p-4 d-flex flex-column justify-content-center"
                  style={
                    {
                      // top:"-3rem",
                      // height: '-20px',
                    }
                  }
                >
                  <h2
                    data-aos="fade-left"
                    data-aos-delay="800"
                    className="text-center"
                    style={{
                      color: 'red',
                      letterSpacing: '2px',
                      fontWeight: '700',
                      // color: 'black',
                      fontFamily: 'normal',
                      textShadow: '0 4px 5px gray',
                      // fontFamily: "'Merriweather', serif",
                    }}
                  >
                    Leave us a message
                  </h2>
                  <hr
                    data-aos="fade-up"
                    data-aos-delay="700"
                    // style={{ color: 'blue', textShadow: '0 4px 10px black' }}
                    style={{
                      color: 'blue',
                      border: 'none', // Remove default border
                      borderTop: '2px solid blue', // Add your custom border style
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)', // Box shadow for the line
                    }}
                  />
                  <h3
                    data-aos="fade-right"
                    data-aos-delay="800"
                    className="text-center"
                    style={{
                      color: 'green',
                      letterSpacing: '2px',
                      // color: 'black',
                      fontFamily: 'normal',
                      textShadow: '0 4px 5px gray',
                      fontWeight: '700',
                      // fontFamily: "'Merriweather', serif",
                    }}
                  >
                    We Love to Hear from You!
                  </h3>
                  <form
                    action="https://formsubmit.co/deepakojha6386@gmail.com"
                    method="POST"
                    onSubmit={handleSubmit}
                    style={{
                      backgroundColor: '#fff',
                      color: 'black',
                      borderColor: 'none',
                      fontFamily: "'Pacifico', normal",
                      letterSpacing: '2px',
                    }}
                    className="mt-3 p-3 fw-bold"
                  >
                    {/* Hidden Input to Prevent Spam */}
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="mb-3">
                      <label
                        data-aos="fade-right"
                        data-aos-delay="800"
                        htmlFor="fullName"
                        className="form-label "
                      >
                        Your Full Name
                      </label>
                      <input
                        data-aos="fade-left"
                        data-aos-delay="800"
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        data-aos="fade-right"
                        data-aos-delay="800"
                        htmlFor="phoneNumber"
                        className="form-label"
                      >
                        Phone Number
                      </label>
                      <input
                        data-aos="fade-left"
                        data-aos-delay="800"
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
                      <label
                        data-aos="fade-right"
                        data-aos-delay="800"
                        htmlFor="email"
                        className="form-label"
                      >
                        Email Address
                      </label>
                      <input
                        data-aos="fade-left"
                        data-aos-delay="800"
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
                      <label
                        data-aos="fade-right"
                        data-aos-delay="800"
                        htmlFor="messageType"
                        className="form-label"
                      >
                        Message Type
                      </label>
                      <select
                        data-aos="fade-left"
                        data-aos-delay="800"
                        className="form-select"
                        id="messageType"
                        name="messageType"
                        value={formData.messageType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select message type</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="complaint">Complaint</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        data-aos="fade-right"
                        data-aos-delay="800"
                        htmlFor="destination"
                        className="form-label"
                      >
                        Choose Your Destination
                      </label>
                      <select
                        data-aos="fade-left"
                        data-aos-delay="800"
                        className="form-select"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                      >
                        <option value="">Select your destination</option>
                        <option value="within-city">Within City</option>
                        <option value="within-state">Within State</option>
                        <option value="outside-state">Outside the State</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        data-aos="fade-right"
                        data-aos-delay="800"
                        htmlFor="message"
                        className="form-label"
                      >
                        Message
                      </label>
                      <textarea
                        data-aos="fade-left"
                        data-aos-delay="800"
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Drop your message..."
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div
                      className="text-center"
                      data-aos="fade-down"
                      data-aos-delay="1000"
                    >
                      <Button
                        type="submit"
                        className="btn btn-danger w-100 fw-bold"
                        style={{
                          letterSpacing: '3px',
                          // background: 'linear-gradient(to right, gray, black)',
                          border: 'none',
                          height: '50px',
                          textShadow: '0 4px 10px black',
                          borderRadius: '50px 0 50px 0',
                        }}
                      >
                        SEND YOUR MESSAGE
                      </Button>
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
            <div
              className="map-container"
              data-aos="flip-up"
              data-aos-delay="1100"
            >
              <iframe
                title="Aunjhar, Mau, Chitrakoot Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28864.201366109373!2d81.33292611106701!3d25.26973869473712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984d1b295d9d285%3A0x284613ce7c03ae1e!2sMau%20Mustkil%2C%20Uttar%20Pradesh%20210209!5e0!3m2!1sen!2sin!4v1737870783820!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{
                  border: 0,
                  // borderRadius: '8px',
                  borderRadius: '50px 0 50px 0',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div style={{ marginBottom: '-1.4rem' }}>
            <Footer />
          </div>
        </div>
        <WhatsappChat />
      </div>
    </>
  )
}

export default ContactUs
