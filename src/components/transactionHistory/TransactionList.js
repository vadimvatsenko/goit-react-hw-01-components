import PropTypes from 'prop-types';


export default function TransactionList({ id, type, amount, currency }) {

    return (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}

// TransactionList.propTypes = {
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired
// }