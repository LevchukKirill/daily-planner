"use client";
import React, { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import initialData from "@/constants/data";
import Column from "@/components/drag/Column";
import styles from "./drag.module.css";
import task from "@/components/drag/Task";

export default function DragContainer() {
  const [data, setData] = useState(initialData);

  function onDragStart() {
    document.body.style.transition = "backgroundColor 0.2s ease";
    // document.body.style.color = "orange";
  }

  function onDragUpdate(update: any) {
    const { destination } = update;
    let opacity: any;
    if (destination) {
      opacity = destination.index / Object.keys(data.tasks).length;
    } else {
      opacity = 0;
    }
    //Doesnt work
    document.body.style.backgroundColor = `rgba(153,141,200), ${opacity}`;
  }
  function onDragEnd(result: any) {
    document.body.style.color = "inherit";
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // const column = data.columns[source.droppableId];
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      console.log(start, finish);
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: { ...data.columns, [newColumn.id]: newColumn },
      };
      console.log(data);
      setData(newData);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newData);
  }
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
    >
      <div className={styles.main}>
        {data.columnOrder.map((columnId: string) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId: string) => data.tasks[taskId],
          );
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
}
