import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Offcanvas, Dropdown } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavbarComponents = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [show, setShow] = useState(false)
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const [showNavbar, setShowNavbar] = useState(true)
  // const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down, hide the navbar
        setShowNavbar(false)
      } else {
        // Scrolling up, show the navbar
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])
  React.useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  const toggleMenu = () => setIsMenuVisible((prev) => !prev)
  const hideMenu = () => setIsMenuVisible(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const navigate = useNavigate()

  const handleLinkClick = (path) => {
    setActiveLink(path)
    setShow(false) // Close Offcanvas on link click
    hideMenu()
    navigate(path)
  }

  return (
    <>
      <style>{`
        /* Desktop View */
        @media (min-width: 1200px) {
          .custom-toggler {
            display: none;
            // background-color: #F43F5E !important;
          }

          .container{
          max-width:1120px;
          }
        .navbar-nav .nav-link{
        color: black;
        transition: color 0.3s ease-in-out;
        }

       

        .navbar-nav .nav-link:hover{
        color: #FFA500;
        // color: #1E90FF;
        // color: #00FFFF;
        
        // color: #FFD700;
        }
        .navbar-logo-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 113px; /* Matches the height of the logo */
        height: 113px; /* Matches the height of the logo */
        border-radius: 50%;
        margin-left: 2rem;
        padding: 5px; /* Space for the animated border */
        background: linear-gradient(
         90deg,
            #ff0000,
            #00ff00,
            #0000ff,
            #ffff00,
            #00ffff,
            #ff00ff,
            #ff0000
          );
          background-size: 300% 300%;
          animation: colorful-border 4s linear infinite;
        }
           .navbar-logo video {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

          @keyframes colorful-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
          .navbar-logo {
            width: 100%;
            height: 113px; /* Optional: Adds a rounded look */
            
            border-radius: 50%;
          }

          .navbar-logo video {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ensures the video scales correctly */
          }

          .services-dropdown:hover .services-menu {
            display: block;
            opacity: 1;
            transform: scale(1) translateY(0);
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          }

          .services-menu {
          display: none;
            position: absolute;
            background-color: 'var(--bs-secondary-bg)',
            border-radius: 4px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            z-index: 1;
            min-width: 150px;
            top: 100%;
            left: 0;
            padding: 10px 0;
            opacity: 0;
            transform: scale(0.8) translateY(-10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
             .services: hover {
               color: #FFA500;
             }
              .services-menu a {
            color: black;
            padding: 8px 20px;
            text-decoration: none;
            display: block;
            transition: color 0.3s ease, transform 0.3s ease;
          }
            .services-dropdown:hover .services-menu {
          display: block;
          opacity: 1; /* Fully visible */
          transform: scale(1) translateY(0); /* Smooth scaling to normal size and no upward movement */
          transition: opacity 0.3s ease, transform 0.3s ease; /* Keep the transition smooth */
        }

          .services-menu a:hover {
        color: #FFA500;
        transform: scale(1.05); 
        
        }
        
          /* Offcanvas Center Alignment */
        .offcanvas-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 1rem;
        }

        /* Mobile view */
        @media(max-width: 1199px){
          .navbar{
          height:auto;
          }

          .navbar-toggler{
            margin-right: auto;
          }
        }

      `}</style>

      {/* Desktop Navbar Links */}
      <Navbar
        expand="lg"
        className="d-none d-lg-flex .container" // Hide this Navbar on mobile screens
        style={{
          fontFamily: "'Pacifico', cursive",
          height: '7.2rem',
          backgroundColor: 'white',
          // background: 'linear-gradient(to right, white, #0d6efd)',
          // backgroundColor: 'var(--bs-secondary-bg)', // Correct inline CSS syntax
          // color: 'rgb(var(--bs-secondary-bg-rgb))',
          position: 'fixed',
          zIndex: '1050',
          width: '100%',
          top: showNavbar ? '0' : '-7.4rem',
          transition: 'top 0.3s ease-in-out',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          // boxShadow: '0 2px 7px solid gray',
        }}
      >
        <Container fluid>
          {/* Logo and Title */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div className="navbar-logo-container">
              <div
                className="navbar-logo"
                style={{
                  marginBottom: '1rem',
                }}
              >
                <video src="/logo_video.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </Navbar.Brand>

          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto fw-bold" style={{ fontSize: '1rem' }}>
              <div
                style={{
                  width: '46rem',
                  marginRight: '3rem',
                  marginLeft: '0',
                }}
              >
                <marquee style={{ color: 'black' }}>
                  Welcome to <span style={{ color: 'red' }}>Ojha Brothers</span>{' '}
                  ! Book your car journey effortlessly. Load your truck with
                  ease. Get the best deals today! Call us now! 📞 +91-9838875119
                </marquee>
              </div>
              <Nav.Link as={Link} to="/home" className="me-5 ">
                Home
              </Nav.Link>
              <div
                className="services-dropdown position-relative "
                onMouseLeave={hideMenu}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="text-black fw-bold me-5 mt-2 services"
                  onMouseEnter={toggleMenu}
                >
                  Services
                </div>
                {isMenuVisible && (
                  <div className="services-menu ">
                    <Link to="/carbookingservices" onClick={hideMenu}>
                      Car Booking
                    </Link>
                    <Link to="/truckloadingservices" onClick={hideMenu}>
                      Truck Loading
                    </Link>
                  </div>
                )}
              </div>

              <Nav.Link as={Link} to="/about" className="me-5">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus" className="me-5">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Navbar Links */}
      <Navbar
        expand="md"
        className="d-md-none p-3" // Show this Navbar only on mobile screens
        style={{
          fontFamily: "'Pacifico', cursive",
          // height: '5rem',
          backgroundColor: 'white',
          position: 'fixed',
          top: showNavbar ? '0' : '-7.4rem',
          transition: 'top 0.3s ease-in-out',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          zIndex: '1060',
          // top: '0',
          // left: '0',
          // right: '0',
          // zIndex: '1060', // Ensure it stays above other elements
          // position: 'relative', // Keep it positioned properly
          // border: '2px solid #fff', // Optional: Adds a border for better visibility
          // boxShadow: '0 0px 6px solid red',
        }}
      >
        <Container fluid>
          <Navbar.Toggle
            style={{
              // fontFamily: "'Pacifico', cursive",
              marginLeft: 'auto',

              zIndex: '1070',
              backgroundColor: 'var(--bs-secondary-bg)',
            }}
            aria-controls="offcanvasNavbar"
            onClick={handleShow}
          />
          <div className="fw-bold mt-2">
            <marquee style={{ color: 'black' }}>
              Welcome to <span style={{ color: 'red' }}>Ojha Brothers</span> !
              Book your car journey effortlessly. Load your truck with ease. Get
              the best deals today! Call us now! 📞 +91-9838875119
            </marquee>
          </div>
        </Container>
      </Navbar>
      <Offcanvas
        show={show}
        onHide={handleClose}
        // className=" d-md-none"
        className="d-md-none"
        id="offcanvasNavbar"
        placement="top"
        style={{
          fontFamily: "'Pacifico', cursive",
          zIndex: '1070',
          height: '7rem',
          // zIndex: '1060', // It is for
          backgroundColor: 'white',
        }}
      >
        <Offcanvas.Header
        // className="d-flex align-items-center justify-content-between"
        >
          <Offcanvas.Title>
            <div
              className="navbar-logo-container"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '113px', // Matches the height of the logo
                height: '113px', // Matches the height of the logo
                borderRadius: '50%',
                marginLeft: '1rem',
                marginTop: '-15%',
                padding: '5px',
                background:
                  'linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ffff00, #00ffff, #ff00ff, #ff0000)',
                backgroundSize: '300% 300%',
                animation: 'colorful-border 4s linear infinite',
              }}
            >
              <div className="navbar-logo">
                <video
                  src="/logo_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    marginBottom: '1rem',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    marginTop: '5%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </Offcanvas.Title>

          <Offcanvas.Body
            style={
              {
                // height: '130px',
                // marginTop: '-2rem',
              }
            }
          >
            <Nav className="offcanvas-nav  align-items-center justify-content-center">
              <Nav.Link
                as={Link}
                to="/home"
                onClick={handleClose}
                className="text-black fw-bold"
              >
                Home
              </Nav.Link>
              <div className="services-dropdown ">
                {/* Main Trigger Button for Dropdown */}
                <div
                  className="text-black fw-bold services"
                  onClick={toggleMenu} // Use onClick instead of onMouseEnter for mobile compatibility
                  style={{
                    cursor: 'pointer', // Indicates it's clickable
                    padding: '10px 15px', // Better touch target size
                  }}
                >
                  Services
                </div>

                {/* Dropdown Menu */}
                {isMenuVisible && (
                  <div
                    className=" shadow-sm rounded position-absolute"
                    style={{
                      top: 'calc(100% + .1rem)', // Below the Offcanvas.Header
                      left: '50%',
                      transform: 'translateX(-50%)', // Center align dropdown
                      width: '220px',
                      zIndex: 1050, // High priority to appear above Offcanvas
                      borderRadius: '8px',
                      padding: '10px',
                      backgroundColor: 'white',
                    }}
                  >
                    <Nav.Link
                      to="/carbookingservices"
                      className="d-block text-decoration-none text-dark py-2 px-3 rounded"
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        // color: 'white',
                        // transition: 'background-color 0.3s',
                      }}
                      onClick={() => handleLinkClick('/carbookingservices')} // Close menu and navigate
                    >
                      Car Booking
                    </Nav.Link>
                    <Nav.Link
                      to="/truckloadingservices"
                      className="d-block text-decoration-none text-dark py-2 px-3 rounded"
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        // color: 'white',
                        // transition: 'background-color 0.3s',
                      }}
                      onClick={() => handleLinkClick('/truckloadingservices')} // Close menu and navigate
                    >
                      Truck Loading
                    </Nav.Link>
                  </div>
                )}
              </div>

              <Nav.Link
                as={Link}
                to="/about"
                onClick={handleClose}
                className="text-black fw-bold"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contactus"
                onClick={handleClose}
                className="text-black fw-bold"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
          <button
            type="button"
            className="btn"
            aria-label="Close"
            style={{
              color: 'gray',
              fontSize: '1.4rem',
              background: 'none',
              border: 'none',
            }}
            onClick={handleClose}
          >
            X
          </button>
        </Offcanvas.Header>
        <style>
          {`
              @keyframes colorful-border {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}
        </style>
      </Offcanvas>
    </>
  )
}

export default NavbarComponents
