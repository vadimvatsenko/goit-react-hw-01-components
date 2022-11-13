import PropTypes from 'prop-types';
import style from './Friends.module.css'

export default function FriendList({ friends }) {

    return (
        <section>
        <ul>
            {friends.map(f => (
                <li key={f.id } className={style.item}>
                    <span className={f.isOnline ? style.online : style.offline}></span>
                    <img className={style.avatar} src={f.avatar} alt={f.name} width="48" />
                    <p className={style.name}>{f.name}</p>
                </li>
            ))}
            </ul>
        </section>
    )
}

// FriendList.propTypes = {
//   title: PropTypes.string,
//   statistics: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }).isRequired
//   ),
// };