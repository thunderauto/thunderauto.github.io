import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  const [animationState, setAnimationState] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [gearRotation, setGearRotation] = useState(0);
  const [bounce, setBounce] = useState(false);
  const [shake, setShake] = useState(false);
  
  // Animation cycle for main elements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState(prev => (prev + 1) % 4);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Continuous gear rotation animation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setGearRotation(prev => (prev + 5) % 360);
    }, 50);
    
    return () => clearInterval(rotationInterval);
  }, []);

  // Bounce animation every 4 seconds
  useEffect(() => {
    const bounceInterval = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 500);
    }, 4000);
    
    return () => clearInterval(bounceInterval);
  }, []);

  // Shake animation every 7 seconds
  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 800);
    }, 7000);
    
    return () => clearInterval(shakeInterval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col overflow-hidden relative">
      {/* Main content with error message */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className={`bg-white rounded-lg shadow-lg p-8 md:p-12 transition-all duration-300 ${shake ? 'animate-pulse' : ''}`}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left side with enhanced animations */}
              <div className="w-full lg:w-1/2">
              <img 
                    src="/Gif/Error1.gif" 
                    alt="404 Error" 
                    className="w-full max-w-xs h-auto object-contain mx-auto"
                  />
              </div>
              
              {/* Right side content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className={`border-l-4 border-[#2d5f98] pl-4 mb-6 ${bounce ? 'animate-pulse' : ''}`}>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Page Not Found
                  </h2>
                  <p className={`text-[#2d5f98] text-xl transition-all duration-500 ${
                    animationState === 2 ? 'text-[#234872]' : 'text-[#2d5f98]'
                  }`}>Error 404</p>
                </div>
                
                <div className="mt-4 text-gray-700">
                  <p className="text-lg mb-6">
                    Experience a seamless journey back to our main site. This page seems to have
                    been lifted out of our system. With Thunder's efficiency and precision, we can
                    guarantee you'll find what you're looking for on our main page.
                  </p>
                  <p className={`text-lg mb-8 transition-all duration-300 ${shake ? 'font-semibold' : ''}`}>
                    Embrace innovation and elevate your browsing experience today.
                  </p>
                </div>
                
                {/* Action buttons with enhanced animations */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => navigate('/')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`bg-black text-white font-bold py-3 px-8 rounded transition-all duration-300 ${
                      isHovering ? 'transform -translate-y-1 shadow-lg bg-gray-800' : 'shadow-md'
                    } ${bounce ? 'animate-pulse' : ''}`}
                  >
                    Return Home
                  </button>
                  
                  <button 
                    onClick={() => navigate('/contact')}
                    className={`bg-white border-2 border-[#2d5f98] text-[#2d5f98] font-bold py-3 px-8 rounded transition-all duration-300 ${
                      isHovering ? 'bg-[#e3eaf3]' : ''
                    } ${shake ? 'animate-pulse' : ''}`}
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features section with hover animations */}
          <div className="mt-12 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 bg-[#e3eaf3] rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:bg-[#c7d6e9]">
                <svg className="w-6 h-6 text-[#2d5f98]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Browse Products</h3>
              <p className="text-gray-600 text-center">Explore our full range of vehicle lifting solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 bg-[#e3eaf3] rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:bg-[#c7d6e9]">
                <svg className="w-6 h-6 text-[#2d5f98]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Download Brochures</h3>
              <p className="text-gray-600 text-center">Get detailed information about our products</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 bg-[#e3eaf3] rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:bg-[#c7d6e9]">
                <svg className="w-6 h-6 text-[#2d5f98]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Support</h3>
              <p className="text-gray-600 text-center">Get help with product installation and operation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-12 h-12 bg-[#e3eaf3] rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:bg-[#c7d6e9]">
                <svg className="w-6 h-6 text-[#2d5f98]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Sales</h3>
              <p className="text-gray-600 text-center">Speak with our team about your requirements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}