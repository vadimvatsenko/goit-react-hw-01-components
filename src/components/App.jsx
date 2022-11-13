
import ProfileList from "./user/ProfileList";
import Statistics from "./statistics/Statistics";
import FriendList from './friends/FriendList'
import user from "../json/user.json";
import data from "../json/data.json";
import friends from '../json/friends.json'


console.log(friends)

export default function App() {
  return (
    <div>
      <ProfileList user={user} />
      <Statistics title="Upload stats" statistics={data} />
      <FriendList friends={friends} />
      
      
  </div>

  )
}



