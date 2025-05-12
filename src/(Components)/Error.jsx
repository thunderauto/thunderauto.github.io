import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

export default function ErrorPage() {
  const navigate = useNavigate();
  const [animationState, setAnimationState] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Animation cycle for main elements
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState(prev => (prev + 1) % 4);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col overflow-hidden relative">
      {/* Header - matching the Thunder website */}
     
      <Navbar />
 
      {/* Main content with error message */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left side with lift animation */}
              <div className="w-full lg:w-1/2">
                <div className={`transition-all duration-1000 transform ${
                  animationState === 0 ? 'translate-y-0' :
                  animationState === 1 ? 'translate-y-3' : 
                  animationState === 2 ? 'translate-y-1' :
                  'translate-y-2'
                }`}>
                  {/* Vehicle lift animation */}
                  <div className="relative w-full h-80 mx-auto">
                    {/* 404 text */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <h1 className="text-8xl font-bold text-gray-800">404</h1>
                    </div>
                    
                    {/* Lift platform - ProfiMaster style */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 z-10">
                      {/* Base structure */}
                      <div className="h-6 w-full bg-gray-800 rounded-t"></div>
                      
                      {/* Lift columns - orange-red like the Thunder branding */}
                      <div className="flex justify-between px-4 relative">
                        <div className="w-6 bg-orange-500 rounded-b"
                          style={{ 
                            height: `${80 + (animationState * 10)}px`,
                            transition: 'height 1.5s ease-in-out'
                          }}
                        >
                          <div className="h-full w-1 bg-orange-600 ml-1"></div>
                        </div>
                        <div className="w-6 bg-orange-500 rounded-b"
                          style={{ 
                            height: `${80 + (animationState * 10)}px`,
                            transition: 'height 1.5s ease-in-out'
                          }}
                        >
                          <div className="h-full w-1 bg-orange-600 ml-1"></div>
                        </div>
                      </div>
                      
                      {/* Lift platform */}
                      <div 
                        className="h-4 w-48 bg-orange-500 mx-auto relative -mt-4 rounded flex items-center justify-center transition-all duration-1500 ease-in-out"
                        style={{ 
                          transform: `translateY(${-80 - (animationState * 10)}px)`,
                        }}
                      >
                        <div className="text-xs font-bold text-white">PROFIMASTER</div>
                      </div>
                      
                      {/* Simplified vehicle */}
                      <div 
                        className="w-40 h-16 mx-auto relative transition-all duration-1500 ease-in-out"
                        style={{ 
                          transform: `translateY(${-100 - (animationState * 10)}px)`,
                        }}
                      >
                        <div className="absolute w-full h-6 bottom-0 bg-gray-400 rounded"></div>
                        <div className="absolute w-28 h-10 bottom-5 left-6 bg-gray-500 rounded-t"></div>
                        <div className="absolute w-6 h-4 rounded-full bg-gray-800 bottom-0 left-4"></div>
                        <div className="absolute w-6 h-4 rounded-full bg-gray-800 bottom-0 right-4"></div>
                        <div className="absolute w-8 h-4 bg-blue-200 opacity-80 top-1 left-8 rounded"></div>
                        <div className="absolute w-8 h-4 bg-blue-200 opacity-80 top-1 right-8 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fall back to standard error image if needed */}
                <div className="mt-6 text-center">
                  <img 
                    src="/Gif/Error.gif" 
                    alt="404 Error" 
                    className="w-full max-w-xs h-auto object-contain mx-auto"
                  />
                </div>
              </div>
              
              {/* Right side content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="border-l-4 border-orange-500 pl-4 mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Page Not Found
                  </h2>
                  <p className="text-orange-500 text-xl">Error 404</p>
                </div>
                
                <div className="mt-4 text-gray-700">
                  <p className="text-lg mb-6">
                    Experience a seamless journey back to our main site. This page seems to have
                    been lifted out of our system. With Thunder's efficiency and precision, we can
                    guarantee you'll find what you're looking for on our main page.
                  </p>
                  <p className="text-lg mb-8">
                    Embrace innovation and elevate your browsing experience today.
                  </p>
                </div>
                
                {/* Action buttons styled like the Thunder website */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => navigate('/')}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`bg-black text-white font-bold py-3 px-8 rounded transition-all duration-300 ${
                      isHovering ? 'transform -translate-y-1 shadow-lg' : 'shadow-md'
                    }`}
                  >
                    Return Home
                  </button>
                  
                  <button 
                    onClick={() => navigate('/contact')}
                    className="bg-white border-2 border-orange-500 text-orange-500 font-bold py-3 px-8 rounded hover:bg-orange-50 transition-all duration-300"
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features section - like on the main page */}
          <div className="mt-12 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Browse Products</h3>
              <p className="text-gray-600 text-center">Explore our full range of vehicle lifting solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Download Brochures</h3>
              <p className="text-gray-600 text-center">Get detailed information about our products</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Support</h3>
              <p className="text-gray-600 text-center">Get help with product installation and operation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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