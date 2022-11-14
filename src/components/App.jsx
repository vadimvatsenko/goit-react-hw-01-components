import ProfileList from "./user/ProfileList";
import StatisticsList from "./statistics/StatisticsList";
import FriendsList from './friends/FriendsList'
import TransactionHistory from './transactionHistory/TransactionHistory'
import user from "../json/user.json";
import data from "../json/data.json";
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';




export default function App() {
  return (
    <div>
      <ProfileList user={user} />
      <StatisticsList title="Upload stats" statistics={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>

  );
}




