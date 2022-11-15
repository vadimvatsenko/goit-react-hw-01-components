import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import getRandomHexColor from '../utils/randomColor'

export default function Statistics({ key, label, percentage }) {
  console.log(key)
  return (
    <li
      key={key}
      className={style.item}
      style={{ backgroundColor: getRandomHexColor() }}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage + '%'}</span>
    </li>
    
  );
}



// Statistics.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired
// };