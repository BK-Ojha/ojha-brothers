import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponents = () => {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show')
    }
  }
  return (
    <>
      <style>
        {`
        /* Navbar.css */

             
              .scrolling-text-container {
                  overflow: hidden;
                  white-space: nowrap;
                  position: relative;
                  width: 100%;
                  text-align: center;
                  padding: 5px 0;
                }

                .scrolling-text {
                  display: inline-block;
                  white-space: nowrap;
                  animation: scroll-text 30s linear infinite;
                  font-size: 16px;
                  color: indigo;
                }

                @keyframes scroll-text {
                  0% {
                    transform: translateX(100%);
                  }
                  100% {
                    transform: translateX(-100%);
                }
              }
                  .nav-link {
                font-size: 16px;
                font-weight: 500;
                transition: color 0.3s ease;
              }

              .nav-link:hover {
                color: indigo;
              }

              .dropdown-menu .dropdown-item:hover {
                background-color: indigo;
                color:white;
              }
            
              

                @media (max-width: 768px) {
                  nav{
                    margin-bottom:-1rem !important;
                  }
                    .navbar-brand img{
                      margin-left:1px !important;
                    }                  
                }
      `}
      </style>
      <nav
        className="navbar navbar-expand-lg navbar-light shadow "
        style={{
          fontFamily: 'normal',
          marginBottom: '-7rem',
        }}
      >
        <div className="container-fluid ">
          {/* Logo Section */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/logo_icon2.jpg"
              alt="Logo"
              style={{
                height: '75px',
                width: '75px',
                marginLeft: '2rem',
                borderRadius: '50%',
              }}
              className="me-2"
            />
          </Link>

          {/* Toggler for Mobile View */}
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            {/* Scrolling Text Section */}

            <div className="mx-auto scrolling-text-container ">
              <p className="scrolling-text">
                <span style={{ color: 'red' }}>ओझा ब्रदर्स</span> में आपका
                स्वागत है! अब कार बुकिंग और ट्रक लोडिंग हुई आसान। सबसे बेहतर
                सेवाएँ और शानदार ऑफ़र पाएँ। अभी कॉल करें! 📞 +91-9838875119
              </p>
            </div>
            {/* Navigation Links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/home"
                  onClick={handleNavLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ borderColor: 'white' }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/carbookingservices"
                      onClick={handleNavLinkClick}
                    >
                      Car Booking Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/truckloadingservices"
                      onClick={handleNavLinkClick}
                    >
                      Truck Loading Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={handleNavLinkClick}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contactus"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>{' '}
    </>
  )
}

export default NavbarComponents
