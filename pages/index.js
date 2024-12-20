import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const translations = {
  en: {
    title: 'Under Construction',
    description: "We're working hard to bring you something amazing. Please check back soon!",
    metaDescription: 'This site is currently under construction',
  },
  pt: {
    title: 'Em Construção',
    description: 'Estamos trabalhando duro para trazer algo incrível. Por favor, volte em breve!',
    metaDescription: 'Este site está atualmente em construção',
  },
};

export default function Home({ theme, setTheme, language, setLanguage }) {
  // Remover o useEffect relacionado ao tema e idioma

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const { title, description, metaDescription } = translations[language];

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Os botões já estão no lugar correto */}
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button onClick={toggleLanguage} className={styles.languageToggle}>
          <img
            src={language === 'en' ? '/us.svg' : '/br.svg'}
            alt={language === 'en' ? 'English' : 'Português'}
            width={24}
            height={24}
          />
        </button>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>🚧</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>
            {description}
          </p>
        </div>
      </main>
    </div>
  );
}

