import React, {  useState } from 'react'
import { Container,  Row, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import WhatsappChat from './WhatsappChat'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const About = () => {
  const whyChoose = [
    {
      title: 'Reliable and On-Time Services',
      description:
        'We ensure timely delivery for both car bookings and truck loading. Punctuality is at the heart of our services, helping you reach destinations and meet deadlines seamlessly.',
      image: '/time.jpg',
    },
    {
      title: 'Wide Range of Vehicles',
      description:
        'From compact cars to spacious trucks, we offer a fleet of modern, well-maintained vehicles tailored to your transportation needs.',

      image: '/car-wash.jpg',
    },
    {
      title: 'Cost-Effective Solutions',
      description:
        'Quality services at competitive prices. We believe in providing value for every mile you travel and every load we transport.',
      image: '/car-money.jpg',
    },
    {
      title: 'Professional and Friendly Staff',
      description:
        'Our drivers and logistics team are highly trained, courteous, and committed to ensuring customer satisfaction at every step of your journey.',
      image: '/smiling-drivers.jpg',
    },
    {
      title: 'Pan-India Connectivity',
      description:
        'Whether it’s a local trip or a nationwide delivery, our extensive network ensures that we serve you anywhere across India.',
      image: '/near-up-map.jpg',
    },
    {
      title: 'Customer-Centric Approach',
      description:
        'Your trust is our priority. We are always ready to adapt to your unique needs with personalized solutions and responsive support.',
      image: '/satisfaction.jpg',
    },
  ]
  const [isHovered, setIsHovered] = useState()
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
              @media (max-width: 768px) {
                .who-we-are{
                  margin-top: 1rem !important;
                }

                 .our-mission {
                  margin-top: -4rem !important;
                }
                .who-we-are h2,
                .our-mission h2
                .what-we-offer h2
                .our-vission h2
                .why-choose-us h2 {
                  font-size: 1.5rem !important;
                  text-align: center !important;
                }

                .who-we-are h5,
                .our-mission h5
                .why-choose-us h5{
                  text-align: justify !important;
                  // margin-top: -1rem !important;
                }
                  
                .vission-hr {
                margin-top: -4rem !important;
                }

                .choose-hr{
                margin-top: -4rem !important;
                }

                .contact-hr{
                margin-top: -4rem !important;
                }
                .who-we-are img,
                .our-mission img {
                  max-width: 100% !important;
                  height: auto !important;
                }

                .truck-button{
                  margin-bottom: 2rem !important;
                }
                .who-we-are .container,
                .our-mission .container {
                  flex-direction: column !important;
                  align-items: center !important;
                  gap: 0.5rem !important;
                }

                .who-we-are div[data-aos],
                .our-mission div[data-aos] {
                  text-align: center !important;
                }
              }

      `}
      </style>
      <div>
        {/* Who we are */}

        <section
          className="who-we-are py-5  "
          style={{ padding: '50px 20px', marginTop: '7rem' }}
        >
          <div
            style={{
              marginTop: '-1rem',
              display: 'flex',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              gap: '1rem',
            }}
          >
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
              }}
            />
            <hr
              style={{
                width: '1rem',
                height: '1rem',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
                transform: 'rotate(135deg)', // Create a diagonal line
              }}
            />
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
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
            <span className="text-danger">WHO WE </span>
            <span className="text-success"> ARE ?</span>
          </h2>
          {/* <div className="container">
            <div className="row align-items-center my-5">
              <div
                className="col-md-6 order-md-2 mb-4"
                data-aos="fade-left"
                data-aos-duration="1500"
              ></div>
            </div>
          </div> */}
          <div
            className="container d-flex flex-column flex-lg-row align-items-center justify-content-between"
            style={{
              gap: '1rem',
              padding: '1rem',
              // marginTop: '1.5rem',
              marginBottom: '1.5rem',
              // paddingTop: '1.5rem',
              paddingBottom: '2.5rem',
            }}
          >
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
                fontFamily: "'Pacifico', cursive",
              }}
            >
              Welcome to <span style={{ color: 'red' }}>Ojha Brothers</span>,
              your trusted partner for seamless transportation solutions across
              India. We specialize in offering car booking services and truck
              loading services, designed to meet the diverse needs of
              individuals and businesses alike.
              <br />
              With a commitment to excellence, timely deliveries, and customer
              satisfaction, Ojha Brothers is here to simplify your travel and
              logistics needs.
            </h5>
            <div
              className="d-flex flex-wrap justify-content-center justify-content-lg-end"
              style={{ gap: '1rem' }}
            >
              <img
                data-aos="fade-left"
                data-aos-duration="1500"
                src="/india_map.jpg"
                alt="Anywhere in India"
                className="img-fluid"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  boxShadow:
                    '0 10px 25px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15)',

                  // borderRadius: '8px',
                  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section
          className="our-mission py-5  "
          style={{ padding: '50px 20px', marginTop: '1rem' }}
        >
          <div
            style={{
              marginTop: '-1rem',
              display: 'flex',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              gap: '1rem',
            }}
          >
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
              }}
            />
            <hr
              style={{
                width: '1rem',
                height: '1rem',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
                transform: 'rotate(135deg)', // Create a diagonal line
              }}
            />
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
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
            <span className="text-danger">OUR </span>
            <span className="text-success"> MISSION</span>
          </h2>
          <div
            className="container d-flex flex-column align-items-center justify-content-between"
            style={{
              gap: '1rem',
              padding: '1rem',
              // marginTop: '1.5rem',
              marginBottom: '1.5rem',
              // paddingTop: '1.5rem',
              paddingBottom: '2.5rem',
            }}
          >
            {/* Text Section */}
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
                fontFamily: "'Pacifico', cursive",
              }}
            >
              To simplify travel and logistics by delivering top-notch services
              that ensure smooth journeys and hassle-free cargo transportation.
              We aim to connect people and businesses across the nation with
              innovative and customer-focused solutions.
            </h5>

            {/* Images Section */}
            <div
              className="d-flex flex-wrap justify-content-center justify-content-lg-end"
              style={{ gap: '1rem' }}
            >
              <img
                data-aos="fade-up"
                data-aos-duration="600"
                src="/my-car.jpeg"
                alt="Car Booking"
                className="img-fluid"
                style={{
                  width: '100%',
                  maxWidth: '550px',
                  height: '60vh',
                  // borderRadius: '8px',
                  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                src="/my-truck2.png"
                alt="Truck Loading"
                className="img-fluid"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: '50vh',
                  // borderRadius: '8px',
                  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          </div>
        </section>

        {/* What we offer */}
        <section
          className="what-we-offer py-5  "
          style={{ marginTop: '-6rem' }}
        >
          <div
            style={{
              marginTop: '-1rem',
              display: 'flex',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              gap: '1rem',
            }}
          >
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
              }}
            />
            <hr
              style={{
                width: '1rem',
                height: '1rem',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
                transform: 'rotate(135deg)', // Create a diagonal line
              }}
            />
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
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
            <span className="text-danger">WHAT WE </span>
            <span className="text-success"> OFFER ?</span>
          </h2>
          <div
            className="container"
            style={{
              fontFamily: "'Pacifico', cursive",
            }}
          >
            <div className="container">
              <div className="row align-items-center my-5">
                <div
                  className="col-md-6 order-md-2 mb-4"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div
                    style={{
                      marginTop: '-1rem',
                      display: 'flex',
                      justifyContent: 'center', // Center horizontally
                      alignItems: 'center', // Center vertically
                      gap: '1rem',
                    }}
                  >
                    <hr
                      style={{
                        width: '35rem',
                        height: '5px',
                        backgroundColor: 'green', // Use backgroundColor instead of color
                        border: 'none',
                      }}
                    />
                  </div>
                  <h5
                    className="text-muted  text-justify"
                    style={{ letterSpacing: '.7px', textAlign: 'justify' }}
                  >
                    Whether you are planning a family trip, a business meeting,
                    or an airport transfer, our fleet of well-maintained
                    vehicles and professional drivers are at your service. With
                    real-time booking options and competitive pricing, we make
                    your travel experience stress-free and enjoyable.
                  </h5>

                  <Link to="/contactus" style={{ textDecoration: 'none' }}>
                    <button
                      className=" btn btn-outline-success mt-4 d-flex align-items-start"
                      variant="outline-success"
                      style={{ letterSpacing: '2px' }}
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>

                <div
                  className="col-md-6 order-md-1"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div
                    className="card shadow-lg border-0 bg-success text-white"
                    style={{
                      borderRadius: '10% 0 10% 0',
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      style={{ borderRadius: '10% 0 10% 0' }}
                      className="video"
                    >
                      <source src="/car_video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="card-body">
                      <h5
                        className="card-title fw-bold text-white text-center"
                        data-aos="fade-right"
                        style={{
                          letterSpacing: '3px',
                          textShadow: '0 4px 10px black',
                        }}
                      >
                        ENJOYE YOUR TRIP !
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center my-5">
                <div
                  className="col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div
                    style={{
                      marginTop: '-1rem',
                      display: 'flex',
                      justifyContent: 'center', // Center horizontally
                      alignItems: 'center', // Center vertically
                      gap: '1rem',
                    }}
                  >
                    <hr
                      style={{
                        width: '35rem',
                        height: '5px',
                        backgroundColor: 'red', // Use backgroundColor instead of color
                        border: 'none',
                      }}
                    />
                  </div>
                  <h5
                    className="text-muted  text-justify"
                    style={{ letterSpacing: '.7px', textAlign: 'justify' }}
                  >
                    From small-scale goods to large consignments, we offer
                    dependable truck loading services tailored to your logistics
                    needs. Our extensive network ensures safe and timely
                    deliveries, no matter where you are in India.
                  </h5>

                  <Link to="/contactus" style={{ textDecoration: 'none' }}>
                    <button
                      className="truck-button btn btn-outline-danger mt-4 d-flex align-items-start"
                      style={{
                        letterSpacing: '2px',
                      }}
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>
                <div
                  className="col-md-6 order-md-1"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div
                    className="card shadow-lg border-0 bg-danger text-white text-center"
                    style={{
                      borderRadius: '0 10% 0 10%',
                      letterSpacing: '2px',
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      className="video"
                      style={{
                        borderRadius: '0 10% 0 10%',
                        width: '100%', // Ensure it takes full width of the card
                        height: 'auto', // Maintain aspect ratio
                        objectFit: 'cover', // Make sure the video covers the area nicely
                        maxHeight: '330px', // Limit max height for mobile view
                      }}
                    >
                      <source src="/truck-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="card-body">
                      <h5
                        className="card-title fw-bold text-white"
                        data-aos="fade-left"
                        style={{
                          letterSpacing: '2px',
                          textShadow: '0 4px 10px black',
                        }}
                      >
                        LOAD YOUR TRUCK !
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}

        <section className="our-vission py-5  " style={{ marginTop: '0rem' }}>
          <div
            className="vission-hr"
            style={{
              marginTop: '-1rem',
              display: 'flex',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              gap: '1rem',
            }}
          >
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
              }}
            />
            <hr
              style={{
                width: '1rem',
                height: '1rem',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
                transform: 'rotate(135deg)', // Create a diagonal line
              }}
            />
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
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
            <span className="text-danger">OUR </span>
            <span className="text-success"> VISION</span>
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
            >
              <img
                data-aos="fade-right"
                data-aos-duration="1500"
                src="/hand-shaking.jpg"
                alt="Our Vision"
                className="img-fluid"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  boxShadow:
                    '0 10px 25px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15)',

                  // borderRadius: '8px',
                  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
            <h5
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text-justify"
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#555',
                marginTop: '1rem',
                flex: '1',
                textAlign: 'justify',
                fontFamily: "'Pacifico', cursive",
              }}
            >
              To become India's leading provider of car booking and truck
              loading services by constantly evolving and adapting to the
              dynamic needs of our clients. We are committed to fostering
              connections that drive growth, convenience, and trust.
            </h5>
          </div>
        </section>

        {/* Why choose us */}
        <section
          className="why-choose-us "
          style={{
            padding: '50px 20px',
            marginTop: '-3rem',
            marginBottom: '-2rem',
          }}
        >
          <div
            className="choose-hr"
            style={{
              marginTop: '-1rem',
              display: 'flex',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              gap: '1rem',
            }}
          >
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
              }}
            />
            <hr
              style={{
                width: '1rem',
                height: '1rem',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
                transform: 'rotate(135deg)', // Create a diagonal line
              }}
            />
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
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
            <span className="text-danger">WHY CHO</span>
            <span className="text-success">OSE US ?</span>
          </h2>
        </section>

        <div
          data-aos="flip-left"
          data-aos-delay="100"
          style={{
            marginBottom: '1.5rem',
            paddingBottom: '2.5rem',
          }}
        >
          {/* Why choose us */}
          <div className="container">
            {/* Content Cards */}
            <div
              className="row mt-4 text-justify"
              style={{
                fontFamily: "'Pacifico', cursive",
                textAlign: 'justify',
              }}
            >
              {whyChoose.map((content, index) => (
                <div
                  key={index}
                  className="col-md-6 mb-4"
                  style={{
                    opacity: 1, // Initial state after animation
                    transform: 'translateY(50)', // Reset transform
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                  }}
                >
                  <div
                    className="p-4 rounded h-100"
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: '15px',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        '0 6px 12px rgba(0,0,0,0.2)'
                      e.currentTarget.style.transform = 'scale(1.05)' // Subtle scale on hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        '0 4px 6px rgba(0,0,0,0.1)'
                      e.currentTarget.style.transform = 'scale(1)' // Reset scale
                    }}
                  >
                    <h3
                      data-aos="fade-left"
                      data-aos-delay="500"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: '0.5rem',
                        textTransform: 'capitalize',
                      }}
                    >
                      {content.title}
                    </h3>
                    <p
                      data-aos="fade-left"
                      data-aos-delay="500"
                      style={{ fontSize: '1rem', color: '#555' }}
                    >
                      {content.description}
                    </p>

                    {/* Replace Button with Image */}
                    <img
                      data-aos="fade-up"
                      data-aos-delay="900"
                      src={content.image}
                      alt={content.title}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        marginTop: '10px',
                        transition: 'transform 0.6s ease, box-shadow 0.3s ease',
                        transformStyle: 'preserve-3d',
                        perspective: '1000px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'rotateY(180deg)'
                        e.currentTarget.style.boxShadow =
                          '0 6px 12px rgba(0,0,0,0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'rotateY(0deg)'
                        e.currentTarget.style.boxShadow =
                          '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <section
          className="contact-section py-5"
          style={
            {
              // marginTop: '4rem',
              // fontFamily: "'Pacifico', cursive",
            }
          }
        >
          <div
            className="contact-hr"
            style={{
              marginTop: '-1rem',
              display: 'flex',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center', // Center vertically
              gap: '1rem',
            }}
          >
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
              }}
            />
            <hr
              style={{
                width: '1rem',
                height: '1rem',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
                transform: 'rotate(135deg)', // Create a diagonal line
              }}
            />
            <hr
              style={{
                width: '5rem',
                height: '5px',
                backgroundColor: 'red', // Use backgroundColor instead of color
                border: 'none',
              }}
            />
          </div>
          <h2
            className="text-center fw-bold mb-4"
            data-aos="fade-up"
            style={{ letterSpacing: '2px', fontFamily: 'normal' }}
          >
            <span className="text-danger">HAVE A</span>
            <span className="text-success"> QUERY ?</span>
          </h2>
          <Container>
            <Row
              style={{
                fontFamily: "'Pacifico', cursive",
                marginBottom: '2rem',
                marginTop: '3rem',
                color: '#333',
                marginLeft: '2rem',
              }}
            >
              <Col md={6} data-aos="fade-right">
                <h3
                  className="fw-bold  text-success"
                  style={{
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    // color: 'indigo',
                  }}
                >
                  Get In Touch
                </h3>
                <p>
                  <span className="fw-bold">
                    <FaMapMarkerAlt /> Address :{' '}
                  </span>
                  Mau, Chitrakoot, Uttar Pradesh
                </p>
                <p>
                  {' '}
                  <span className="fw-bold">
                    <FaPhoneAlt /> Phone :{' '}
                  </span>{' '}
                  +91 9838875119
                </p>
                <p>
                  {' '}
                  <span className="fw-bold">
                    <FaEnvelope /> Email :{' '}
                  </span>{' '}
                  deepakojha6386@gmail.com
                </p>
              </Col>
              <Col md={6} data-aos="fade-left call-to-action-section">
                <p
                  className="fw-bold text-action call-to-action-text text-danger"
                  data-aos="fade-up"
                  style={{
                    letterSpacing: '2px',
                    fontSize: '25px',
                    // color: 'indigo',
                  }}
                >
                  Plan your journey with Ojha Brothers today!
                </p>
                {/* <Link to="/contactus">
                  <Button
                    className="fw-bold btn btn-outline-danger call-to-action-button"
                    data-aos="fade-up"
                    variant="outline-danger"
                    style={{
                      width: '14rem',
                      height: '3rem',
                      marginTop: '1rem',
                    }}
                  >
                    📞 Call To Action
                  </Button>
                </Link> */}
                <Link to="/contactus">
                  <Button
                    className="fw-bold btn btn-outline-danger call-to-action-button"
                    data-aos="fade-up"
                    variant="outline-danger"
                    style={{
                      letterSpacing: '2px',
                      width: '14rem',
                      height: '3rem',
                      marginTop: '1rem',
                      fontSize: '20px',
                      textShadow: isHovered ? '0 4px 10px black' : 'none',
                      transition: 'text-shadow 0.3s ease', // Smooth transition
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <i
                      class="bi bi-telephone-fill"
                      style={{ color: 'inherit' }}
                    ></i>{' '}
                    Let's Talk!
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        <WhatsappChat />
        <Footer />
      </div>
    </>
  )
}

export default About
