import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import getRandomHexColor from '../utils/randomColor'

export default function Statistics({statistics, title}) {

  return (
    <section className={style.statistics}>
       {title && <h2 className={style.title}>{title.toUpperCase()}</h2>}
        <ul className={style.list}>
          {statistics.map(s =>(
            <li
              key={s.id}
              className={style.item}
              style={{ backgroundColor: getRandomHexColor() }}>
              <span className={style.label}>{s.label}</span>
              <span className={style.percentage}>{s.percentage + '%'}</span>
            </li>
          ))}
        </ul> 
      </section>
  )
}



Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};