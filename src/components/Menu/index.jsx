/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSprings, animated } from 'react-spring';
import classNames from 'classnames';
import MenuButton from '../MenuButton';

import styles from './styles.module.scss';

const Menu = ({ menuList }) => {
  const [isOpen, setOpen] = useState(false);
  const menuBtnRef = useRef(null);

  const springs = useSprings(
    menuList.length,
    menuList.map((_, index) => ({
      opacity: isOpen ? 1 : 0,
      from: { opacity: 0 },
      delay: index * 200 + 1000,
      reset: true,
      config: { duration: 300 },
    })),
  );

  const onMenuBtnClick = () => {
    if (isOpen) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }

    setOpen(!isOpen);
  };

  return (
    <>
      <MenuButton ref={menuBtnRef} open={isOpen} onClick={onMenuBtnClick} />

      <div className={classNames(styles.pageMenuWrapper, { [styles.open]: isOpen })}>
        <ul className={styles.menu}>
          {springs.map((props, i) => {
            const item = menuList[i];
            return (
              <animated.li key={item.link} style={props} className={styles.menuItem}>
                <Link href={item.link}>
                  <a className={styles.menuLink}>{item.name}</a>
                </Link>
              </animated.li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

Menu.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Menu;
