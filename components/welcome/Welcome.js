import React from 'react';
import styles from './Welcome.module.css';

function Welcome() {
    return (
        <div className={styles.welcome}>
            <h1 className={styles.title}>Welcome to the Future</h1>
        </div>
    );
}

export default Welcome;