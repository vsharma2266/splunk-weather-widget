import './styles/Temperature.scss';
import {useEffect, useState} from 'react';

const Temperature = ({temp}) => {
  const scales = {celsius: 'C', fahrenheit: 'F'};
  const [currentScale, setScale] = useState([scales.celsius, scales.fahrenheit]);
  if (!temp) {
    return null;
  }
  const inF = (temp - 273.15) * 1.8 + 32;
  const inC = temp - 273.15;

  function onClickScale(e) {
    e.preventDefault();
    setScale([currentScale[1], currentScale[0]]);
  }

  function linkOrText(scale) {
    if (scale !== currentScale[0]) {
      return (
        <a
          aria-label={`Switch to ${
            currentScale[0] !== scales.celsius ? 'celsius' : 'fahrenheit'
          } scale.`}
          role='button'
          href='/'
          onClick={onClickScale}>
          °{scale}
        </a>
      );
    } else {
      return <div>°{scale}</div>;
    }
  }

  return (
    <div className='temp-container'>
      <div className='temp-number'>
        {Math.floor(currentScale[0] === scales.celsius ? inC : inF)}
      </div>
      <div className='temp-scale'>
        <div>{linkOrText(scales.celsius)}</div>
        <div className='temp-divider'>|</div>
        <div>{linkOrText(scales.fahrenheit)}</div>
      </div>
    </div>
  );
};

export default Temperature;
