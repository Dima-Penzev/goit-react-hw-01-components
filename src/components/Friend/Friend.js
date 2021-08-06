import PropTypes from "prop-types";
import defaultAvatar from "./defaultAvatar.jpg";
import s from "./Friend.module.css";

function Friend({ avatar = defaultAvatar, name, isOnline }) {
  return (
    <div className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
