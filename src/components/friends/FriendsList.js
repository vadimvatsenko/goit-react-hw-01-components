// import PropTypes from 'prop-types';
import style from './Friends.module.css'
import Friends from './Friends';

export default function FriendsList({ friends }) {
    return (
        <section>
        <ul className={style.list}>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <Friends
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                
                ))}
            </ul>
        </section>
    )
}

// FriendsList.propTypes = {
//     id: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     name: PropTypes.string.isRequired

// };