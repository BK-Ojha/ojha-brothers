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

const fadeSlideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(25rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const AnimatedHeading1 = styled.h1`
  animation: ${({ inView }) => (inView ? fadeSlideLeft : 'none')} 0.6s
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
const TruckData = ({
  featuresS,
  featuresM,
  featuresH,
  featuresR,
  featuresP,
  featuresA,
}) => {
  const location = useLocation()
  const TruckData = location.state // Retrieve truck data passed via navigation

  // Utility to safely get features
  const getFeatures = (features, fallbackFeatures) =>
    features && features.length > 0
      ? features
      : fallbackFeatures && fallbackFeatures.length > 0
      ? fallbackFeatures
      : []
  const smallTruckFeatures = getFeatures(featuresS, TruckData?.featuresS)
  const mediumTruckFeatures = getFeatures(featuresM, TruckData?.featuresM)
  const heavyTruckFeatures = getFeatures(featuresH, TruckData?.featuresH)
  const refrigeratedTruckFeatures = getFeatures(featuresR, TruckData?.featuresR)
  const parcelTruckFeatures = getFeatures(featuresP, TruckData?.featuresP)
  const agriculturalTruckFeatures = getFeatures(featuresA, TruckData?.featuresA)

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

  const [inView, setInView] = useState(false)
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

  const colors = ['black', 'red']
  const text1 = 'TRUCK SHOWCASE'

  return (
    <>
      <style>
        {`
           .feature-item::before {
              content: '•';  /* Adds a dot before each feature */
              margin-right: .5rem; /* Adjust the space between the dot and the feature */
              font-size: 1.2rem;  /* Optional: You can adjust the dot's size */
              color: black; /* You can change the color if you need */
            }
           .truck-data-container {
              padding: 20px;
              overflow-y: scroll !important;
            }       
          .truck-info {
            font-family: cursive;
            max-width: 600px;
            margin-top: -33rem;
            margin-left: 100px;
            width: 100%;
            // max-height:35rem;
            // background-color: aqua;
            padding: 15px;
              border-radius:50px 0 50px 0;
            box-shadow: 0 4px 10px black;
            max-height: 35rem; /* Set the height constraint for the scrollable area */
             overflow-y: auto;
            //  z-index: 10;
            position: relative;
              // overflow-y: scroll !important;
          }
          
          .truck-info h2 {
            text-align: center;
            margin-bottom: 20px;
          }
            // .toHide{   
              // overflow-y: auto !important; /* Enable vertical scrolling */
              // height: auto !important; 
              // margin-top: -2rem !important;
            // }

          .specifications, .performance {
            margin-bottom: 20px;
          }

          .specifications h3, .performance h3 {
            font-size: 1.2em;
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
          .truck-image {
            margin-left: 0 !important;
            margin-top: 10rem !important;
            width: 100% !important;
            height: 50% !important;          
          }
          .truck-info {
            margin-left: 2.7rem !important;
            margin-top: 1.7rem !important;
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
              .truckMobile{
           margin-left: 3rem !important;
            margin-top: 11rem !important;
            width: 87% !important;
            height: 45vh !important; 
          }
          }
        `}
      </style>

      <div>
        <span>
          {/* Animated Heading */}
          <AnimatedHeading2
            ref={headingRef}
            inTextView={inTextView}
            className="fw-bold filterColor"
          >
            {text1.split('').map((char, index) => (
              <span
                key={index}
                style={{ color: colors[index % colors.length] }}
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
        {/* Truck Image */}
        <div className="">
          <AnimatedHeading1 ref={headingRef} inView={inView} className="">
            <img
              className={`truck-image ${TruckData.className}`}
              src={TruckData.image}
              alt={TruckData.alt}
              d
              style={TruckData.style}
            />
          </AnimatedHeading1>
          ,
          <div className="toHide">
            <div className="truck-info ">
              <h2
                className="fw-bold"
                style={{
                  color: 'white',
                  letterSpacing: '5px',
                  textShadow: '0 4px 10px black',
                  transition: 'filter 0.3s ease',
                  animation: 'fadeSlideRight 1s ease-in-out',
                  fontSize: '25px',
                }}
              >
                {TruckData.alt}
              </h2>

              {/* Basic Specifications Section */}
              <div className="specifications scrollable">
                <h3
                  style={{
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    color: '#2b2d42',
                  }}
                >
                  Small Pickup Truck
                </h3>
                <ul>
                  <li>
                    <strong>लोड क्षमता : </strong> {TruckData.loadSCapacity}
                  </li>
                  <li>
                    <strong>सबसे उपयुक्त : </strong>{' '}
                  </li>

                  <ul style={{ marginLeft: '7rem' }}>
                    {smallTruckFeatures.length > 0 ? (
                      smallTruckFeatures.map((feature, index) => (
                        <li key={index} className="feature-item">
                          {feature}
                        </li>
                      ))
                    ) : (
                      <li>No features available</li>
                    )}
                  </ul>
                </ul>
                <h3
                  style={{
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    color: '#2b2d42',
                  }}
                >
                  Medium Goods Truck
                </h3>
                <ul>
                  <li>
                    <strong>लोड क्षमता : </strong> {TruckData.loadMCapacity}
                  </li>
                  <li>
                    <strong>सबसे उपयुक्त : </strong>{' '}
                  </li>
                  <ul style={{ marginLeft: '7rem' }}>
                    {mediumTruckFeatures.length > 0 ? (
                      mediumTruckFeatures.map((feature, index) => (
                        <li key={index} className="feature-item">
                          {feature}
                        </li>
                      ))
                    ) : (
                      <li>No features available</li>
                    )}
                  </ul>
                </ul>

                <h3
                  style={{
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    color: '#2b2d42',
                  }}
                >
                  Heavy Duty Truck
                </h3>
                <ul>
                  <li>
                    <strong>लोड क्षमता : </strong> {TruckData.loadHCapacity}
                  </li>
                  <li>
                    <strong>सबसे उपयुक्त : </strong>{' '}
                  </li>
                  <ul style={{ marginLeft: '7rem' }}>
                    {heavyTruckFeatures.length > 0 ? (
                      heavyTruckFeatures.map((feature, index) => (
                        <li key={index} className="feature-item">
                          {feature}
                        </li>
                      ))
                    ) : (
                      <li>No features available</li>
                    )}
                  </ul>
                </ul>

                <h3
                  style={{
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    color: '#2b2d42',
                  }}
                >
                  Refrigerated Duty Truck
                </h3>
                <ul>
                  <li>
                    <strong>लोड क्षमता : </strong> {TruckData.loadRCapacity}
                  </li>
                  <li>
                    <strong>सबसे उपयुक्त : </strong>{' '}
                  </li>
                  <ul style={{ marginLeft: '7rem' }}>
                    {refrigeratedTruckFeatures.length > 0 ? (
                      refrigeratedTruckFeatures.map((feature, index) => (
                        <li key={index} className="feature-item">
                          {feature}
                        </li>
                      ))
                    ) : (
                      <li>No features available</li>
                    )}
                  </ul>
                </ul>

                <h3
                  style={{
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    color: '#2b2d42',
                  }}
                >
                  Parcel Delivery Van
                </h3>
                <ul>
                  <li>
                    <strong>लोड क्षमता : </strong> {TruckData.loadPCapacity}
                  </li>
                  <li>
                    <strong>सबसे उपयुक्त : </strong>{' '}
                  </li>
                  <ul style={{ marginLeft: '7rem' }}>
                    {parcelTruckFeatures.length > 0 ? (
                      parcelTruckFeatures.map((feature, index) => (
                        <li key={index} className="feature-item">
                          {feature}
                        </li>
                      ))
                    ) : (
                      <li>No features available</li>
                    )}
                  </ul>
                </ul>

                <h3
                  style={{
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    color: '#2b2d42',
                  }}
                >
                  Agricultural Truck
                </h3>
                <ul>
                  <li>
                    <strong>लोड क्षमता : </strong> {TruckData.loadACapacity}
                  </li>
                  <li>
                    <strong>सबसे उपयुक्त : </strong>{' '}
                  </li>
                  <ul style={{ marginLeft: '7rem' }}>
                    {agriculturalTruckFeatures.length > 0 ? (
                      agriculturalTruckFeatures.map((feature, index) => (
                        <li key={index} className="feature-item">
                          {feature}
                        </li>
                      ))
                    ) : (
                      <li>No features available</li>
                    )}
                  </ul>
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

export default TruckData
