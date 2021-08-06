import PropTypes from "prop-types";
import Friend from "../Friend/Friend";
import s from "./FriendsList.module.css";

function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((item) => (
        <li key={item.id}>
          <Friend
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
