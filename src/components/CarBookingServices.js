import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import WhatsappChat from './WhatsappChat'

const CarBookingServices = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const sectionStyle = {
    padding: '50px 20px',
    fontFamily: "'Pacifico', cursive",
    marginTop: '1rem',
    minWidth: '100%',
  }
  const [blurVideo, setBlurVideo] = useState(false)
  console.log(blurVideo)

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
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const carImages1 = [
    {
      url: '/dheeru-car.jpg',
      alt: 'BOLERO',
      color: 'White',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      mileage: '10 km/l',
      performance: '0-120 Km/h, Top Speed 150 km/h',
      style: {
        height: '60vh',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
        marginBottom: '2rem',
      },
      className: 'dheerucar',
    },
    {
      url: '/kuldeep-car.jpg',
      alt: 'SCORPIO',
      color: 'Black',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      mileage: '10 km/l',
      performance: '0-120 Km/h, Top Speed 160 km/h',
      style: {
        height: '60vh',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
        marginBottom: '2rem',
      },

      className: 'blackScorpiomobile',
    },
    {
      url: '/abhilash-car.jpg',
      alt: 'DATSUN',
      color: 'White',
      seatingCapacity: '5-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      mileage: '10 km/l',
      performance: '0-120 Km/h, Top Speed 150 km/h',
      style: {
        height: '50vh',
        // borderRadius: '10px',
        marginLeft: '59.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
        marginBottom: '2rem',
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
      mileage: '10 km/l',
      performance: '0-120 Km/h, Top Speed 150 km/h',
      style: {
        height: '60vh',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
        marginBottom: '2rem',
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
      mileage: '10 km/l',
      performance: '0-120 Km/h, Top Speed 150 km/h',
      style: {
        width: '42%',
        height: '60vh',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
        marginBottom: '2rem',
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
      mileage: '10 km/l',
      performance: '0-120 Km/h, Top Speed 160 km/h',
      style: {
        height: '60vh',
        width: '42%',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
        marginBottom: '2rem',
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
      mileage: '10 km/l',
      performance: '0-120 Km/h, Top Speed 150 km/h',
    },
    {
      url: '/shivakant-car.jpg',
      alt: 'SCORPIO',
      color: 'Black',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      mileage: '10 km/l',
      performance: '0-120 Km/h, Top Speed 150 km/h',
      style: {
        height: '60vh',
        width: '42%',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
        marginBottom: '2rem',
      },

      className: 'shivakantScorpiomobile',
    },
    {
      url: '/mausa-car.jpg',
      alt: 'BOLERO',
      color: 'White',
      seatingCapacity: '7-seater',
      acType: 'Manual climate control',
      transmission: 'Manual',
      mileage: '10 km/l',
      performance: '0-120 Km/h, Top Speed 160 km/h',
      style: {
        height: '60vh',
        width: '42%',
        // borderRadius: '10px',
        marginLeft: '53.1rem',
        marginTop: '13rem',
        borderRadius: '50px 0 50px 0',
        marginBottom: '2rem',
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
    background: isHovered ? 'black' : 'transparent',
    color: isHovered ? 'white' : 'transparent',
    textShadow: isHovered ? '0 4px 10px black' : 'none',
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
                      .select-container1 {
                          margin-top: -6rem !important;
                      
                      }
                        .select-container2{
                          display:flex !important;
                          justify-content:center !important;
                          align-items:center !important;
                          margin-top: 4rem !important;
                        }
                         .row-image {
                            display: flex !important;
                            flex-direction: column !important; /* Stack images vertically if needed */
                            justify-content: center !important;
                            align-items: center !important; /* Center all images horizontally */
                          }
                          .row-image img {
                          
                            margin-left: 2rem;
                            margin-bottom: 1rem; /* Add spacing between images */
                          }
                            .buttonRead{
                              padding-bottom:10rem !important;
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
                        className="fw-bold buttonRead"
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

        <WhatsappChat />
        <Footer />
      </div>
    </>
  )
}

export default CarBookingServices
