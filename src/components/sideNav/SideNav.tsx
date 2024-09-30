import React from "react";
import styles from "./sideNav.module.css";

function SideNav() {
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
          <a href="/timemanagement">Time Block</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/habits">Habits</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
