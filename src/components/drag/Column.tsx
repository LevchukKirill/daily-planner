import React from "react";
import styles from "./drag.module.css";
import Task from "@/components/drag/Task";
import { Droppable } from "@hello-pangea/dnd";
// @ts-ignore
export default function Column(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.column.title}</div>
      <Droppable droppableId={props.column.id}>
        {({ innerRef, droppableProps, placeholder }) => (
          <div
            className={styles.taskList}
            {...droppableProps}
            ref={innerRef}
            // innerRef={innerRef}
          >
            {props.tasks.map((task: any, index: number) => {
              return <Task key={task.id} task={task} index={index} />;
            })}
            {placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
