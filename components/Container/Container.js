import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Home.module.css';

export default function Container({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
