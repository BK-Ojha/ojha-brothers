import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#2b2d42',
        color: '#fff',
        padding: '2rem 0',
        fontFamily: "'Pacifico', cursive",
      }}
    >
      <Container>
        <Row className="text-center text-lg-start">
          {/* About Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              About Us
            </h5>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#ddd' }}>
              At *Ojha Brothers - Hanumat Kripa*, we strive to make your travel
              bookings seamless and hassle-free. From flights to accommodations,
              our expertise ensures a memorable experience every time.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Quick Links
            </h5>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/" style={{ color: '#ddd', textDecoration: 'none' }}>
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="/about"
                  style={{ color: '#ddd', textDecoration: 'none' }}
                >
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="/services"
                  style={{ color: '#ddd', textDecoration: 'none' }}
                >
                  Services
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="/contact"
                  style={{ color: '#ddd', textDecoration: 'none' }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact & Social Section */}
          <Col md={4}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Contact Us
            </h5>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#ddd' }}>
              1234 Travel Street, Adventure City
              <br />
              Email: support@ojhabrothers.com
              <br />
              Phone: +123-456-7890
            </p>
            <div>
              <a
                href="https://facebook.com"
                style={{
                  color: '#fff',
                  marginRight: '1rem',
                  fontSize: '1.2rem',
                }}
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                style={{
                  color: '#fff',
                  marginRight: '1rem',
                  fontSize: '1.2rem',
                }}
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                style={{
                  color: '#fff',
                  marginRight: '1rem',
                  fontSize: '1.2rem',
                }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                style={{
                  color: '#fff',
                  fontSize: '1.2rem',
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '0' }}>
              © {new Date().getFullYear()} Ojha Brothers - Hanumat Kripa. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
