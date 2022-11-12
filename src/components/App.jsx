
import ProfileList from "./user/ProfileList";
import Statistics from "./statistics/StatisticsList";
import user from "../json/user.json";
import data from "../json/data.json";
// import Section from "./Section";

export default function App() {
  return (
    <div>
    <ProfileList user={user} />
      <Statistics statistics={data} />
  </div>

  )
}


