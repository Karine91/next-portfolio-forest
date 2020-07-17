import Socials from '../Socials';

import Menu from '../Menu';

import styles from './styles.module.scss';

const menuList = [
  {
    name: 'My Works',
    link: '/works',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'About Me',
    link: '/about',
  },
  {
    name: 'Authorization',
    link: '/',
  },
];

const Header = () => (
  <header className={styles.header}>
    <Socials socialIconClassName={styles.headerSocialIcon} />
    <Menu menuList={menuList} />
  </header>
);

export default Header;
