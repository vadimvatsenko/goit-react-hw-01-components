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