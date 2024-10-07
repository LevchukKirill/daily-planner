"use client";
import React from "react";
import "./drag.css";
import styles from "./drag.module.css";
import { Draggable } from "@hello-pangea/dnd";

function Task(props: any) {
  const draggingStyle = {};
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => {
        const isDragging = snapshot.isDragging;
        const draggingColor = isDragging ? "lightgreen" : "colorless";
        const interval = props.task.data.time?.interval;
        const style = { height: `max(${interval + 20}px, 20px)` };
        //?
        provided.draggableProps.style = Object.assign(
          {},
          provided.draggableProps.style || {},
          style,
        );

        // provided.draggableProps.style.height = `max(${interval}px, 100px)`;
        return (
          <div
            className={`${styles[draggingColor]} ${styles.task}`}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className={styles.handle} {...provided.dragHandleProps}></div>
            <p>
              <span>{props.task.data.title} </span>
              <span>
                {props.task.data.time
                  ? `${props.task.data.time.start} - ${props.task.data.time.end}`
                  : ""}
              </span>
            </p>
          </div>
        );
      }}
    </Draggable>
  );
}

export default Task;
