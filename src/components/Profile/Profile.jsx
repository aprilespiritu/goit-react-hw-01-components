import PropTypes from 'prop-types';


export const Profile = ({ username, tag, locations, avatar, stats }) => {
  return (
      <div className={css.profile}>
          <div className={css.description}>
              <img src={avatar} alt="User Avatar" className={css.avatar} />
              <p className={css.name}>{username}</p>
              <p className={css.userInfo}>@{tag}</p>
              <p className={css.userInfo}>{location}</p>
          </div>

          <ul className={css.stats}>
              <li className={css.item}>
                  <span className={css.label}>Followers</span>
              </li>
          </ul>
      </div>
  )
}
