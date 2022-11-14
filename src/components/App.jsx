
import Profile from "./user/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from './friends/FriendList'
import TransactionHistory from './transactionHistory/TransactionHistory'
import user from "../json/user.json";
import data from "../json/data.json";
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';


console.log(friends)

export default function App() {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" statistics={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;

      
      
  </div>

  )
}



