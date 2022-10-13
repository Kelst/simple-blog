import React from 'react';
import styles from "./index.module.scss"
import cl from "classnames"

export default function PostGrid({className,children}) {
  return (
    <div className={cl(className,styles.postGrid)}>
   {children}
    </div>
  );
}
