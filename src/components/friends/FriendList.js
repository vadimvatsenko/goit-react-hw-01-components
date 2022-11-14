import PropTypes from 'prop-types';
import style from './Friends.module.css'

export default function FriendList({ friends }) {
    return (
        <section>
        <ul className={style.list}>
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

FriendList.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired

};