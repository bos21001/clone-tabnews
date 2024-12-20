import React, { useState, useEffect } from 'react';
import 'normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Carregar idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Detectar o país do usuário
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          if (data.country_code === 'BR') {
            setLanguage('pt');
          } else {
            setLanguage('en');
          }
        })
        .catch(() => {
          // Em caso de erro, manter inglês como padrão
          setLanguage('en');
        });
    }

    // Definir o tema baseado na preferência do sistema ou na escolha do usuário
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Atualizar o atributo 'lang' da tag 'html' com o idioma atual
    document.documentElement.lang = language;
  }, [language]);

  return (
    <Component
      {...pageProps}
      theme={theme}
      setTheme={setTheme}
      language={language}
      setLanguage={setLanguage}
    />
  );
}

export default MyApp;

