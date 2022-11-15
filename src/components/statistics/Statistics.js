//DONE
import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import getRandomHexColor from '../utils/randomColor'

export default function Statistics({ label, percentage }) {

  return (
    <li
      className={style.item}
      style={{ backgroundColor: getRandomHexColor() }}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage + '%'}</span>
    </li>
    
  );
}



Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};