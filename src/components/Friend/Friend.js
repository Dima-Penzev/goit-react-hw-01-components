import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.jpg'

function Friend({ avatar = defaultAvatar, name, isOnline }) {
  return (
    <div >
          <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
    </div>
  );
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default Friend;