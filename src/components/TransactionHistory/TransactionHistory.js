import PropTypes from "prop-types";
import s from "./TransitionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead>
        <tr className={s.row}>
          <th className={s.head}>Type</th>
          <th className={s.head}>Amount</th>
          <th className={s.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={s.row} key={item.id}>
            <td className={s.cell}>{item.type}</td>
            <td className={s.cell}>{item.amount}</td>
            <td className={s.cell}>{item.currency}</td>
          </tr>
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
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
