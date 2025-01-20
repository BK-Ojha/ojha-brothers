import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import WhatsappChat from './WhatsappChat'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const fadeSlideRight = keyframes`
from{
opacity:0;
transform:translateX(25rem);
}
to{
opacity:1;
transform:translateX(0);
}`
const AnimatedHeading1 = styled.h1`
  animation: ${({ inView }) => (inView ? fadeSlideRight : 'none')} 0.6s
    ease-in-out;
`

const TruckLoadingServices = () => {
  const [isHovered, setIsHovered] = useState(false)

  const truckImage = {
    width: '32%', // Default width
    height: 'auto',
    minWidth: '32% ',
    /* Remove or adjust the min-height for better responsiveness */
    // height: ' auto',
  }
  const truckStyle = (isHovered) => ({
    // height: '100%', // Uncomment if needed
    width: '52%',
    // transform: 'rotate(270deg)', // Already handled below
    marginTop: '1rem',
    marginBottom: '-2rem',
    transition: 'transform 0.4s ease',
    transform: ` ${isHovered ? 'scale(1.2)' : 'scale(1)'}`,
  })
  const buttonStyle = (isHovered) => ({
    background: isHovered ? '#2b2d42' : 'transparent',
    color: isHovered ? 'white' : 'transparent',
    border: 'none',
    padding: '12px ',
    cursor: 'pointer',
    margin: '2.5rem',
    borderRadius: '50px 0 50px 0',
    transition: 'background-color 0.4s ease, transform 0.4s ease',
    transform: `rotate(349deg)  ${isHovered ? 'scale(1.2)' : 'scale(1)'}`, // Ensure this ends with a comma

    width: '39%',
    // height: '50px',
    fontSize: '1.2rem',
    letterSpacing: '2px',
    marginTop: '.3rem',
    marginLeft: '15.3rem',
    marginBottom: '5rem',
    // transform: ' ',
  })
  const TruckData = {
    image: 'my-truck2.png',
    alt: 'Powerful and Reliable Truck',

    loadSCapacity: '3 टन तक',
    featuresS: [
      'फर्नीचर डिलीवरी (सोफा, टेबल, बेड)',
      'घरेलू सामानों की लोकल शिफ्टिंग',
      'छोटे व्यवसाय और ई-कॉमर्स डिलीवरी',
    ],

    loadMCapacity: ' 7–10 टन',
    featuresM: [
      'मध्यम आकार की औद्योगिक सामग्री',
      'पैकेज्ड वस्तुएं (बेवरेज, एफएमसीजी प्रोडक्ट्स)',
      'निर्माण सामग्री (ईंट, टाइल्स)',
    ],

    loadHCapacity: ' 15–20 टन',
    featuresH: ['कच्चा माल (लोहा, सीमेंट)', 'कृषि उत्पाद (अनाज, गन्ना)'],

    loadRCapacity: ' 3-15 टन',
    featuresR: ['खराब होने वाले सामान (दूध, सब्जी, फल)', 'दवाइयां और रसायन'],

    loadPCapacity: ' 1-2 टन',
    featuresP: [
      'ई-कॉमर्स डिलीवरी (कपड़े, गैजेट्स)',
      'हल्के लेकिन थोक शिपमेंट',
      'लोकल पार्सल डिलीवरी सेवाएं',
    ],

    loadACapacity: ' 3–15 टन',
    featuresA: [
      'ताजे फल, सब्जियां और अनाज',
      'थोक में बाजारों तक कृषि उत्पाद पहुंचाना',
      'क्षेत्रीय कृषि आपूर्ति श्रृंखला',
    ],
    style: {
      height: '60vh',
      width: '42%',
      // borderRadius: '10px',
      marginLeft: '53.1rem',
      marginTop: '13rem',
      borderRadius: '50px 0 50px 0',
    },

    className: 'truckMobile',
  }
  const navigate = useNavigate()
  const handleTruckData = (data) => {
    navigate('/truckdata', { state: data })
  }
  return (
    <>
      <style>
        {`

        
           @keyframes slideInFromLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
            
            .truckImage{
              rotate:90(deg);
            }

          @keyframes slideInFromRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

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

             @media (max-width: 768px) {
                          
             
                .mobile-container{
                 position: relative;
                 margin-top:6rem !important;
                }
                 .text{
                     position: absolute; /* Positions text relative to .mobile-container */
                    top: 6rem; /* Vertically centers the text */
                    left: 50%; /* Horizontally centers the text */
                    transform: translate(-50%, -50%); /* Perfectly centers the text */
                    justify-content: center !important; /* Horizontal centering */
                    align-items: center !important; /* Vertical centering */
                    text-align: center !important; 
                    font-size:25px;
                    min-width: 100% !important;
                 
                    }
                }
                 @media (max-width: 768px) {
                  .truckImage {
                         margin-left: 1rem !important;
                        margin-right: 1rem !important;
                       margin-top: 3rem !important; /* Adjust margin for mobile */
                       width: 90% !important; /* Make image responsive by setting width */
                        // height: auto !important; /* Let height adjust automatically based on width */
                        // min-height: 50% !important;
                        }
                        .button{
                        position:relative !important;
                        align-items:right !important;
                        justify-content:right !important;
                        //  margin-left:13rem !important;
                        // // margin-right: 1rem !important;
                        // margin-top: 1rem !important; /* Adjust margin for mobile */
                        // //  width: 60% !important;
                        // //  margin-bottom: 3rem !important;
                        }
    
        `}
      </style>

      <Container
        className="d-block mobile-container"
        style={{
          // padding: '0',
          minWidth: '100%',
          marginTop: '6rem',
          textAlign: 'center',
          fontFamily: "'Pacifico', cursive",
          backgroundColor: 'transparent',
        }}
      >
        <section
          className="services-section py-5"
          // style={sectionStyle}
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
            className="text-center mb-4 text"
            // data-aos="fade-up"
            // data-aos-delay="500"
            style={{
              fontWeight: 'bold',
              letterSpacing: '2px',
              fontFamily: 'normal',
              // textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
            }}
          >
            <span className="text-danger">YOUR TRUCK</span>
            <span className="text-success"> IS HERE</span>
          </h2>
          <div
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          >
            {/* Row 1 */}
            <div>
              <img
                className="truckImage"
                src={TruckData.image}
                alt="Truck"
                style={{ ...truckImage, ...truckStyle(isHovered) }} // Merge default and dynamic styles
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
            <div className="">
              <Link to="/truckdata">
                <button
                  className=" btn bg-danger fw-bold"
                  style={{
                    position: 'relative',
                    color: 'white',
                    letterSpacing: '3px',
                    fontSize: '20px',
                    // marginRight: '13rem',
                  }}
                >
                  Read More
                </button>
              </Link>
            </div>
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
            <Row className='text-start'
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
      </Container>
      <WhatsappChat />
      <Footer />
    </>
  )
}

export default TruckLoadingServices
