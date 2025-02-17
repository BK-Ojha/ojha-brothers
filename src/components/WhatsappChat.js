import React, { useState } from 'react'

const WhatsappChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const phoneNumber = '9838875119'
  const message = 'Hello, I would like to inquire about your services!'

  return (
    <>
      <style>
        {`
          /* Floating Button */
          .whatsapp-button {
            position: fixed;
            bottom: 70px;
            left: 20px;
            z-index: 1000;
            background-color: #25d366;
            border-radius: 50%;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .whatsapp-button:hover {
            transform: scale(1.1);
          }
          .whatsapp-icon {
            width: 40px;
            height: 40px;
          }

          /* Chat Box */
          .chat-box {
            position: fixed;
            bottom: 80px;
            left: 20px;
            width: 320px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1001;
            font-family: Arial, sans-serif;
          }
          .chat-box-header {
            background-color: #25d366;
            color: white;
            padding: 10px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .chat-logo {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: white;
            padding: 2px;
          }
          .chat-title {
            flex: 1;
            font-size: 14px;
            font-weight: bold;
          }
          .chat-status {
            font-size: 12px;
            color: #d4f7d4;
          }
          .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
          }
          .chat-box-body {
            padding: 15px;
            font-size: 14px;
            color: #333;
          }
          .chat-box-body p {
            margin: 0;
            background-color: #d4f7d4;
            padding: 10px;
            border-radius: 8px;
          }
          .chat-box-footer {
            padding: 10px;
            text-align: center;
          }
          .chat-box-footer a {
            display: inline-block;
            background-color: #25d366;
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-size: 14px;
          }
          .chat-box-footer p {
            margin: 5px 0 0;
            font-size: 12px;
            color: #888;
          }
        `}
      </style>

      {/* WhatsApp Floating Button */}
      <div
        className="whatsapp-button"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          title="WhatsApp Us"
          className="whatsapp-icon"
        />
      </div>

      {/* WhatsApp Chat Box */}
      {isChatOpen && (
        <div
          className="chat-box mb-3"
          data-aos="fade-right"
          data-aos-delay="0"
          style={{
            boxShadow:
              '0 10px 25px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div className="chat-box-header">
            <img
              src="/logo_icon2.jpg"
              alt="Ojha Brothers"
              className="chat-logo"
            />
            <div className="chat-title">
              Ojha Brothers <br />
              <span className="chat-status">Online</span>
            </div>
            <button className="close-btn" onClick={() => setIsChatOpen(false)}>
              &times;
            </button>
          </div>
          <div className="chat-box-body">
            <p>Any questions related to Car Booking or Truck Loading?</p>
          </div>
          <div className="chat-box-footer">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Chat
            </a>
            <p>⚡ by Ojha Brothers</p>
          </div>
        </div>
      )}
    </>
  )
}

export default WhatsappChat
