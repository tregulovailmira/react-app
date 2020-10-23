import React from 'react';
import styles from './Spinner.module.css';
// TODO try add react spinner, find any spinner in npm modules
function Spinner() {
    return (
        <div className={styles.loader}>
            Loading...
        </div>
    );
}

export default Spinner;