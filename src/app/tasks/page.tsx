import React from "react";
import { inspect } from "util";
import styles from "./page.module.css";
import DragContainer from "@/components/drag/DragContainer";
import initialData from "@/constants/data";

export default function Tasks() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <main className={styles.main}>
          <DragContainer data={initialData} />
        </main>
      </div>
    </div>
  );
}
