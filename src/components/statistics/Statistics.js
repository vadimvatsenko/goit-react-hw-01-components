import PropTypes from 'prop-types';
import style from './Statistics.module.css'

export default function Statistics(props) {

  const { id, label, percentage } = props;

  return (
    <section className={style.statistics}>
  <h2 className={style.title}>Upload stats</h2>

  <ul className={style.list}>
    <li className={style.item}>
      <span className={style.label}>.docx</span>
      <span className={style.percentage}>4%</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>.mp3</span>
      <span className={style.percentage}>14%</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>.pdf</span>
      <span className={style.percentage}>41%</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>.mp4</span>
      <span className={style.percentage}>12%</span>
    </li>
  </ul>
</section>
  )
}

//ПротоТипы, что бы проверять данные на тип isReq обязательный пропс
// Statistics.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,//pts
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,

// }