import Profile from './Profile';
import PropTypes from 'prop-types'

export default function ProfileList({ user }) {
  // console.log(user)

  const { username, tag, location, avatar, stats } = user
  
  return (
    
  <Profile
  username={username}
  tag={tag}
  location={location}
  avatar={avatar}
  stats={stats}
    />
  )
}



// ProfileList.propTypes = {
//   user: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired
//   })),
// }