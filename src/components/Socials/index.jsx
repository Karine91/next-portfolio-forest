import React from 'react';
import PropTypes from 'prop-types';
import SocialItem from './SocialsItem';

import facebookIcon from '../../assets/icons/facebook-logo.svg';
import gitHubIcon from '../../assets/icons/github.svg';
import linkedInIcon from '../../assets/icons/in.svg';

import styles from './styles.module.scss';

const FacebookIcon = (
  <svg>
    <use xlinkHref={`#${facebookIcon.id}`} />
  </svg>
);

const GitHubIcon = (
  <svg>
    <use xlinkHref={`#${gitHubIcon.id}`} />
  </svg>
);

const LinkedInIcon = (
  <svg>
    <use xlinkHref={`#${linkedInIcon.id}`} />
  </svg>
);

const dataDefault = [
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/gkarine91/',
  },
  {
    icon: GitHubIcon,
    link: 'https://github.com/Karine91',
  },
  {
    icon: LinkedInIcon,
    link:
      'https://www.linkedin.com/in/%D0%BA%D0%B0%D1%80%D0%B8%D0%BD%D1%8D-%D0%B3%D1%8E%D0%BB%D1%83%D0%BC%D1%8F%D0%BD-97b938168/',
  },
];

const Socials = ({ data, socialIconClassName }) => (
  <ul className={styles.socials}>
    {data.map((elem) => (
      <SocialItem
        className={socialIconClassName}
        key={elem.link}
        icon={elem.icon}
        link={elem.link}
      />
    ))}
  </ul>
);

Socials.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      icon: PropTypes.object,
    }),
  ),
  socialIconClassName: PropTypes.string,
};

Socials.defaultProps = {
  data: dataDefault,
  socialIconClassName: undefined,
};

export default Socials;
