import React from "react";
import { inspect } from "util";
import styles from "./page.module.css";
import DragContainer from "@/components/drag/DragContainer";
// import initialData from "@/constants/data";
import initialTimeData from "@/constants/timeData";

export default function Schedule() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <main className={styles.main}>
          {/*<div className={styles.main}>*/}
          <div className={styles.wrapper}>
            <DragContainer data={initialTimeData} />
          </div>

          <div className={styles.boxWrapper}>
            <div className={styles.dailyTasks}>
              <div className={styles.box}>
                <div className={styles.titleBox}>
                  Задач больше нет... (Задачи на день(этот))
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.titleBox}>Задачи на эту неделю</div>
              </div>
            </div>
            <div className={styles.calendar}>
              <div className={styles.titleBox}>Календарь</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
