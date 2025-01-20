import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import WhatsappChat from './WhatsappChat'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const CarBookingServices = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  // const colorfulText = {
  //   // color: 'rgb(255, 102, 0)',
  //   textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
  // }

  const sectionStyle = {
    padding: '50px 20px',
    fontFamily: "'Pacifico', cursive",
    marginTop: '1rem',
    minWidth: '100%',
  }
  const [blurVideo, setBlurVideo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBlurVideo(true)
      } else {
        setBlurVideo(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const videoStyle = {
    marginTop: '3rem',
    height: '75%',
    marginLeft: '30rem',
    objectFit: 'cover',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
    borderRadius: '0 50px 0 50px',
    position: 'fixed',
    animation: 'slideInFromLeft 1s ease-in-out',
    zIndex: '-1',
    filter: blurVideo ? 'blur(10px)' : 'none',
    transition: 'filter 0.9s ease',
  }
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const carImages1 = [
    {
      url: '/dheeru-car.jpg',
      alt: 'BOLERO',
      color: 'White',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      engineDetails: '2.0L Petrol',
      mileage: '15 km/l',
      performance: '0-100 km/h in 7.5 sec, Top Speed 220 km/h',
      style: {
        height: '60vh',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
      },
    },
    {
      url: '/kuldeep-car.jpg',
      alt: 'SCORPIO',
      color: 'Black',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      engineDetails: '2.0L Petrol',
      mileage: '15 km/l',
      performance: '0-100 km/h in 7.5 sec, Top Speed 220 km/h',
      style: {
        height: '60vh',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
      },

      className: 'blackScorpiomobile',
    },
    {
      url: '/abhilash-car.jpg',
      alt: 'XUV',
      color: 'White',
      seatingCapacity: '5-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      engineDetails: '2.0L Petrol',
      mileage: '15 km/l',
      performance: '0-100 km/h in 7.5 sec, Top Speed 220 km/h',
      style: {
        height: '60vh',
        // borderRadius: '10px',
        marginLeft: '59.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
      },
      className: 'xuvmobile',
    },
  ]
  const carImages2 = [
    {
      url: '/xailesh-car.jpg',
      alt: 'BOLERO',
      color: 'White',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      engineDetails: '2.0L Petrol',
      mileage: '15 km/l',
      performance: '0-100 km/h in 7.5 sec, Top Speed 220 km/h',
      style: {
        height: '60vh',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
      },

      className: 'xaileshBoleromobile',
    },
    {
      url: '/mama-car.jpg',
      alt: 'BOLERO',
      color: 'White',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      engineDetails: '2.0L Petrol',
      mileage: '15 km/l',
      performance: '0-100 km/h in 7.5 sec, Top Speed 220 km/h',
      style: {
        width: '42%',
        height: '60vh',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
      },

      className: 'mamaBoleromobile',
    },
    {
      url: '/manish-car.jpg',
      alt: 'SCORPIO',
      color: 'White',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      engineDetails: '2.0L Petrol',
      mileage: '15 km/l',
      performance: '0-100 km/h in 7.5 sec, Top Speed 220 km/h',
      style: {
        height: '60vh',
        width: '42%',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
      },

      className: 'blackScorpiomobile',
    },
  ]
  const carImages3 = [
    {
      url: '/ramesh-car.jpg',
      alt: 'BOLERO',
      color: 'White',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      engineDetails: '2.0L Petrol',
      mileage: '15 km/l',
      performance: '0-100 km/h in 7.5 sec, Top Speed 220 km/h',
    },
    {
      url: '/shivakant-car.jpg',
      alt: 'SCORPIO',
      color: 'Black',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      engineDetails: '2.0L Petrol',
      mileage: '15 km/l',
      performance: '0-100 km/h in 7.5 sec, Top Speed 220 km/h',
    },
    {
      url: '/mausa-car.jpg',
      alt: 'BOLERO',
      color: 'White',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      engineDetails: '2.0L Petrol',
      mileage: '15 km/l',
      performance: '0-100 km/h in 7.5 sec, Top Speed 220 km/h',
      style: {
        height: '60vh',
        width: '42%',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
      },

      className: 'mausaBoleromobile',
    },
  ]

  const allImages = [...carImages1, ...carImages2, ...carImages3]

  const rowImageStyle = (isHovered) => ({
    height: '20rem',
    width: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
  })

  const cardStyle = (isHovered) => ({
    backgroundColor: 'none',
    transition: 'background-color 0.4s ease, transform 0.4s ease',
    height: '25rem',
    borderRadius: '0 50px 0 50px',
    width: '31rem',
    margin: '1rem',
    overflow: 'hidden',
    textAlign: 'center',
  })

  const buttonStyle = (isHovered) => ({
    background: isHovered ? '#198754' : 'transparent',
    color: isHovered ? 'white' : 'transparent',
    border: 'none',
    padding: '12px ',
    cursor: 'pointer',
    margin: '2rem 0',
    width: '31rem',
    letterSpacing: '2px',
    borderRadius: '0 50px 0 50px',
    transition: 'background-color 0.4s ease, transform 0.4s ease',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
  })

  const navigate = useNavigate()
  const handleCarData = (CarBioData) => {
    navigate('/cardata', { state: CarBioData })
  }
  return (
    <>
      <style>
        {`
                      @media (max-width: 768px) {
                        .select-container1{
                          // display:flex;
                          // justify-content:center;
                          // align-items:center;
                          margin-top: 4rem !important
                        }
                         .row-image {
                            display: flex;
                            flex-direction: column; /* Stack images vertically if needed */
                            justify-content: center;
                            align-items: center; /* Center all images horizontally */
                          }
                          .row-image img {
                            margin-bottom: 1rem; /* Add spacing between images */
                          }
                      }              

              `}
      </style>

      <div className="select-container1 ">
        <section
          // className=" bg-light "
          style={{
            ...sectionStyle,
            // padding: '0',
            // minWidth: '100%',
            marginTop: '6rem',
            textAlign: 'center',
            fontFamily: 'normal',
            backgroundColor: 'transparent',
          }}
        >
          {' '}
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
            className="d-flex align-items-center justify-content-center fw-bold mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ letterSpacing: '2px' }}
          >
            <span className="text-danger">SELECT</span> &nbsp;
            <span className="text-success"> OUR CAR</span>
          </h2>
          <div className="select-container2">
            {/* Row 1 */}
            <Row className="justify-content-center g-4 row-image">
              {allImages.map((image, index) => (
                <Col lg={4} md={6} xs={12} key={index}>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="100"
                    style={cardStyle(hoveredIndex === index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      style={rowImageStyle(hoveredIndex === index)}
                    />
                    <div>
                      <button
                        className="fw-bold"
                        style={buttonStyle(hoveredIndex === index)}
                        onClick={() => handleCarData(image)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section
          className="contact-section py-5 bg-light"
          style={
            {
              // marginTop: '4rem',
              // fontFamily: "'Pacifico', cursive",
            }
          }
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
            className="text-center fw-bold mb-4"
            data-aos="fade-up"
            style={{ letterSpacing: '2px', fontFamily: 'normal' }}
          >
            CONTACT US
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
                  className="fw-bold "
                  style={{
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    color: 'indigo',
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
                  className="fw-bold text-action call-to-action-text"
                  data-aos="fade-up"
                  style={{
                    letterSpacing: '2px',
                    fontSize: '25px',
                    color: 'indigo',
                  }}
                >
                  Plan your journey with Ojha Brothers today!
                </p>
                <Link to="/contactus">
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
                </Link>
              </Col>
            </Row>
          </Container>
        </section> */}

        <WhatsappChat />
        <Footer />
      </div>
    </>
  )
}

export default CarBookingServices
