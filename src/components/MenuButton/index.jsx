import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const MenuButton = React.forwardRef(({ open, onClick }, ref) => (
  <button ref={ref} type="button" className={styles['hamburger-menu']} onClick={onClick}>
    <svg
      version="1.1"
      id="hamburger_menu"
      className={classNames({ [styles.open]: open }, styles['hamburger-menu-icon'])}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="40px"
      height="35px"
      viewBox="0 0 40 35"
      enableBackground="new 0 0 40 35"
      xmlSpace="preserve"
    >
      <path
        fill="#FFFFFF"
        d="M40,2.5C40,3.881,38.881,5,37.5,5h-35C1.119,5,0,3.881,0,2.5l0,0C0,1.119,1.119,0,2.5,0h35 C38.881,0,40,1.119,40,2.5L40,2.5z"
      />
      <path
        fill="#FFFFFF"
        d="M40,17.5c0,1.381-1.119,2.5-2.5,2.5h-35C1.119,20,0,18.881,0,17.5l0,0C0,16.119,1.119,15,2.5,15h35 C38.881,15,40,16.119,40,17.5L40,17.5z"
      />
      <path
        fill="#FFFFFF"
        d="M40,32.5c0,1.381-1.119,2.5-2.5,2.5h-35C1.119,35,0,33.881,0,32.5l0,0C0,31.119,1.119,30,2.5,30h35	C38.881,30,40,31.119,40,32.5L40,32.5z"
      />
    </svg>
  </button>
));

MenuButton.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
