import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Head>
        <title>Under Construction</title>
        <meta name="description" content="This site is currently under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>🚧</div>
          <h1 className={styles.title}>Under Construction</h1>
          <p className={styles.description}>
            We're working hard to bring you something amazing. Please check back soon!
          </p>
        </div>
      </main>
    </div>
  );
}

