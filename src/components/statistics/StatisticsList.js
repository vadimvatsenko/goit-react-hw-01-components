import Statistics from './Statistics';
import PropTypes from 'prop-types'

export default function StatisticsList({ statistics }) {
  // console.log(user)

  const { id, label, percentage,  } = statistics
  
  return (
    
  <Statistics
  id={id}
  label={label}
  percentage={percentage}
 
    />
  )
}



// ProfileList.propTypes = {
//   user: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired
//   })),
// }