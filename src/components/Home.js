import React, { useState } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import CountUp from 'react-countup'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import WhatsappChat from './WhatsappChat'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStar } from 'react-icons/fa'

const Home = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const sectionStyle = {
    padding: '50px 20px',
    marginTop: '1rem',
  }
  const statsCardStyle = {
    color: 'black',
    // borderRadius: '10px',
    // fontFamily: "normal",
  }

  const items = [
    { icon: '🕒', title: '24/7 Customer Support' },
    { icon: '🚗', title: 'Nationwide Coverage' },
    { icon: '🚛', title: 'Quality & Delivery' },
    { icon: '😊', title: 'Customer Satisfaction' },
    {
      img: '/rupees.png',
      title: 'Affordable Pricing',
    },
  ]

  const navigate = useNavigate()
  const handleChooose = () => {
    navigate('/about')
  }

  const teamMembers = [
    'manish_photo.jpg',
    'kuldeep_photo.jpg',
    'ramesh_photo.jpg',
    'xailesh_photo.png',
    'abhilash_photo.jpg',
    'shivakant_photo.jpg',
    'chotumama_photo.jpg',
    'mausa.jpg',
  ]

  const places = [
    {
      src: '/emergency.png',
      alt: 'Urgent Booking Service',
      description:
        'Need an urgent booking? Count on us for prompt and reliable services, tailored to your needs!',
    },
    {
      src: '/events_img.jpg',
      alt: 'Special Events Booking',
      description:
        'Hosting a special event? Let us take care of your transportation needs with our reliable and convenient booking services.',
    },
    {
      src: '/celebrations_img.jpg',
      alt: 'Celebration Rides',
      description:
        'Make your celebrations extra special with our comfortable and timely transport options, tailored for your joyous occasions!',
    },

    {
      src: '/wedding_img.jpg',
      alt: 'Celebrate Love with Our Reliable Wedding Travel Services',
      description:
        'Make every celebration unforgettable—travel comfortably with our dependable services designed for your special occasions!',
    },
    {
      src: '/meeting_img.jpg',
      alt: 'Business Meetings',
      description:
        'Ensure you arrive on time and in style for your important meetings with our professional car booking services.',
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

                .slider-container {
                // overflow: hidden;
                // overflow-x:auto;
                white-space: nowrap;
                margin-top: 4rem;
                position: relative;
                max-width: 100%;
                // width:100%;
                display:flex;
                //  scroll-behavior: smooth;
                   padding-bottom: 10px;
              }

              .image-slider {
                display: flex;
                animation: slide 30s linear infinite;
              }

              .slide {
                min-width: 20%;
                padding: 13px;
                display: inline-block;
              }

              .slider-image {
                width: 100%;
                height: 90%;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                transition: transform 0.3s;
              }

              .slider-image:hover {
                transform: scale(1.1);
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
                transition: opacity 0.5s ease, transform 0.5s ease;
              }
                
              .card-hover-effect:hover .card-content {
              opacity: 1;
              transform: translateY(0);
              }

            .carousel-image {
              height: 200px;
              width: auto;
              margin: 0 auto;
              margin-bottom: 10px; /* Space between image and description */
              border-radius: 10px; /* Optional: Round the edges of images */
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
            }

            .card {
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
                }

              
                  .truck-button{
                  margin-bottom:1.5rem;
                  }

                h2 {
                  font-size: 2rem;
                }

                ul {
                  padding-left: 1rem;
                }

                ul li {
                  font-size: 1rem;
                  line-height: 1.6;
                }

              .image-carousel {
              overflow: hidden;
                  white-space: nowrap;
              position: relative;
              width: 100%;
              // height: 200px; /* Adjust as needed */
              margin-top: 2rem;
            }
           .image-track {
                display: flex;
                animation: slide 150s linear infinite;
                // display: flex;
                width: max-content;
                gap:4rem;
                // animation: scroll-right-left 120s linear infinite;
            }
            .carousel-image {
              height: 200px; /* Adjust as needed */
              width: 400px;
              align-items:center
              justify-content:center;
              margin-left: auto;
            }
          @keyframes slide {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
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

            
              @keyframes slide {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
                  blockquote {
                    background-color: #ffffff;
                    border-left: 5px solid #007bff;
                    position: relative;
                  }

                  .stars {
                    margin-bottom: 10px;
                  }

                  .testimonial-text {
                    font-size: 16px;
                    color: #333;
                    font-style: italic;
                  }

                  .testimonial-author {
                    font-weight: bold;
                    color: #555;
                    margin-top: 10px;
                  }

                 @media (max-width: 768px) {
                    .hero-style{
                        margin-top: 1rem !important;
                        height:250px;
                    }
                  
                    .ojha-text{
                    margin-top:-1rem !important;
                    margin-left: -2rem !important;
                    font-size: 30px !important;
                    }
                      .hanumat-text{
                    margin-left: 8rem !important;
                    margin-top: -1rem !important;
                    font-size: 15px !important;
                    letter-spacing:0px !important;
                    }
                    .lead{
                      font-size: 12px !important;
                        text-align: left !important;
                    }

                      /* Removes underline from Link */
                      .car-link {
                        text-decoration: none !important;
                      }
                   .car-button, .truck-button {
                        font-size: 10px !important;
                        width: 150px;
                        height: 40px;
                        text-align: center !important;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        letter-spacing: 1px !important;
                        text-decoration: none !important; /* Removes underline */
                    }
                      .car-button {
                        margin-left: 9rem;
                      }

                      .truck-button {
                        margin-right: 9rem;
                      }
                        .exploredest{
                        margin-top:1rem;
                        font-size:15px;
                        }
                       .carousel-image {
                      height: 120px; /* Adjust as needed */
                      width: 280px;
                      align-items:center
                      justify-content:center;
                      margin-left: auto;
                    }
                       .slide {
                      min-width: 15%;
                      padding: 13px;
                      display: inline-block;
                    }

                    .team-text{
                        margin-top: 1rem !important;
                        margin-bottom: -1rem !important;
                    }
                    .dheeru-img{
                      height:15rem !important;
                        margin-bottom: -3rem !important;
                    } 
                      .slider-image {
                           max-height:15rem !important;
                        min-width: 5rem !important; /* मोबाइल में इमेज थोड़ी छोटी करें */
                     
                      }
                    .testmo{
                        margin-bottom: 3rem !important;
                    font-size: 23px;
                    }
                    .part{
                     margin-bottom: -1rem !important;
                    }
                 .container {
                    margin: 0;
                  }

                   .call-to-action-text {
                        font-size: 18px; /* Adjust text size for smaller screens */
                    }

                    .call-to-action-button {
                        width: 100%; /* Full width for smaller screens */
                        height: auto; /* Auto adjust button height */
                        padding: 10px 0;
                        
                    }
   
                    .card {
                    
                          border-radius: 10px;
                          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                          transition: transform 0.2s ease-in-out;
                          overflow: hidden;
                      }
                  }    

             
              `}
      </style>
      <div>
        {/* Hero Section */}
        <section
          className="hero-style"
          style={{
            backgroundImage: "url('car-demo.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '20px 50px', // Adjust padding for mobile and desktop
            marginTop: '7rem', // Adjust margin for mobile and desktop
          }}
          data-aos="fade-left"
          data-aos-delay="0"
        >
          <div className="hero-text">
            <p
              className="display-4 fw-bold text-start ojha-text"
              style={{
                color: 'indigo',
                letterSpacing: '3px',
                textShadow: '1px 0px 6px gray',
                fontFamily: 'Bungee Spice',
              }}
              data-aos="fade-left"
              data-aos-delay="100"
              // className="ojha-text"
            >
              OJHA BROTHERS
            </p>
            <p
              className="display-4 fw-bold hanumat-text"
              style={{
                color: 'white',
                fontSize: '50px',
                marginLeft: '10rem',
                letterSpacing: '10px',
                textShadow: '0 4px 10px indigo',
                // fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
                fontFamily: 'Bungee Spice',
              }}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              HANUMAT KRIPA ROADLINES
            </p>
          </div>
          <p
            className="lead"
            data-aos="fade-down"
            data-aos-delay="0"
            style={{
              // fontFamily: "normal",
              fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
              color: 'yellow',
              textShadow: '0 4px 10px black',
            }}
          >
            Your Trusted Partner for Hassle-Free Car Journeys and Reliable Truck
            Loading Services!
          </p>
          <div
            className="mt-4 d-flex justify-content-center button"
            style={{
              fontFamily: 'normal',
              gap: '1rem', // Adjust gap between buttons
            }}
          >
            <Link to="/carbookingservices" className="car-link">
              <button
                className="btn btn-success btn-lg car-button fw-bold"
                style={{
                  // gap: '4rem',
                  textShadow: '0 4px 10px black',
                  letterSpacing: '2px',
                }}
                data-aos="fade-up"
                data-aos-delay="0"
              >
                Book your Car Now!
              </button>
            </Link>
            <Link to="/truckloadingservices" className="car-link">
              <button
                className="btn btn-danger btn-lg truck-button fw-bold"
                data-aos="fade-up"
                data-aos-delay="0"
                style={{
                  textShadow: '0 4px 10px black',
                  letterSpacing: '2px',
                }}
              >
                Get your Truck for Loading!
              </button>
            </Link>
          </div>
        </section>

        {/* Tour Photos */}
        <section
          className="image-carousel"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            // marginTop: '3rem',
            marginBottom: '1.5rem',
            // paddingTop: '3rem',
            paddingBottom: '2.5rem',
          }}
        >
          <h2
            className="text-center mb-4 exploredest"
            data-aos="flip-left"
            data-aos-delay="100"
            style={{
              fontWeight: 'bold',
              letterSpacing: '2px',
              color: 'indigo',
              fontFamily: 'normal',
              // fontFamily: 'Comic Sans MS, normal',
              // fontFamily: "normal",
            }}
          >
            <span className="text-danger">EXPLORE TOP</span>
            <span className="text-success"> DESTINATIONS!</span>
          </h2>
          <div className="image-track " data-aos="flip-up">
            {places.map((place, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  marginBottom: '1rem',
                  fontFamily: 'normal',
                  borderRadius: '50px 0 50px 0',
                }}
                className="card-hover-effect"
                data-aos="flip-up"
              >
                <img
                  src={place.src}
                  alt={place.alt}
                  className="carousel-image"
                  style={{
                    borderRadius: '0 50px 0 50px',
                  }}
                />
                <div className="caption text-danger">
                  <h5
                    style={{
                      margin: '10px 0 5px',
                      fontWeight: 'bold',
                      marginLeft: '2rem',
                      marginRight: '2rem',
                    }}
                  >
                    {place.alt}
                  </h5>
                  <p
                    className="text-success"
                    style={{ marginLeft: '1rem', marginRight: '1rem' }}
                  >
                    {place.description}
                  </p>
                </div>
              </div>
            ))}

            {places.map((place, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  marginBottom: '1rem',
                  fontFamily: 'normal',
                  borderRadius: '50px 0 50px 0',
                }}
                className="card-hover-effect "
              >
                <img
                  src={place.src}
                  alt={place.alt}
                  className="carousel-image"
                  style={{
                    borderRadius: '0 50px 0 50px',
                  }}
                />
                <div className="caption text-danger">
                  <h5
                    style={{
                      margin: '10px 0 5px',
                      fontWeight: 'bold',
                      marginLeft: '2rem',
                      marginRight: '2rem',
                    }}
                  >
                    {place.alt}
                  </h5>
                  <p
                    className="text-success"
                    style={{ marginLeft: '1rem', marginRight: '1rem' }}
                  >
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section
          className="services-section py-5 bg-light "
          style={sectionStyle}
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
            className="text-center mb-4"
            data-aos="fade-up"
            style={{
              fontWeight: 'bold',
              letterSpacing: '2px',
              fontFamily: 'normal',
              // textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
            }}
          >
            <span className="text-danger">OUR</span>
            <span className="text-success"> SERVICES</span>
          </h2>
          <div
            className="container"
            style={{
              fontFamily: 'normal',
            }}
          >
            <div className="container">
              <div className="row align-items-center my-5">
                <div
                  className="col-md-6 order-md-2 mb-4"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <h2 className="fw-bold mb-3 text-success">
                    आपकी यात्रा, हमारी प्राथमिकता
                  </h2>
                  <p className="text-muted">
                    हम आपकी यात्रा को आरामदायक, सुरक्षित और यादगार बनाने के लिए
                    समर्पित हैं। चाहे आपका सफर परिवार के साथ हो, दोस्तों के संग
                    हो, या व्यवसाय के लिए— हमारी सेवाएँ हर कदम पर आपके साथ हैं।
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>आरामदायक गाड़ियाँ:</strong> आधुनिक और साफ-सुथरी
                      गाड़ियाँ।
                    </li>
                    <li className="mb-2">
                      <strong>अनुभवी चालक:</strong> भरोसेमंद और अनुभवी
                      ड्राइवर्स।
                    </li>
                    <li className="mb-2">
                      <strong>समय की पाबंदी:</strong> समय पर पहुँचने की गारंटी।
                    </li>
                    <li>
                      <strong>24/7 सेवा:</strong> किसी भी समय, किसी भी जगह।
                    </li>
                  </ul>
                  <Link to="/contactus">
                    <button
                      className="btn btn-outline-success mt-4"
                      style={{ letterSpacing: '1px' }}
                    >
                      अधिक जानें
                    </button>
                  </Link>
                </div>

                <div
                  className="col-md-6 order-md-1"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="card shadow-lg border-0">
                    <img
                      src="my-car.jpeg"
                      className="card-img-top rounded"
                      alt="Car Booking"
                    />
                    <div className="card-body">
                      <h5
                        className="card-title fw-bold text-success"
                        data-aos="fade-right"
                      >
                        Car Booking
                      </h5>
                      <p className="card-text" data-aos="fade-left">
                        Experience smooth, comfortable rides for city tours and
                        business trips.
                      </p>
                      <Link to="/carbookingservices">
                        <button
                          className="btn btn-success"
                          data-aos="fade-right"
                          style={{
                            letterSpacing: '1px',
                            textShadow: '0 4px 10px black',
                          }}
                        >
                          Explore Car Booking
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center my-5">
                <div
                  className="col-md-6"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <h2 className="fw-bold mb-3 text-danger">ट्रक लोडिंग सेवा</h2>
                  <p className="text-muted">
                    छोटे व्यवसायों से लेकर बड़े उद्योगों तक, हम हर प्रकार के
                    व्यवसाय के लिए भरोसेमंद और कुशल ट्रक लोडिंग सेवाएँ प्रदान
                    करते हैं।
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>सुरक्षित लोडिंग:</strong> आधुनिक उपकरणों का उपयोग।
                    </li>
                    <li className="mb-2">
                      <strong>अनुभवी टीम:</strong> विशेषज्ञ कर्मचारियों द्वारा
                      लोडिंग।
                    </li>
                    <li>
                      <strong>समय की पाबंदी:</strong> समय पर लोडिंग और डिलीवरी।
                    </li>
                  </ul>
                  <Link to="/contactus" style={{ textDecoration: 'none' }}>
                    <button
                      className="btn btn-outline-danger mt-4 truck-button"
                      style={{ letterSpacing: '1px' }}
                    >
                      अधिक जानें
                    </button>
                  </Link>
                </div>
                <div
                  className="col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="card shadow-lg border-0">
                    <img
                      src="my-truck2.png"
                      className="card-img-top rounded"
                      alt="Truck Loading"
                    />
                    <div className="card-body">
                      <h5
                        className="card-title fw-bold text-danger"
                        data-aos="fade-right"
                      >
                        Truck Loading
                      </h5>
                      <p className="card-text" data-aos="fade-left">
                        Reliable and efficient truck loading services for
                        businesses of all sizes.
                      </p>
                      <Link to="/truckloadingservices">
                        <button
                          className="btn btn-danger"
                          data-aos="fade-right"
                          style={{
                            letterSpacing: '1px',
                            textShadow: '0 4px 10px black',
                          }}
                        >
                          Check Truck Services
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section>
          <div
            className="d-block justify-content-center text-center container-fluid"
            style={{
              marginTop: '4rem',
              animation: 'zoomIn 1.5s ease-in-out',
              // fnormal',
              overflowX: 'hidden',
            }}
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
              className="text-center mb-4 team-text"
              style={{
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontFamily: 'normal',
                // textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
              }}
              data-aos="fade-up"
            >
              <span className="text-danger">OUR</span>
              <span className="text-success"> TEAM</span>
            </h2>
            {/* Group 1 */}
            <Row
              className="justify-content-center mx-0 dheeru-row"
              style={{ marginTop: '4rem' }}
            >
              <Col xs={12} md={6} lg={4} className="mb-4">
                <img
                  data-aos="flip-left"
                  data-aos-delay="500"
                  src="dheeru_half_image.jpg"
                  className="img-thumbnail shadow dheeru-img"
                  alt="Dheeru Ojha"
                  title="Dheeru Ojha"
                  style={{
                    maxWidth: '70%',
                    height: 'auto',
                    borderRadius: '1%',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.1)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                />
              </Col>
            </Row>
            {/* Image Slider Section */}
            <section className="slider-container" data-aos="flip-up">
              <div className="image-slider d-flex">
                {teamMembers.map((src, idx) => (
                  <div className="slide" key={idx}>
                    <img
                      src={src}
                      alt={`Team Member ${idx + 1}`}
                      className="slider-image"
                    />
                  </div>
                ))}
                {/* Duplicate images for infinite scrolling effect */}
                {teamMembers.map((src, idx) => (
                  <div className="slide" key={`duplicate-${idx}`}>
                    <img
                      src={src}
                      alt={`Duplicate Team Member ${idx + 1}`}
                      className="slider-image"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* Testimonials Section */}
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
          className="text-center mb-4 testmo"
          data-aos="fade-up"
          style={{
            fontWeight: 'bold',
            letterSpacing: '2px',
            fontFamily: 'normal',
            // textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
          }}
        >
          <span className="text-danger">WHAT OUR</span>
          <span className="text-success"> CLIENTS SAY</span>
        </h2>
        <section
          className="testimonials-section py-5 bg-light"
          data-aos="fade-up"
          style={{
            backgroundImage: "url('/water-fall.jpeg')", // Set the background image
            backgroundSize: 'cover', // Ensure the image covers the entire section
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Row
            style={{
              margin: '2rem',
            }}
          >
            {[
              {
                text: 'Excellent service! Always on time and reliable.',
                name: 'Ramesh Kumar',
              },
              {
                text:
                  'Affordable and professional. Highly recommend their services.',
                name: 'Priya Sharma',
              },
              {
                text: 'They made my logistics easier than ever! Great team.',
                name: 'Ajay Gupta',
              },
            ].map((testimonial, index) => (
              <Col
                md={4}
                data-aos="flip-left"
                key={index}
                className="testimonial-box"
              >
                <blockquote className="p-4 shadow rounded ">
                  <div className="stars text-end">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#ffc107" />
                    ))}
                  </div>
                  <p
                    className="testimonial-text"
                    style={{ fontFamily: 'normal' }}
                  >
                    {testimonial.text}
                  </p>
                  <footer
                    className="testimonial-author"
                    style={{ letterSpacing: '2px' }}
                  >
                    - {testimonial.name}
                  </footer>
                </blockquote>
              </Col>
            ))}
          </Row>
        </section>

        {/* About Section */}
        <section
          // className="about-section "
          data-aos="fade-up"
          style={{
            marginBottom: '3rem',
            // fontFamily: "normal",
          }}
        >
          <div
            style={{
              marginTop: '2rem',
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
            className="text-center mb-4 testmo"
            data-aos="fade-up"
            style={{
              fontWeight: 'bold',
              letterSpacing: '2px',
              fontFamily: 'normal',
            }}
          >
            <span className="text-danger">WHY</span>
            <span className="text-success"> CHOOSE US ?</span>
          </h2>
          <Row
            className="justify-content-center mx-0"
            style={{ fontFamily: 'normal' }}
          >
            <div
              className="d-flex justify-content-center align-items-center  flex-wrap"
              style={{
                gap: '4rem',
                paddingLeft: '5rem',
                paddingRight: '5rem',
                animation: 'zoomIn 1.5s ease-in-out',
              }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="col-12 col-lg col-md-4"
                  title="Read More"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  style={{
                    borderRadius: '50px 0 50px 0',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                    marginTop: '1.5rem',
                    marginBottom: '1.5rem',
                    paddingTop: '1.5rem',
                    paddingBottom: '2.5rem',
                    minHeight: '250px',
                    transition: 'all 0.3s ease-in-out',
                    fontSize: '3.5rem',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.boxShadow =
                      '0 8px 15px rgba(0,0,0,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow =
                      '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                  onClick={handleChooose}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: '60px' }}
                  >
                    {item.icon ? (
                      item.icon
                    ) : (
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: '4rem',
                          height: '3rem',
                          marginTop: '2rem',
                          objectFit: 'contain',
                        }}
                      />
                    )}
                  </div>

                  <h3
                    className="mt-3 text-center fw-bold"
                    style={{
                      fontFamily: 'normal',
                      fontSize: '1.1rem',
                      lineHeight: '1.3',
                      wordWrap: 'break-word',
                    }}
                  >
                    {item.title}
                  </h3>

                  <div style={{ textAlign: 'center' }}>
                    <p
                      className="text-muted"
                      style={{
                        // color: 'green',
                        fontSize: '17px',
                        letterSpacing: '2px',
                      }}
                    >
                      Read More
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Row>
        </section>

        {/* Achievements Section */}
        <div>
          <section
            className="services-section py-5 bg-light "
            style={sectionStyle}
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
              className="text-center mb-4 testmo"
              data-aos="fade-up"
              style={{
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontFamily: 'normal',
                // textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
              }}
            >
              <span className="text-danger">OUR</span>
              <span className="text-success"> ACHIEVEMENTS</span>
            </h2>
            <div className="row text-center mt-5">
              <div
                className="col-md-3"
                style={statsCardStyle}
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h1>
                  <CountUp
                    start={0}
                    end={1000}
                    duration={3}
                    useEasing={true}
                    suffix="+"
                  />
                </h1>
                <p className="text-muted" style={{ fontFamily: 'normal' }}>
                  Happy Customers
                </p>
              </div>
              <div
                className="col-md-3"
                style={statsCardStyle}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1>
                  <CountUp
                    start={0}
                    end={500}
                    duration={3}
                    useEasing={true}
                    suffix="+"
                  />
                </h1>
                <p className="text-muted" style={{ fontFamily: 'normal' }}>
                  Car Bookings
                </p>
              </div>
              <div
                className="col-md-3"
                style={statsCardStyle}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h1>
                  <CountUp
                    start={0}
                    end={200}
                    duration={3}
                    useEasing={true}
                    suffix="+"
                  />
                </h1>
                <p className="text-muted" style={{ fontFamily: 'normal' }}>
                  Trucks Loaded
                </p>
              </div>
              <div
                className="col-md-3"
                style={statsCardStyle}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h1>
                  <CountUp
                    start={0}
                    end={5}
                    duration={4}
                    useEasing={true}
                    suffix="+"
                  />
                </h1>
                <p className="text-muted" style={{ fontFamily: 'normal' }}>
                  Years of Service
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* Join as partner Section */}
        <section className="our-vission py-5 " style={{ marginTop: '0rem' }}>
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
            className="testmo text-center mb-4 text-black fw-bold part"
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

            <div>
              {' '}
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
                  fontFamily: 'normal',
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
              <div
                className="text-center align-items-start d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Link to="/contactus">
                  <Button
                    className="fw-bold btn btn-warning call-to-action-button"
                    variant="warning"
                    style={{
                      letterSpacing: '2px',
                      width: '14rem',
                      height: '3rem',
                      fontSize: '20px',
                      textShadow: isHovered ? '0 4px 10px black' : 'none',
                      color: isHovered ? 'white' : 'black',
                      transition: 'text-shadow 0.3s ease',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <i
                      className="bi bi-telephone-fill"
                      style={{ color: 'inherit' }}
                    ></i>{' '}
                    JOIN US
                  </Button>
                </Link>
              </div>
            </div>

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
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="contact-section py-5 bg-light"
          style={{
            marginTop: '-2rem',
            fontFamily: 'normal',
          }}
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
            <span className="text-danger">HAVE A</span>
            <span className="text-success"> QUERY ?</span>
          </h2>
          <Container>
            <Row
              style={{
                fontFamily: 'normal',
                marginBottom: '2rem',
                marginTop: '3rem',
                color: '#333',
                marginLeft: '2rem',
              }}
            >
              <Col md={6} data-aos="fade-right">
                <h3
                  className="fw-bold text-success"
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
                  +91 - 9838875119
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

export default Home
