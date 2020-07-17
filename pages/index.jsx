import Head from 'next/head';

import React, { useState, useEffect, useRef } from 'react';

import classnames from 'classnames';

import WaterBackground from '../src/components/WaterWebGL';

import WelcomeForm from '../src/components/WelcomeForm';

import styles from '../src/styles/welcome.module.scss';

const Header = React.forwardRef(({ onClick, isFormFlipped }, ref) => (
  <header className={styles.header}>
    <button
      type="button"
      ref={ref}
      className={classnames(styles.btnAuth, {
        [styles.btnAuthHide]: isFormFlipped,
      })}
      onClick={onClick}
    >
      Authorize
    </button>
  </header>
));

export default function Home() {
  const [isFormFlipped, setFormFlipped] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const formRef = useRef(null);

  const btnRef = useRef(null);

  const currentYear = new Date().getFullYear();

  const toggleFlip = () => {
    setFormFlipped((prevValue) => !prevValue);
  };

  useEffect(() => {
    document.addEventListener('click', onClickAway);

    return () => {
      document.removeEventListener('click', onClickAway);
    };
  }, []);

  const onClickAway = (e) => {
    if (!formRef.current.contains(e.target) && !btnRef.current.contains(e.target)) {
      setFormFlipped(false);
    }
  };

  const onBackgroundLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Head>
        <title>Welcome - Portfolio</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WaterBackground onLoad={onBackgroundLoad} />

        {isLoading ? (
          <div className={styles.loadingBg}>Loading...</div>
        ) : (
          <div className={styles.mainWrapper}>
            <Header onClick={toggleFlip} isFormFlipped={isFormFlipped} ref={btnRef} />

            <div className={styles.mainContent}>
              <WelcomeForm isFlipped={isFormFlipped} toggleFlip={toggleFlip} ref={formRef} />
            </div>

            <div className={styles.footer}>
              <div className={styles.copyright}>© Karine Hiulumian |{currentYear}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
