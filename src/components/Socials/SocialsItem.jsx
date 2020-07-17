import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

import styles from './styles.module.scss';

const SocialItem = ({ link, icon, className }) => (
  <li className={styles.socialsItem}>
    <a target="_blank" rel="noreferrer" href={link} className={styles.socialsLink}>
      <div className={cls(styles.socialsIcon, className)}>{icon}</div>
    </a>
  </li>
);

SocialItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SocialItem.defaultProps = {
  className: undefined,
};

export default SocialItem;
