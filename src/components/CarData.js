import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import WhatsappChat from './WhatsappChat'

const CarData = () => {
  const location = useLocation()
  const carData = location.state

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

             .xuvmobile{
            margin-top: 2rem !important;
            height: 53vh !important;    
            width:82vh !important;
            }
              .dheerucar, .blackScorpiomobile,
              .xaileshBoleromobile, .mamaBoleromobile{
            margin-top: 1rem !important;
            height: 53vh !important;  
            width:82vh !important;
            }
                    .shivakantScorpiomobile, .mausaBoleromobile{
            margin-top: 1rem !important;
            height: 55vh !important;  
            width:82vh !important;
            }

          .specifications, .performance {
            margin-bottom: 20px;
             margin-top: 30px;
          }

          .specifications h3, .performance h3 {
            font-size: 1.4em;
            color: #333;
            border-bottom: 2px solid #ccc;
            padding-bottom: 5px;
            margin-bottom: 10px;
          }

          ul {
            list-style: none;
            padding: 0;
          }

          ul li {
            padding: 5px 0;
            font-size: 1.1em;
            line-height: 1.6;
          }  
             @media (max-width: 768px) {
      .mobile-left-align {
        text-align: left !important;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .mobile-left-align h3, 
      .mobile-left-align ul {
        text-align: left !important;
      }

      .mobile-image {
        margin-left: 0 !important;
        width: 100% !important;
        max-width: 400px !important;
      }
    }
`}
      </style>
      <section className="our-vission py-5" style={{ marginTop: '7rem' }}>
        {/* Header Design */}
        <div
          className="vission-hr d-flex justify-content-center align-items-center gap-3"
          style={{ marginTop: '-2rem' }}
        >
          <hr
            style={{
              width: '5rem',
              height: '5px',
              backgroundColor: 'red',
              border: 'none',
            }}
          />
          <hr
            style={{
              width: '1rem',
              height: '1rem',
              backgroundColor: 'red',
              border: 'none',
              transform: 'rotate(135deg)',
            }}
          />
          <hr
            style={{
              width: '5rem',
              height: '5px',
              backgroundColor: 'red',
              border: 'none',
            }}
          />
        </div>

        {/* Title */}
        <h2
          className="text-center mb-4 fw-bold mb-4"
          data-aos="fade-up"
          style={{ letterSpacing: '2px', fontFamily: 'normal' }}
        >
          <span className="text-danger">CAR</span>{' '}
          <span className="text-success">SHOWCASE</span>
        </h2>

        {/* Car Details & Image */}
        <div
          className="container text-start d-flex flex-column flex-lg-row align-items-start justify-content-start gap-4"
          style={{ marginTop: '2rem' }}
        >
          <div>
            <div
              className="d-flex align-items-center justify-content-center bg-success"
              style={{
                height: '3rem',
                width: '100%',
                borderRadius: '0 50px 0 50px',
              }}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2
                data-aos="fade-up"
                data-aos-duration="1500"
                className="fw-bold text-center"
                style={{
                  letterSpacing: '2px',
                  fontSize: '24px',
                  color: 'white',
                  fontFamily: 'cursive',
                  textShadow: '0 4px 10px black',
                }}
              >
                {carData.alt}
              </h2>
            </div>

            {/* Basic Specifications */}
            <div
              className="specifications "
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h3 className="text-black" style={{ letterSpacing: '1px' }}>
                Basic Specifications
              </h3>
              <ul>
                <li>
                  <strong>Color:</strong> {carData.color}
                </li>
                <li>
                  <strong>Seating Capacity:</strong> {carData.seatingCapacity}
                </li>
                <li>
                  <strong>Air Conditioning:</strong> {carData.acType}
                </li>
                <li>
                  <strong>Transmission:</strong> {carData.transmission}
                </li>
              </ul>
            </div>

            {/* Engine and Performance */}
            <div
              className="performance"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h3 className="text-black" style={{ letterSpacing: '1px' }}>
                Engine and Performance
              </h3>
              <ul>
                <li>
                  <strong>Engine Details:</strong> {carData.engineDetails}
                </li>
                <li>
                  <strong>Mileage:</strong> {carData.mileage}
                </li>
                <li>
                  <strong>Top Speed and Acceleration:</strong>{' '}
                  {carData.performance}
                </li>
              </ul>
              <Link to="/contactus">
                <Button
                  variant="danger"
                  className="fw-bold mt-3"
                  style={{
                    letterSpacing: '2px',
                    textShadow: '0 4px 10px black',
                    fontSize: '20px',
                    width: '100%',
                    borderRadius: '0 50px 0 50px ',
                  }}
                >
                  Book Now!
                </Button>
              </Link>
            </div>

            {/* Booking Button */}
            <div></div>
          </div>

          {/* Car Image */}
          <img
            className={`car-image img-fluid ${carData.className}`}
            src={carData.url}
            alt={carData.alt}
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{
              width: '100%',
              maxWidth: '700px',
              borderRadius: '8px',
              // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>
      </section>
      <WhatsappChat />
    </>
  )
}

export default CarData
