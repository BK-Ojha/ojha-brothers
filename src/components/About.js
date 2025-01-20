import React, { useEffect, useRef, useState } from 'react'
import { Container, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Footer from './Footer'
import WhatsappChat from './WhatsappChat'

// Sliding contents from right to left
const fadeSlideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(25rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const AnimatedHeading2 = styled.h1`
  animation: ${({ inView }) => (inView ? fadeSlideRight : 'none')} 0.6s
    ease-in-out;
  font-family: cursive;
  color: #333;
  letter-spacing: 5px;
  line-height: 0.3;
  text-shadow: 0 4px 5px gray;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
  transition: filter 0.3s ease;
  textalign: 'center';
`
const fadeSlideLeft = keyframes`
from{
opacity:0;
transform:translateX(-15rem);
}
to{
opacity:1;
transform:translateX(0);
}`
const AnimatedHeading3 = styled.h1`
  animation: ${({ inView }) => (inView ? fadeSlideLeft : 'none')} 0.6s
    ease-in-out;
`

const About = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [blurVideo, setBlurVideo] = useState(false)

  const [inView, setInView] = useState(false)
  const headingRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.5 },
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
  const handleScroll = () => {
    const currentScroll = window.scrollY
    setBlurVideo(currentScroll > 100)
  }

  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 768)
    setIsDesktop(window.innerWidth >= 768)
  }

  useEffect(() => {
    checkMobileView()
    window.addEventListener('resize', checkMobileView)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkMobileView)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // useEffect(() => {
  //   checkMobileView()
  //   window.addEventListener('resize', checkMobileView)

  //   return () => {
  //     window.removeEventListener('resize', checkMobileView)
  //   }
  // }, [])

  const places = [
    {
      src: '/emergency.png',
      alt: 'Urgent Booking Service',
      description:
        'Need an urgent booking? Count on us for prompt and reliable services, tailored to your needs!',
      link: '/carbookingservices',
    },
    {
      src: '/wedding.jpg',
      alt: 'Celebrate Love with Our Reliable Wedding Travel Services',
      description:
        'Make every celebration unforgettable—travel comfortably with our dependable services designed for your special occasions!',
      link: '/truckloadingservices',
    },
    {
      src: '/maihar.jpg',
      alt: 'Visit Maihar',
      description:
        'Experience divine blessings at Maihar Temple, a sacred pilgrimage spot.',
    },
    {
      src: '/chitrakoot.jpg',
      alt: 'Explore the Spiritual and Scenic Beauty of Chitrakoot',
      description:
        'Discover the tranquil beauty and spiritual significance of Chitrakoot.',
    },
    {
      src: '/kedarnath.jpg',
      alt: 'Embark on a Spiritual Journey to Kedarnath',
      description:
        'Embark on a spiritual journey to the divine Kedarnath Temple in the Himalayas.',
    },
    {
      src: '/zoo.jpeg',
      alt: 'Explore the Wildlife at the Zoo',
      description:
        'Enjoy a fun-filled family day exploring the wonders of the zoo!',
    },
    {
      src: '/forest.jpg',
      alt: 'Explore the Forest',
      description:
        'Reconnect with nature and experience the serenity of lush green forests.',
    },
    {
      src: '/maountain.jpg',
      alt: 'Embrace Serenity Amidst Majestic Mountains',
      description:
        'Breathe fresh air and revel in the beauty of majestic mountain ranges.',
    },
    {
      src: '/desert.jpg',
      alt: 'Experience the Royal Heritage and Desert Beauty of Rajasthan',
      description: 'Feel the golden sands of Rajasthan and its royal heritage!',
    },
    {
      src: '/taj-mahal.jpeg',
      alt: 'Explore the Taj Mahal',
      description:
        'Explore the timeless beauty of the Taj Mahal, a symbol of love and heritage.',
    },
    {
      src: '/india-gate.jpg',
      alt: 'Pay Tribute at India Gate',
      description:
        'A salute to bravery—visit the iconic India Gate in the heart of New Delhi.',
    },
    {
      src: '/golden-temple.jpg',
      alt: 'Experience Spiritual Serenity at the Golden Temple',
      description:
        'Seek blessings and experience peace at the Golden Temple in Amritsar.',
    },
    {
      src: '/hawa-mahal.jpg',
      alt: 'Explore the Majestic Hawa Mahal',
      description: 'Step into history with the stunning Hawa Mahal in Jaipur.',
    },
  ]

  const colors = ['black', 'red']
  const text1 = 'WHAT WE OFFER?'
  const text2 = 'WHO WE ARE?'
  const text3 = 'OUR MISSION'
  const text5 = 'OUR VISION'
  const text6 = 'WHY CHOOSE US?'

  const cardRefs = useRef([]) // To reference each card
  const cardRef = useRef([])
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the section is visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in') // Add the animation class
          observer.unobserve(entry.target) // Stop observing after animation
        }
      })
    }, observerOptions)

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card) // Observe each card
    })

    cardRef.current.forEach((card) => {
      if (card) observer.observe(card) // Observe each card
    })
    return () => observer.disconnect() // Cleanup observer
  }, [])

  const contents = [
    {
      title: 'Car Booking Services',
      description:
        'Whether you are planning a family trip, a business meeting, or an airport transfer, our fleet of well-maintained vehicles and professional drivers are at your service. With real-time booking options and competitive pricing, we make your travel experience stress-free and enjoyable.',
      link: '/carbookingservices',
    },
    {
      title: 'Truck Loading Services',
      description:
        'From small-scale goods to large consignments, we offer dependable truck loading services tailored to your logistics needs. Our extensive network ensures safe and timely deliveries, no matter where you are in India.',
      link: '/truckloadingservices',
    },
  ]

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
                 
        .card-hover-effect {
              overflow: hidden;
              transition: transform 0.5s ease, box-shadow 0.5s ease;
            }

          .card-hover-effect:hover {
            transform: scale(1.02);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
           .card-hover-effect:hover .caption {
            color: #000; /* Darker text on hover */
            transform: translateY(-5px); /* Slight lift on hover */
            transition: all 0.3s ease; /* Smooth animation */
          }
         .card-content{
          opacity: 0.5;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;}

          /* Show content on hover */
          .card-hover-effect:hover .card-content {
            opacity: 1;
            transform: translateY(0);
          }
            .image-carousel {
            overflow: hidden;
            position: relative;
            width: 100%;
            // height: 200px; /* Adjust as needed */
            margin-top: 2rem;
          }
          .image-track {
            display: flex;
            width: max-content;
            gap:4rem;
            animation: scroll-right-left 90s linear infinite;
          }
            .caption {
             text-align: center;
              margin-top: 10px;
              margin-bottom: 20px; /* Added bottom margin */
              padding: 10px; /* Added padding for spacing */
              font-size: 1rem;
              color: #555;
              background: rgba(255, 255, 255, 0.8); /* Light background for better readability */
              border-radius: 8px; /* Rounded corners */
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .carousel-image {
            height: 200px;
            width: auto;
            margin: 0 auto;
            margin-bottom: 10px; /* Space between image and description */
            border-radius: 10px; /* Optional: Round the edges of images */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
          }

          .carousel-image {
            height: 200px; /* Adjust as needed */
            width: 400px;
            align-items:center
            justify-content:center;
            margin-left: auto;
          }
          @keyframes scroll-right-left {
            0% {
              transform: translateX(20%);
            }
            100% {
              transform: translateX(-100%);
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
          }
          
          /* Section Styling */
        .container {
          max-width: 1200px;
          margin: auto;
        }

        h2.fw-bold {
          text-align: center;
          margin-bottom: 2rem;
        }

        /* Card Hover Effect */
        .shadow-sm {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .shadow-sm:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }

        .row {
          gap: 1rem 0;
        }

        .p-4 {
          padding: 1.5rem;
        }

        .border {
          border: 1px solid #ddd;
          border-radius: 10px;
        }

        /* Fade-in animation */
        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

      `}
      </style>
      <Container
        // className="d-block"
        style={{
          padding: '0',
          maxWidth: '100%',
          marginTop: '14vh',
          textAlign: 'center',
          fontFamily: "'Pacifico', cursive",
        }}
      >
        <Card
          className="shadow-lg p-4"
          style={{
            // backgroundColor: 'var(--bs-secondary-bg)',
            // background: 'linear-gradient(to right, white, #0d6efd)',
            // background: 'linear-gradient(to right, white, #27ae60)',

            color: 'rgb(var(--bs-secondary-bg-rgb))',
            border: 'none',
          }}
        >
          <Card.Body>
            {/* Who we are */}
            <AnimatedHeading2
              ref={headingRef}
              inView={inView}
              className="fw-bold"
              style={{
                // marginBottom: '1.5rem',
                marginTop: '1rem ',
              }}
            >
              {text2.split('').map((char, index) => (
                <span
                  key={index}
                  style={{
                    color: colors[index % colors.length], // Cycle through colors
                  }}
                >
                  {char}
                </span>
              ))}
            </AnimatedHeading2>
            <div
              className="container d-flex flex-column flex-lg-row align-items-center justify-content-between"
              style={{
                gap: '1rem',
                // marginTop: '1.5rem',
                marginBottom: '1.5rem',
                // paddingTop: '1.5rem',
                paddingBottom: '2.5rem',
              }}
            >
              {/* Text Section */}
              <AnimatedHeading3
                ref={headingRef}
                inView={inView}
                className="text-start"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#555',
                  marginTop: '1rem',
                  flex: '1',
                }}
              >
                Welcome to <span style={{ color: 'red' }}>Ojha Brothers</span>,
                your trusted partner for seamless transportation solutions
                across India. We specialize in offering car booking services and
                truck loading services, designed to meet the diverse needs of
                our clients with efficiency, reliability, and affordability.
              </AnimatedHeading3>

              {/* Images Section */}
              <div
                className="d-flex flex-wrap justify-content-center justify-content-lg-end"
                style={{ gap: '1rem', flex: '1' }}
              >
                <img
                  src="/india_map.jpg"
                  alt="Anywhere in India"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    maxWidth: '500px', // Increased max width for larger images
                    height: 'auto',
                    // borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added shadow for a polished look
                  }}
                />
              </div>
            </div>
            <div>
              <hr
                style={{
                  color: 'black',
                  margin: '1rem',
                }}
              />
            </div>

            {/* Our Mission */}
            <AnimatedHeading2
              ref={headingRef}
              inView={inView}
              className="fw-bold"
              // style={{
              //   fontFamily: 'cursive',
              //   color: '#333',
              //   letterSpacing: '2px',
              //   fontWeight: '700',
              //   lineHeight: '1.3',
              //   textShadow: '0 4px 5px gray',
              //   marginTop: '1.5rem',
              //   marginBottom: '1.5rem',
              //   paddingTop: '1.5rem',
              //   paddingBottom: '2.5rem',
              // }}
            >
              {text3.split('').map((char, index) => (
                <span
                  key={index}
                  style={{
                    color: colors[index % colors.length], // Cycle through colors
                  }}
                >
                  {char}
                </span>
              ))}
            </AnimatedHeading2>
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
              {/* Text Section */}
              <AnimatedHeading3
                ref={headingRef}
                inView={inView}
                className="text-start"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#555',
                  marginTop: '1rem',
                  flex: '1',
                }}
              >
                To simplify travel and logistics by delivering top-notch
                services that ensure smooth journeys and hassle-free cargo
                transportation. We aim to connect people and businesses across
                the nation with innovative and customer-focused solutions.
              </AnimatedHeading3>

              {/* Images Section */}
              <div
                className="d-flex flex-wrap justify-content-center justify-content-lg-end"
                style={{ gap: '1rem' }}
              >
                <img
                  src="/my-car.jpeg"
                  alt="Car Booking"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: 'auto',
                    // borderRadius: '8px',
                    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <img
                  src="/my-truck2.png"
                  alt="Truck Loading"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: 'auto',
                    // borderRadius: '8px',
                    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
            </div>

            <div>
              <hr
                style={{
                  color: 'black',
                  margin: '1rem',
                }}
              />
            </div>

            {/* What we offer */}
            {/* Services Section */}
            <section
              className="services-section py-5 bg-light "
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
                {' '}
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
                      <h5 className="text-muted text-start">
                        Whether you are planning a family trip, a business
                        meeting, or an airport transfer, our fleet of
                        well-maintained vehicles and professional drivers are at
                        your service. With real-time booking options and
                        competitive pricing, we make your travel experience
                        stress-free and enjoyable.
                      </h5>

                      <Link to="/contactus" style={{ textDecoration: 'none' }}>
                        <button
                          className="btn btn-outline-success mt-4 d-flex align-items-start"
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
                            className="card-title fw-bold text-white"
                            data-aos="fade-right"
                            style={{ letterSpacing: '2px' }}
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
                      <h5 className="text-muted text-start">
                        From small-scale goods to large consignments, we offer
                        dependable truck loading services tailored to your
                        logistics needs. Our extensive network ensures safe and
                        timely deliveries, no matter where you are in India.
                      </h5>

                      <Link to="/contactus" style={{ textDecoration: 'none' }}>
                        <button
                          className="btn btn-outline-danger mt-4 d-flex align-items-start"
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
                        className="card shadow-lg border-0 bg-danger text-white"
                        style={{
                          borderRadius: '0 10% 0 10%',
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
                            style={{ letterSpacing: '2px' }}
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

            <div>
              <hr
                style={{
                  color: 'black',
                  margin: '1rem',
                }}
              />
            </div>

            {/* Our Vision */}
            <AnimatedHeading2
              ref={headingRef}
              inView={inView}
              className="fw-bold"
              // style={
              //   {
              // marginTop: '1.5rem',
              // marginBottom: '1.5rem',
              // paddingTop: '1.5rem',
              // paddingBottom: '2.5rem',
              // fontFamily: 'cursive',
              // color: '#333',
              // letterSpacing: '2px',
              // fontWeight: '700',
              // lineHeight: '1.3',
              // textShadow: '0 4px 5px gray',
              //   }
              // }
            >
              {text5.split('').map((char, index) => (
                <span
                  key={index}
                  style={{
                    color: colors[index % colors.length], // Cycle through colors
                  }}
                >
                  {char}
                </span>
              ))}
            </AnimatedHeading2>

            <div
              className="container d-flex flex-column flex-lg-row align-items-center justify-content-between"
              style={{ gap: '1rem', padding: '1rem' }}
            >
              {/* Text Section */}
              <AnimatedHeading3
                ref={headingRef}
                inView={inView}
                className="text-start"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#555',
                  marginTop: '1rem',
                  flex: '1',
                }}
              >
                To become India's leading provider of car booking and truck
                loading services by constantly evolving and adapting to the
                dynamic needs of our clients. We are committed to fostering
                connections that drive growth, convenience, and trust.
              </AnimatedHeading3>

              {/* Images Section */}
              <div
                className="d-flex flex-wrap justify-content-center justify-content-lg-end"
                style={{
                  gap: '1rem',
                  flex: '1',
                  // marginTop: '1.5rem',
                  marginBottom: '1.5rem',
                  // paddingTop: '1.5rem',
                  paddingBottom: '2.5rem',
                }}
              >
                <img
                  src="/hand-shaking.jpg"
                  alt="Car Booking"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    maxWidth: '500px', // Increased max width for larger images
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added shadow for a polished look
                  }}
                />
              </div>
            </div>
            <div>
              <hr
                style={{
                  color: 'black',
                  margin: '1rem',
                }}
              />
            </div>
            <div
              style={{
                marginBottom: '1.5rem',
                paddingBottom: '2.5rem',
              }}
            >
              {/* Why choose us */}
              <div className="container">
                <AnimatedHeading2
                  ref={headingRef}
                  inView={inView}
                  className="fw-bold"
                  // style={{
                  //   marginTop: '1.5rem',
                  //   paddingTop: '1.5rem',
                  //   marginBottom: '1.5rem',
                  //   paddingBottom: '2.5rem',
                  //   fontFamily: 'cursive',
                  //   // color: '#333',
                  //   letterSpacing: '2px',
                  //   fontWeight: '700',
                  //   lineHeight: '1.3',
                  //   textShadow: '0 4px 5px gray',
                  // }}
                >
                  {text6.split('').map((char, index) => (
                    <span
                      key={index}
                      style={{
                        color: colors[index % colors.length], // Cycle through colors
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </AnimatedHeading2>

                {/* Content Cards */}
                <div
                  className="row mt-4"
                  style={{
                    // borderColor: 'none',
                    boxShadow: '0 4px 5px gray',
                  }}
                >
                  {whyChoose.map((content, index) => (
                    <div
                      key={index}
                      className="col-md-6 mb-4"
                      ref={(el) => (cardRef.current[index] = el)} // Attach refs
                      style={{
                        opacity: 0,
                        transform: 'translateY(30px)',
                        transition: ' opacity 0.8s ease, transform 0.8s ease',
                      }} // Initial hidden state
                    >
                      <div
                        className="p-4 border rounded shadow-sm h-100"
                        style={{
                          backgroundColor: '#fff',
                          borderRadius: '15px',
                          transition:
                            'transform 0.3s ease, box-shadow 0.3s ease',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow =
                            '0 6px 12px rgba(0,0,0,0.2)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow =
                            '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                      >
                        <h3
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
                        <p style={{ fontSize: '1rem', color: '#555' }}>
                          {content.description}
                        </p>

                        {/* Replace Button with Image */}
                        <img
                          src={content.image} // Pass image URL here
                          alt={content.title}
                          style={{
                            width: '100%', // Adjust the size of the image
                            height: '200px', // Set a height for consistency
                            objectFit: 'cover', // Ensures the image scales properly
                            borderRadius: '10px',
                            marginTop: '10px',
                            transition:
                              'transform 0.6s ease, box-shadow 0.3s ease',
                            transformStyle: 'preserve-3d', // Ensures smooth 3D rotation
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
          </Card.Body>
        </Card>
      </Container>
      <WhatsappChat />
      <Footer />
    </>
  )
}

export default About
