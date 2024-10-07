"use client";
import React from "react";
import styles from "./drag.module.css";
import "./drag.css";
import Task from "@/components/drag/Task";
import { Droppable } from "@hello-pangea/dnd";
import data from "@/constants/data";
export default function Column(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.column.title}</div>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          const isDraggingOver = snapshot.isDraggingOver;
          const dropperColor = isDraggingOver ? "darkbrown" : "colorless";
          return (
            <div
              className={`taskList ${dropperColor}`}
              {...provided.droppableProps}
              ref={provided.innerRef}
              // innerRef={innerRef}
            >
              {props.tasks.map((task: any, index: number) => {
                return <Task key={task.id} task={task} index={index} />;
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
      <button
        id={props.column.id}
        type={"button"}
        onClick={() => {
          const newTaskId = `task-${Object.keys(props.data.tasks).length + 1}`;
          const newTaskTitle = "123";
          const newTask = {
            [newTaskId]: { id: newTaskId, data: { title: newTaskTitle } },
          };
          const tasksArray = props.column.taskIds;
          tasksArray.push(newTaskId);
          const newColumnData = {
            ...props.data.columns,
            [props.column.id]: {
              title: props.column.title,
              id: props.column.id,
              taskIds: tasksArray,
            },
          };
          const data = props.data;

          // const newData = data.tasks;
          const newTaskData = { ...data.tasks, ...newTask };

          //?
          props.setData({
            tasks: newTaskData,
            columns: newColumnData,
            columnOrder: props.data.columnOrder,
          });
          console.log({
            tasks: newTaskData,
            columns: newColumnData,
            columnOrder: props.data.columnOrder,
          });
        }}
        className={styles.addButton}
      >
        <div>+</div>
      </button>
    </div>
  );
}
