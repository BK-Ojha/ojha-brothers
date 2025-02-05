import React, { useState, useEffect } from 'react'

const Welcome = ({ onFinish }) => {
  const [isMobile, setIsMobile] = useState(false)
  console.log(isMobile)

  // Function to check if the device is mobile based on window width
  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 768) // You can adjust this breakpoint as per your requirement
  }

  useEffect(() => {
    // Check the screen size initially
    checkMobileView()

    // Add event listener for window resize to dynamically update the view
    window.addEventListener('resize', checkMobileView)

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', checkMobileView)
    }
  }, [])

  const containerStyle = {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }

  return (
    <div style={containerStyle}>
      {/* Video for desktop view */}
      <video
        className="d-none d-md-block" // Show this video only on larger screens (desktop view)
        src="/welcome_video.mp4"
        autoPlay
        muted
        onEnded={onFinish}
        style={videoStyle}
      />

      {/* Video for mobile view */}
      <video
        className="d-md-none" // Show this video only on mobile screens
        src="/welcome_mobile_video.mp4"
        autoPlay
        muted
        onEnded={onFinish}
        style={videoStyle}
      />
    </div>
  )
}

export default Welcome
