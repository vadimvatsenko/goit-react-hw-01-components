import PropTypes from 'prop-types';
import style from './Transaction.module.css'

export default function TransactionHistory({ items }) {
    return (

<table className={style.history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(i => (
    <tr key={i.id}>
      <td>{i.type}</td>
      <td>{i.amount}</td>
      <td>{i.currency}</td>
    </tr>
   ))}
  </tbody>
</table>
    )
}


TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired

};