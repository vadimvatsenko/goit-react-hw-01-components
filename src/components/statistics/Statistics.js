import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import getRandomHexColor from '../utils/randomColor'

export default function Statistics({id, label, percentage}) {
  return (
    <li
      key={id}
      className={style.item}
      style={{ backgroundColor: getRandomHexColor() }}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage + '%'}</span>
    </li>
    
  );
}



// Statistics.propTypes = {
//   title: PropTypes.string,
//   statistics: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }).isRequired
//   ),
// };