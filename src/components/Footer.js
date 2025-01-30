import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import logo from './path-to-logo/logo.png' // Replace with the path to your logo file

const Footer = () => {
  return (
    <>
      <style>
        {`
          .social-icon {
        color: white;
        transition: color 0.3s ease, transform 0.3s ease;
      }
      .social-icon:hover {
        color: #ffc107; /* Yellow color on hover */
        transform: scale(1.2); /* Slight zoom effect on hover */
      }
      @media (max-width: 768px) {
        footer h2 {
         font-size: 1.2rem;
        }
        .social-icon {
          margin-right: 10px;
        }
      }
    `}
      </style>
      <footer
        className="text-white text-center text-lg-start"
        style={{
          textShadow: '0 4px 10px black',
          padding: '2rem 0',
          letterSpacing: '1px',
          backgroundColor: 'indigo',
        }}
      >
        <Container style={{ marginBottom: '5rem' }}>
          {/* Logo Section */}
          <Row className="mb-4" style={{ marginTop: '2rem' }}>
            <Col xs={12} className="text-center">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap', // Adjust for smaller screens
                  gap: '10px', // Spacing between items
                }}
              >
                <h2
                  data-aos="fade-up"
                  data-aos-delay="400"
                  style={{
                    fontWeight: 'bold',
                    letterSpacing: '6px',
                    fontStyle: 'normal',
                    margin: 0,
                    fontSize: '1.5rem', // Responsive font size
                  }}
                >
                  OJHA BROTHERS
                </h2>
                <Link to="/">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    src="/logo_icon2.jpg"
                    alt="Logo"
                    style={{
                      height: '80px',
                      width: '80px',
                      borderRadius: '50%',
                    }}
                  />
                </Link>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="400"
                  style={{
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    fontStyle: 'normal',
                    margin: 0,
                    fontSize: '1.5rem', // Responsive font size
                  }}
                >
                  HANUMAT KRIPA ROADLINES
                </h2>
              </div>
            </Col>
          </Row>

          <Row style={{ fontFamily: "'Pacifico', cursive" }}>
            {/* About Section */}
            <Col
              md={4}
              sm={12}
              className="mb-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <h5 className="fw-bold mb-3 text-start">About Us</h5>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: '2',
                  textAlign: 'justify',
                }}
              >
                At <strong>Ojha Brothers - Hanumat Kripa Roadlines</strong>, we
                strive to make your travel bookings seamless and hassle-free.
                From car bookings to truck loading services, we ensure a smooth
                experience every time.
              </p>
            </Col>

            {/* Quick Links Section */}
            <Col
              md={4}
              sm={12}
              className="mb-4"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <h5 className="fw-bold mb-3 text-start">Quick Links</h5>
              <ul className="list-unstyled text-start">
                <li className="mb-2">
                  <Link
                    to="/home"
                    className="footer-link"
                    style={{
                      textDecoration: 'none',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'yellow')}
                    onMouseLeave={(e) => (e.target.style.color = '#fff')}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/about"
                    className="footer-link"
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'yellow')}
                    onMouseLeave={(e) => (e.target.style.color = '#fff')}
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2 fw-bold">
                  <Link
                    to="/carbookingservices"
                    className="footer-link"
                    style={{
                      textDecoration: 'none',
                      color: '#fff',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'yellow')}
                    onMouseLeave={(e) => (e.target.style.color = '#fff')}
                  >
                    Car Booking Services
                  </Link>
                </li>
                <li className="fw-bold mb-2">
                  <Link
                    to="/truckloadingservices"
                    className="footer-link"
                    style={{
                      textDecoration: 'none',
                      color: '#fff',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'yellow')}
                    onMouseLeave={(e) => (e.target.style.color = '#fff')}
                  >
                    Truck Loading Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="footer-link"
                    style={{
                      textDecoration: 'none',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'yellow')}
                    onMouseLeave={(e) => (e.target.style.color = '#fff')}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Contact Section */}
            <Col
              md={4}
              sm={12}
              className="mb-4"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                }}
              >
                <span className="fw-bold">Address :</span> Mau, Chitrakoot,
                Uttar Pradesh
                <br />
                <span className="fw-bold">Email :</span>{' '}
                deepakojha6386@gmail.com
                <br />
                <span className="fw-bold">Phone :</span> 9838875119
              </p>
              <div className="mt-3">
                <h5 className="fw-bold mb-3">Follow us on</h5>
                <a
                  href="https://facebook.com/Deepakojha0982"
                  className="social-icon me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Messenger"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://wa.me/9838875119"
                  className="social-icon me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={30} />
                </a>
                <a
                  href="https://instagram.com/deepakojha9838"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
            </Col>
          </Row>

          {/* Footer Bottom Section */}
          <Row className="mt-4">
            <Col className="text-center">
              <p
                className="mb-1"
                style={{ fontSize: '0.9rem' }}
                data-aos="fade-left"
                data-aos-delay="0"
              >
                © {new Date().getFullYear()} Ojha Brothers - Hanumat Kripa
                Roadlines. All rights reserved.
              </p>
              <p
                className="mb-0 fw-bold"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                Managed & Developed by BAL KRISHNA OJHA
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
