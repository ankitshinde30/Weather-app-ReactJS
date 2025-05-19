import React, { useState } from 'react';
import Weather from './components/Weather';

const App = () => {
  const [bgClass, setBgClass] = useState("default");

  return (
    <div className={`app ${bgClass}`}>
      <Weather setBgClass={setBgClass} />
    </div>
  );
};

export default App;
