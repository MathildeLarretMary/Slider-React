import { useState } from 'react';
import data from '../data';
import './Slider.css';

/**
 * Slider component for navigating through a set of images.
 * @function Slider
 * @default
 * @exports {function} Slider
 * @returns {JSX.Element} Slider component JSX
 */
export default function Slider() {
    // state of index on data array
    const [num, setNum] = useState(0);
  
    /**
     * Handles the click event for the left arrow button.
     * @function handleClickLeft
     * @memberof Slider
     * @returns {void}
     */
    const handleClickLeft = () => {
      if (num === 0) {
        setNum(data.length - 1);
      } else {
        setNum(num - 1);
      }
    };
  
    /**
     * Handles the click event for the right arrow button.
     * @function handleClickRight
     * @memberof Slider
     * @returns {void}
     */
    const handleClickRight = () => {
      if (num >= data.length - 1) {
        setNum(0);
      } else {
        setNum(num + 1);
      }
    };
  
    return (
      /**
       * Slider component JSX.
       * @memberof Slider
       * @type {JSX.Element}
       */
      <div className="Slider">
        <button onClick={handleClickLeft}>←</button>
        {/* pas besoin de /public dans src */}
        <img
          src={`/images/${data[num].name}.jpg`}
          alt={data[num].name}
          id={data[num].id}
        ></img>
        <button onClick={handleClickRight}>→</button>
      </div>
    );
  }