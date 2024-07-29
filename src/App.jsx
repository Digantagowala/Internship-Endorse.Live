
import React, { useState } from 'react';
import Form from './Form';
import Feedback2 from './Feedback2';
import Feedback3 from './Feedback3';
import Submitv from './Submitv';
import './index.css'; 

const App = () => {
  const [currentView, setCurrentView] = useState('form'); 

  
  const handleNext = () => {
    if (currentView === 'form') setCurrentView('feedback2');
    else if (currentView === 'feedback2') setCurrentView('feedback3');
    else if (currentView === 'feedback3') setCurrentView('submitv');
  };

  const handlePrevious = () => {
    if (currentView === 'submitv') setCurrentView('feedback3');
    else if (currentView === 'feedback3') setCurrentView('feedback2');
    else if (currentView === 'feedback2') setCurrentView('form');
  };

  return (
    <div className="App">
      {currentView === 'form' && <Form onNext={handleNext} />}
      {currentView === 'feedback2' && <Feedback2 onNext={handleNext} onPrevious={handlePrevious} />}
      {currentView === 'feedback3' && <Feedback3 onNext={handleNext} onPrevious={handlePrevious} />}
      {currentView === 'submitv' && <Submitv />}
    </div>
  );
};

export default App;
