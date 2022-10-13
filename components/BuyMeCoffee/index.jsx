import React from 'react';
import styles from "./index.module.scss"
import cl from "classnames"
import ScreenEgg from '../ScreenEgg';

export default function ByMeCoffe({className}) {
  return (
    <ScreenEgg type="right">
    <div className={cl(className,styles.buyCoffee)}>
    <a href="https://stripe.com/" target="blank" className={styles.buyCoffeeButton}>Buy me a coffe</a>
    </div>
    </ScreenEgg>
  );
}
