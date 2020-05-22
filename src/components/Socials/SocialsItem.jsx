import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

const SocialItem = ({ link, icon }) => {
  return (
    <li className={styles.socialsItem}>
      <a
        target="_blank"
        href={link}
        className={styles.socialsLink}>
        <FontAwesomeIcon
          width={25}
          height={25}
          className={styles.socialsIcon}
          icon={icon}></FontAwesomeIcon>
      </a>
    </li>
  );
};

SocialItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default SocialItem;
