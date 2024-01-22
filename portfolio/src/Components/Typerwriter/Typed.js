import React, { useState, useEffect } from 'react';
import 'C:/Users/utkar/Desktop/dont touch/pendrive/js/projects/portfolio/portfolio/src/index.css';

function Typed(props) {
  const textToType = props.message;
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < textToType.length) {
        setDisplayText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust the typing speed by changing the delay (in milliseconds)

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <div className="typewriter">
      {displayText}
    </div>
  );
}

export default Typed;
