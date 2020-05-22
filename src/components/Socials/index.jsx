import React from "react";
import PropTypes from "prop-types";
import SocialItem from "./SocialsItem";

import styles from "./styles.module.scss";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const dataDefault = [
  {
    icon: faFacebookF,
    link: "https://www.facebook.com/gkarine91/",
  },
  {
    icon: faGithubAlt,
    link: "https://github.com/Karine91",
  },
  {
    icon: faLinkedinIn,
    link:
      "https://www.linkedin.com/in/%D0%BA%D0%B0%D1%80%D0%B8%D0%BD%D1%8D-%D0%B3%D1%8E%D0%BB%D1%83%D0%BC%D1%8F%D0%BD-97b938168/",
  },
];

const Socials = ({ data }) => {
  return (
    <ul className={styles.socials}>
      {data.map((elem) => (
        <SocialItem
          key={elem.link}
          icon={elem.icon}
          link={elem.link}></SocialItem>
      ))}
    </ul>
  );
};

Socials.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      icon: PropTypes.object,
    })
  ),
};

Socials.defaultProps = {
  data: dataDefault,
};

export default Socials;
