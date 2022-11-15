// DONE
import PropTypes from 'prop-types';
import style from './Transaction.module.css'
import TransactionHead from './TransactionHead';
import TransactionList from './TransactionList';

export default function TransactionHistory({ items }) {
  return (

    <table className={style.history}>
      <TransactionHead/>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          
          <TransactionList
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    }).isRequired
  )

};

