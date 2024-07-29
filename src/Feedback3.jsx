

import React from 'react';
import backgroundImage from './assets/Image/Bg.image.png';
import { FiUpload } from 'react-icons/fi';
import { FaVideo } from 'react-icons/fa';
import logo from './assets/Endorse-logo.svg';

const Feedback3 = ({ onNext, onPrevious }) => {
  return (
    <div className="flex flex-col bg-white items-center w-full justify-center bg-cover bg-center overflow-hidden min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={logo} alt="Logo" className="absolute top-12 left-1/2 transform -translate-x-1/2 m-4 h-9" />
      <div className="relative w-full flex flex-col items-center mt-17">
        <div className="w-full h-72 flex flex-col justify-center items-center mt-16">
          <div className="bg-opacity-90 w-full max-w-7xl flex flex-col justify-center items-center">
            <div className="flex justify-between items-start mb-10 w-full h-full">
              <div className="w-3/5 pr-4 flex flex-col justify-center h-full relative">
                <h2 className="text-lg font-semibold mb-1">Questions 3 / 3</h2>
                <h1 className="text-2xl font-bold mb-4">How was the training session?</h1>
                <p className="mb-2 font-bold text-gray-600">Tips :</p>
                <ul className="pl-1 pt-4">
                  <li className="mb-4 flex font-semibold items-center relative">
                    <div className="h-10 bg-black absolute left-2 top-2" style={{ width: '3px' }}></div>
                    <span className="w-4 h-4 bg-black text-white rounded-full flex items-center justify-center mr-2" style={{ zIndex: '1' }}>✓</span>
                    Pick a quiet and well-lit place
                  </li>
                  <li className="mb-4 flex font-medium items-center relative">
                    <div className="h-10 bg-black absolute left-2 top-2" style={{ width: '2px' }}></div>
                    <span className="w-4 h-4 bg-black text-white rounded-full flex items-center justify-center mr-2" style={{ zIndex: '1' }}>✓</span>
                    Relax & be yourself - it doesn't have to be perfect.
                  </li>
                  <li className="mb-4 flex font-semibold items-center relative">
                    <div className="bg-black absolute left-2 top-2" style={{ width: '2px' }}></div>
                    <span className="w-4 h-4 bg-black text-white rounded-full flex items-center justify-center mr-2" style={{ zIndex: '1' }}>✓</span>
                    You can redo your recording if you're not happy with it
                  </li>
                </ul>
                <div className="flex space-x-2 mt-20">
                  <button onClick={onPrevious} className="bg-black text-white py-1 px-1 rounded-md hover:bg-gray-800 transition-colors w-32">
                    Previous
                  </button>
                  <button onClick={onNext} className="bg-black text-white py-1 px-1 rounded-md hover:bg-gray-800 transition-colors w-32">
                    Next
                  </button>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-2xl w-1/3 ml-4 flex flex-col justify-center items-center h-96">
                <h2 className="text-xl font-normal mb-16">I want to</h2>
                <div className="flex space-x-8">
                  <div className="flex flex-col items-center">
                    <button className="bg-white border-r-2 border-l-2 border-b-2 shadow-lg flex items-center justify-center h-20 py-2 px-4 w-20 rounded-lg transition-colors">
                      <FiUpload className="text-2xl text-black" />
                    </button>
                    <p className="text-black font-bold mt-2">Upload</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="bg-white border-r-2 border-l-2 border-b-2 shadow-lg flex items-center justify-center py-2 px-4 w-20 h-20 rounded-lg transition-colors">
                      <FaVideo className="text-2xl text-black" />
                    </button>
                    <p className="text-black font-bold mt-2">Record</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default Feedback3;
