import React from "react";
import styles from "./sideNav.module.css";

export default function SideNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <a href="/">Dash</a>
        </li>
        <li>
          <a href="/tasks">Tasks</a>
        </li>
        <li>
          <a href="/schedule">Time Block</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/history">History</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </div>
  );
}
