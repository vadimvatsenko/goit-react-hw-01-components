// import PropTypes from 'prop-types';
import style from './Friends.module.css'

export default function Friends({id,isOnline,avatar,name }) {
    return (
        <li key={id} className={style.item}>
            <span className={isOnline ? style.online : style.offline}></span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </li>
    );
}