import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({
    avatar,
    name,
    isOnline
}) => {

    // Generate Random Color
    const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    };

    return (
        <li className={css.FriendListItem}>
            <span className={isOnline ? css.online : css.offline}></span> 
            <img className={css.avatar}
                style={{ backgroundColor: generateRandomColor() }} 
                src={avatar}
                alt="User Avatar"
                width="100" />
            <p ClassName={css.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};