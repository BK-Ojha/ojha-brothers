import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WhatsappChat from './WhatsappChat'

const CarData = () => {
  const TruckData = {
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
  }

  return (
    <>
      <style>
        {`
        /* Global Reset */
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
  
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }
  
        .specifications-container {
          width: 100%; /* Full width for mobile */
          padding: 0 15px; /* Add padding for better spacing */
        }
  
        .specifications, .performance {
          margin-bottom: 20px;
          margin-top: 30px;
          width: 100%;
        }
  
        .specifications h3, .performance h3 {
          font-size: 1.4em;
          color: #333;
          border-bottom: 2px solid #ccc;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
  
        .specifications ul {
          list-style-type: disc;
          padding-left: 40px;
        }
  
         .text-btn{
                      animation:blink-animation 2s infinite;
                      
                  }
                  @keyframes blink-animation{
                      0% {
                          opacity: 1; /* Fully visible */
                          color: white;
                        }
                        10% {
                          opacity: 0.5; /* Half transparent */
                          color: yellow;
                        }
                        100% {
                          opacity: 1; /* Fully visible */
                          color: white;
                        }
                  } 
        @media (max-width: 768px) {
          .mobile-left-align {
            text-align: left !important;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
          }
  
          .mobile-left-align h3, 
          .mobile-left-align ul {
            text-align: left !important;
            width: 100%;
          }
  
          .specifications-container {
            width: 100%;
            padding: 10px;
          }
  
          .content-section {
            width: 100%;
          }
  
          .mobile-image {
            width: 100% !important;
            max-width: 100% !important;
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
          <span className="text-danger">YOUR TRUCK</span>{' '}
          <span className="text-success">IS HERE !</span>
        </h2>

        <div
          className="container d-flex flex-column flex-lg-row gap-4"
          style={{ marginTop: '2rem' }}
        >
          <div className="container d-flex flex-column flex-lg-row gap-4 align-items-center specifications-container">
            {/* Left Content */}
            <div
              className="content-section"
              style={{ flex: 1, width: '100%' }}
              data-aos="fade-right"
              data-aos-duration="0"
            >
              {/* Heading Section - Fixed Height */}
              <div
                className="d-flex align-items-center justify-content-center bg-success"
                style={{ height: '3rem', width: '100%' }}
              >
                <h2
                  className="fw-bold text-center text-white"
                  style={{
                    letterSpacing: '2px',
                    fontFamily: 'cursive',
                    textShadow: '0 4px 10px black',
                  }}
                >
                  SPECIFICATIONS
                </h2>
              </div>

              {/* Specifications - Scrollable */}
              <div
                className="specifications"
                style={{
                  maxHeight: '400px',
                  overflowY: 'auto',
                  paddingRight: '10px',
                }}
              >
                <p
                  className="fw-bold text-danger"
                  style={{ textAlign: 'justify' }}
                >
                  ⚠️ नोट : ट्रक की लोडिंग क्षमता सामग्री (Material) के प्रकार,
                  वितरण स्थिति और मौसम परिस्थितियों पर निर्भर करती है। कृपया सही
                  ट्रक का चयन करने से पहले आवश्यक विवरण की पुष्टि करें।
                </p>

                <h3 className="text-black">
                  <strong>छोटे ट्रक : </strong> {TruckData.loadSCapacity}
                </h3>
                <ul>
                  {TruckData.featuresS.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3 className="text-black">
                  <strong>मध्यम ट्रक : </strong> {TruckData.loadMCapacity}
                </h3>
                <ul>
                  {TruckData.featuresM.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3 className="text-black">
                  <strong>भारी ट्रक : </strong> {TruckData.loadHCapacity}
                </h3>
                <ul>
                  {TruckData.featuresH.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3 className="text-black">
                  <strong>रेफ्रिजरेटेड ट्रक : </strong>{' '}
                  {TruckData.loadRCapacity}
                </h3>
                <ul>
                  {TruckData.featuresR.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3 className="text-black">
                  <strong>पार्सल ट्रक : </strong> {TruckData.loadPCapacity}
                </h3>
                <ul>
                  {TruckData.featuresP.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3 className="text-black">
                  <strong>कृषि ट्रक : </strong> {TruckData.loadACapacity}
                </h3>
                <ul>
                  {TruckData.featuresA.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  fontSize: '14px',
                  marginTop: '-1rem',
                  marginBottom: '-1.3rem',
                  color: 'blue',
                }}
              >
                <p>Please scroll down to see more specifications</p>
              </div>

              {/* Booking Button */}
              <Link to="/contactus">
                <Button
                  variant="danger"
                  className="fw-bold mt-3 w-100"
                  style={{
                    letterSpacing: '2px',
                    textShadow: '0 4px 10px black',
                    fontSize: '20px',
                    borderRadius: '0 50px 0 50px',
                    fontFamily: 'cursive',
                  }}
                >
                  <span className="text-btn">Book Now!</span>
                </Button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="image-section" style={{ flex: 1, width: '100%' }}>
              <img
                src="/my-truck2.png"
                alt="My Truck"
                data-aos="fade-left"
                data-aos-duration="1500"
                className="mobile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatsappChat />
    </>
  )
}

export default CarData
