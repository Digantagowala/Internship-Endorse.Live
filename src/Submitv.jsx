

import React from 'react';
import logo from './assets/Endorse-logo.svg';
import backgroundImage from './assets/Image/Bg.image.png';

const Submitv = () => {
  return (
    <div
      className="flex w-full min-h-screen flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
     
      <img src={logo} alt="Logo" className="absolute top-16 left-1/2 transform -translate-x-1/2 h-9 z-10" />
      <div className="relative z-10 p-10 w-96  bg-opacity-90 ">
        <h1 className="text-3xl font-bold text-center mb-4">
          Congratulations <span role="img" aria-label="party popper">🎉</span>
        </h1>
        <p className="text-center font-medium text-lg mb-6">
          Your response has been <br /> recorded <span role="img" aria-label="celebration">🥳🥳🥳</span>
        </p>
        <form className="space-y-6">
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="w-full px-4 py-3 text-lg border bg-gray-300 rounded-full "
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            className="w-full px-4 py-3 text-lg border bg-gray-300 rounded-full"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              className="w-4 h-4 text-blue-600 border-gray-300 bg-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
              I submit my consent to share this video
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-black rounded-full hover:bg-gray-800"
          >
            Submit Video
          </button>
        </form>
      </div>
    </div>
  );
};

export default Submitv;
