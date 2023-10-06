// In this code, we define a displayTextOverTime function that recursively appends
// characters to displayText with a delay using setTimeout. This avoids the need
// for clearInterval and setInterval. The characters are added one by one until the
// end of the textToDisplay string is reached.

import React, { useState, useEffect } from 'react';
import useStore from './store'

const TextDisplay = () => {
  const [displayText, setDisplayText] = useState('');
  const textData = [
  {
    text: "Safety glasses on.",
    duration: 100, // 3 seconds to display
    delay: 1, // 1-second delay before the next entry
  },
  {
    text: "By the end of this century, if emissions keep rising,",
    duration: 125,
    delay: 0.1,
  },
  {
    text: "the average temperature on Earth",
    duration: 120,
    delay: 0.1,
  },
  {
    text: "could go up another four to eight degrees.",
    duration: 100,
    delay: 0.2,
  },
  {
    text: "What I'm saying is the planet's on fucking fire!",
    duration: 270,
    delay: 0.3,
  },
  {
    text: "There are a lot of things we could do to put it out.",
    duration: 125,
    delay: 0.4,
  },
  {
    text: "Are any of them free?",
    duration: 75,
    delay: 0.2,
  },
  {
    text: "No, of course not!",
    duration: 75,
    delay: 0.2,
  },
  {
    text: "Nothing's free you idiots!",
    duration: 75,
    delay: 0.1,
  },
  {
    text: "Grow the fuck up!",
    duration: 100,
    delay: 0.1,
  },
  {
    text: "You're not children anymore.",
    duration: 100,
    delay: 0.2,
  },
  {
    text: "I didn't mind explaining photosynthesis to you when you were 12,",
    duration: 250,
    delay: 0.1,
  },
  {
    text: "but you're adults now, and this is an actual crisis!",
    duration: 175,
    delay: 0.4,
  },
  {
    text: "Got it?",
    duration: 50,
    delay: 0.4,
  },
  {
    text: "Safety glasses off, motherfuckers.",
    duration: 150,
    delay: 1,
  },
  {
    text: "Safety glasses off, motherfuckers.",
    duration: 150,
    delay: 100,
  },

];
const jsbs = 0.75
const [index, setIndex] = useState(0);
  const initialDelay = jsbs*1000;
  const init = useStore((state) => state.init);

  useEffect(() => {
    if (init&&(index+1) < textData.length) {

      const delayTimer = setTimeout(() => {
        displayTextOverTime(0);
      }, (jsbs*2*textData[index].delay * 1000));

      return () => {
        clearTimeout(delayTimer);
      };
    }

    function displayTextOverTime(currentIndex) {
      if (currentIndex < textData[index].text.length) {
        setDisplayText((prevText) => prevText + textData[index].text[currentIndex]);

        setTimeout(() => {
          displayTextOverTime(currentIndex + 1);
        }, jsbs*textData[index].duration*10/textData[index].text.length);
      } else {

        //console.log(index,textData.length);

        // Reset displayText for the next entry immediately before moving to the next index
          setTimeout(() => {
              if ((index+1) < textData.length){
                const nextIndex = (index + 1) % textData.length; // Move to the next index cyclically
                setIndex(nextIndex);
                setDisplayText(''); // Reset displayText for the next entry
              }

          }, jsbs*textData[index].delay * 1000);
        }

    }
  }, [init, initialDelay, index, textData]);

    if(init){
    return (
      <div className="textbox">
        <div className = "text">
          <div className="inner-text">
            {displayText}
          </div>
        </div>
        <div className="triangle">
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <path d="M 21 33 Q 69 79 110 11 Q 121 128 21 126 Z" fill="none"  />
        </svg>
        </div>
      </div>

    );
  }
};

export default TextDisplay;
