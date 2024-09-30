import React from "react";
import styles from "./user.module.css";

export default function User() {
  return (
    <div className={styles.user}>
      <a href={"/"}>
        <canvas className={styles.circle} />
      </a>
    </div>
  );
}
