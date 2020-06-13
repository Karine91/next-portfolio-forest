import Socials from "../Socials";
import MenuButton from "../MenuButton";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Socials></Socials>
      <MenuButton></MenuButton>
    </header>
  );
};

export default Header;
