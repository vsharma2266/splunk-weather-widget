import PropTypes from 'prop-types';
import './styles/Temperature.scss';
import {kelvin2CAndF} from '../utils/temperature';
import {scales} from '../common/constants';

const Temperature = ({temp, onClickScale, currentScale}) => {
  if (!temp) {
    return null;
  }
  const {[scales.celsius]: inC, [[scales.fahrenheit]]: inF} = kelvin2CAndF(temp);

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

Temperature.propTypes = {
  currentScale: PropTypes.array,
  onClickScale: PropTypes.func,
  temp: PropTypes.number
};

export default Temperature;
