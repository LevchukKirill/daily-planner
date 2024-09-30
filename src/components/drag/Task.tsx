import React from "react";
import styles from "./drag.module.css";
import { Draggable } from "@hello-pangea/dnd";
// @ts-ignore
function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <div
          className={styles.task}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // innerRef={provided.innerRef}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
