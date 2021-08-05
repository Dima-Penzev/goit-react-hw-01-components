import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';

function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <li className="item" key={item.id}>
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
    }),
  ),
};

export default FriendsList;
