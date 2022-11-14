import Profile from "./Profile";
import PropTypes from 'prop-types'

export default function ProfileList({ user }) {

    const {username, tag, location, avatar, stats: {followers, views, likes}} = user

    return (
        <Profile
        username = {username}
        tag = {tag}
        location = {location}
        avatar = {avatar}
        followers={followers}
        views={views}
        likes={likes}
        />
    );
}



// PaintingList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired
//   })),
// }