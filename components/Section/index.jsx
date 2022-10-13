import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';

export default function Section({ className,children }) {
	return <section className={cl(className, styles.section)}>{children}</section>;
}
