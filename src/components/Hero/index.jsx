import Header from '../Header';

import HeroBg from '../../assets/images/heroBg.jpg';
import portfolioHeader from '../../assets/icons/portfolio_header.svg';
import styles from './styles.module.scss';

const Hero = () => (
  <div className={styles.heroContainer}>
    <div className={styles.heroContent}>
      <div className={styles.heroBg}>
        <img className={styles.heroBgImage} src={HeroBg} alt="" />
      </div>
      <div className={styles.heroBackTitle}>
        <svg className={styles.bgPortfolioHeader} width="100%" height="100%">
          <use xlinkHref={`#${portfolioHeader.id}`} />
        </svg>
      </div>
      <div className={styles.heroContentTop}>
        <Header />
      </div>
    </div>
  </div>
);

export default Hero;
