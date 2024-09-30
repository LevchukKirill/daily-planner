import React from "react";
import { inspect } from "util";
import styles from "./page.module.css";
import DragContainer from "@/components/drag/DragContainer";

export default function Dash() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <main className={styles.main}>
          <DragContainer />
        </main>
      </div>
    </div>
  );
}
