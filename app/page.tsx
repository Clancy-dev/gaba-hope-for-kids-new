"use client"
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center bg-white text-black p-4 overflow-hidden">
      {/* The Background */}
      <div className="absolute inset-0 bg-white -z-10 flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-red-100/10 via-yellow-100/10 via-gray-100/10 via-cyan-100/10 to-orange-100/10 animate-scan-lines opacity-30 -z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-100/10 via-yellow-100/10 via-gray-100/10 via-cyan-100/10 to-orange-100/10 animate-scan-lines opacity-30 -z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-100/10 via-yellow-100/10 via-gray-100/10 via-cyan-100/10 to-orange-100/10 animate-scan-lines opacity-30 -z-20"></div>
      </div>

      {/* The Error Message */}
      <div className="text-center z-10 relative">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-red-600 mb-5 animate-flicker shadow-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,1)] drop-shadow-[0_0_30px_rgba(255,0,0,1)] drop-shadow-[0_0_40px_rgba(255,0,0,1)] drop-shadow-[0_0_50px_rgba(255,0,0,1)]">
            CRITICAL ERROR 404
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono text-orange-500 shadow-orange-500 drop-shadow-[0_0_20px_rgba(255,140,0,1)] drop-shadow-[0_0_30px_rgba(255,140,0,1)] drop-shadow-[0_0_40px_rgba(255,140,0,1)]">
            FATAL SYSTEM FAILURE
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-mono text-orange-600 font-bold mt-5">
            DANGER: Catastrophic malfunction detected.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-gray-800 font-bold mt-5">
            <span className="font-roboto font-normal text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-600 via-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent inline-block pr-1">
              Google
            </span>
            : 
            <span className="text-pink-600 font-bold uppercase">
              WARNING: This website has been forcibly shut down due to critical security vulnerabilities and incomplete essential packages.
            </span>
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-pink-600 font-bold uppercase mt-5">
            URGENT: Failure to address these issues will result in permanent termination of this website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

