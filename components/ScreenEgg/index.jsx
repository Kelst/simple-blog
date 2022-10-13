import React from 'react';
import styles from "./index.module.scss"
import cl from "classnames"

export default function ScreenEgg({className,children,type}) {
  return (
    <div className={cl(className,styles.screenEgg,type==="right"?styles.screenEggRight:styles.screenEggLeft)}>
    {children}
    </div>
  );
}
