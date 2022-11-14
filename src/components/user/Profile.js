// import defaultImg from './default.webp'// импорт картинки по умолчанию
import PropTypes from 'prop-types';
import style from './Profile.module.css'

export default function Profile({user}) {

  const { username, tag, location, avatar, stats: { followers, views, likes } } = user;

  return (
    <section>
    <div className={style.profile}>
    <div className={style.description}>
    <img
      src={avatar}
      alt={username}
      className={style.avatar}
    />
    <p className={style.name}>{username}</p>
    <p className={style.tag}>{tag}</p>
    <p className={style.location}>{ location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.item}>
      <span className={style.label}>Followers </span>
          <span className={style.quantity}>{followers}</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>Views </span>
      <span className={style.quantity}>{views}</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>Likes </span>
      <span className={style.quantity}>{likes}</span>
    </li>
  </ul>
      </div>
      </section>
  )
}

//ПротоТипы, что бы проверять данные на тип isReq обязательный пропс
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,//pts
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,

}


