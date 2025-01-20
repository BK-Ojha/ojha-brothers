import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
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
  animation: ${({ inTextView }) => (inTextView ? fadeSlideRight : 'none')} 0.6s
    ease-in-out;
  font-family: cursive;
  color: #333;
  letter-spacing: 5px;
  line-height: 0.3;
  text-shadow: 0 4px 5px gray;
  text-align: center;
  margin-top: 11rem;
  margin-bottom: -9rem;
  transition: filter 0.3s ease;
  textalign: 'center';
`

const CarData = () => {
  const location = useLocation()
  const carData = location.state
  const [inTextView, setInTextView] = useState(false)
  const headingRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInTextView(true)
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
  const colors = ['black', 'red']
  const text1 = 'CAR SHOWCASE'

  return (
    <>
      <style>
        {`
      /* General styling for the car data container */
            .car-data-container {
              padding: 20px;
            }
            
          .car-info {
            font-family: cursive;
            max-width: 600px;
            margin-top: -33rem;
            margin-left: 100px;
            width: 100%;
            // background-color: aqua;
            padding: 20px;
              border-radius:50px 0 50px 0;
            box-shadow: 0 4px 10px black;
          }

          .car-info h2 {
            text-align: center;
            margin-bottom: 20px;
          }

          .specifications, .performance {
            margin-bottom: 20px;
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

          ul li strong {
            font-weight: bold;
          }

          /* Responsive Design */
          @media (max-width: 768px) {

          .hrLine{
          display:none;
          }
          
          .filterColor{
                margin-top:9rem !important;
          }
          .car-image {
            margin-left: 0 !important;
            margin-top: 10rem !important;
            width: 100% !important;
            height: 50% !important;          
          }
          .car-info {
            margin-left: 2.7rem !important;
            margin-top: 1rem !important;
            height: 30vh !important; 
            font-size:14px !important;
            overflow-y: scroll !important;
              margin-bottom:1rem !important;
          }
          .toHide{   
              overflow-y: scroll !important; /* Enable vertical scrolling */
              height: auto !important; 
              margin-top: -2rem !important;
            }
      
            .xuvmobile{
           margin-left: 6rem !important;
            margin-top: 10rem !important;
            width: 70% !important;
            height: 47vh !important;  
            }

            .blackScorpiomobile{
           margin-left: 2rem !important;
            margin-top: 11rem !important;
            width: 90% !important;
            height: 45vh !important;  
            }
            .xaileshBoleromobile{
           margin-left: 0rem !important;
            margin-top: 11rem !important;
            width: 87% !important;
            height: 45vh !important; 
            }
            .mamaBoleromobile{
           margin-left: 7rem !important;
            margin-top: 11rem !important;
            width: 70% !important;
            height: 45vh !important;
            }
          .mausaBoleromobile{
           margin-left: 0rem !important;
            margin-top: 11rem !important;
            width: 87% !important;
            height: 45vh !important; 
          }
}
`}
      </style>
      <div>
        <span>
          <AnimatedHeading2
            ref={headingRef}
            inTextView={inTextView}
            className="fw-bold filterColor"
          >
            {text1.split('').map((char, index) => (
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
        </span>
        <hr
          className="hrLine"
          style={{
            backgroundColor: 'white',
            opacity: '1',
            // color: 'gray', // Ensures the HR has a visible color
            height: '8px', // Adjust for desired thickness
            transform: 'rotate(90deg)', // Rotates the HR
            width: '450px', // Adjust length
            // margin: '0', // Removes default margins
            position: 'fixed', // Allows precise positioning
            top: '59%', // Adjust top position
            left: '33%', // Adjust left position
            // transform: 'translate(-50%, -50%) rotate(90deg)',
            border: 'none',
            boxShadow: '0 4px 10px black',
          }}
        />
        {/* <h1>{carData.alt} </h1> */}
        <div className="">
          <div className="">
            <img
              className={`car-image ${carData.className}`}
              src={carData.url}
              alt={carData.alt}
              style={carData.style}
            />
          </div>
          ,
          <div className="toHide">
            <div className="car-info ">
              <h2
                className="fw-bold"
                style={{
                  color: 'white',
                  letterSpacing: '5px',
                  textShadow: '0 4px 10px black',
                  transition: 'filter 0.3s ease',
                  animation: 'fadeSlideRight 1s ease-in-out',
                }}
              >
                {carData.alt}
              </h2>

              {/* Basic Specifications Section */}
              <div className="specifications">
                <h3 style={{ letterSpacing: '1px' }}>Basic Specifications</h3>
                <ul>
                  {' '}
                  <li>
                    <strong>Color :</strong> {carData.color}
                  </li>
                  <li>
                    <strong>Seating Capacity :</strong>{' '}
                    {carData.seatingCapacity}
                  </li>
                  <li>
                    <strong>Air Conditioning :</strong> {carData.acType}
                  </li>
                  <li>
                    <strong>Transmission :</strong> {carData.transmission}
                  </li>
                </ul>
              </div>

              {/* Engine and Performance Section */}
              <div className="performance">
                <h3 style={{ letterSpacing: '1px' }}>Engine and Performance</h3>
                <ul>
                  <li>
                    <strong>Engine Details :</strong> {carData.engineDetails}
                  </li>
                  <li>
                    <strong>Mileage :</strong> {carData.mileage}
                  </li>
                  <li>
                    <strong>Top Speed and Acceleration :</strong>{' '}
                    {carData.performance}
                  </li>
                </ul>
              </div>
              <Link to="/contactus">
                <Button
                  variant="outline-danger"
                  className="fw-bold"
                  style={{
                    letterSpacing: '2px',
                  }}
                >
                  Book now!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <WhatsappChat />
    </>
  )
}

export default CarData
