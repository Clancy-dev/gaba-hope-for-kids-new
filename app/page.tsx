import React from 'react';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="page-container">
      {/* The Background */}
      <div className="background">
        <div className="radio-lines"></div>
        <div className="radio-lines"></div>
        <div className="radio-lines"></div>
      </div>

      {/* The Error Message */}
      <div className="error-container">
        <div className="error-text">
          <h1>CRITICAL ERROR 404</h1>
          <h2>FATAL SYSTEM FAILURE</h2>
          <p className="warning">DANGER: Catastrophic malfunction detected.</p>
          <p>
            <span className="google">Google</span>: 
            <span className="alert">WARNING: This website has been forcibly shut down due to critical security vulnerabilities and incomplete essential packages.</span>
          </p>
          <p className="alert">URGENT: Failure to address these issues will result in permanent termination of this domain.</p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        .page-container {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          color: black;
          overflow: hidden;
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: white;
          z-index: -1;
          display: flex;
          flex-direction: column;
        }

        .radio-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(to bottom, 
            rgba(255, 0, 0, 0.1), 
            rgba(255, 255, 0, 0.1), 
            rgba(128, 128, 128, 0.1), 
            rgba(0, 255, 255, 0.1), 
            rgba(255, 165, 0, 0.1)
          );
          animation: scan-lines 2s infinite linear;
          opacity: 0.3;
          z-index: -2;
        }

        .error-container {
          text-align: center;
          z-index: 1;
          position: relative;
        }

        .error-text h1 {
          font-size: 5rem;
          font-family: 'Courier New', Courier, monospace;
          font-weight: bold;
          color: #ff0000;
          text-shadow: 
            0 0 20px #ff0000, 
            0 0 30px #ff0000, 
            0 0 40px #ff0000, 
            0 0 50px #ff0000;
          margin-bottom: 20px;
          animation: flicker 0.5s infinite alternate;
        }

        .error-text h2 {
          font-size: 3rem;
          font-family: 'Courier New', Courier, monospace;
          font-weight: bold;
          color: #ff8c00;
          text-shadow: 
            0 0 20px #ff8c00, 
            0 0 30px #ff8c00, 
            0 0 40px #ff8c00;
          animation: pulse 1s infinite alternate;
        }

        .error-text p {
          font-size: 1.5rem;
          font-family: 'Courier New', Courier, monospace;
          color: #333;
          font-weight: bold;
          margin-top: 20px;
        }

        .warning {
          color: #ff4500;
        }

        .alert {
          color: #ff1493;
          font-weight: bold;
          text-transform: uppercase;
        }

        .google {
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 2rem;
          background: linear-gradient(to right, #4285f4, #ea4335, #fbbc05, #34a853);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          padding-right: 5px;
        }

        @keyframes scan-lines {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }

        @keyframes flicker {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default Page;

