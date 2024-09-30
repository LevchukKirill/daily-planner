"use client";
import React, { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import initialData from "@/constants/data";
import Column from "@/components/drag/Column";

export default function DragContainer() {
  const [data, setData] = useState(initialData);

  function onDragEnd(result: any) {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const column = data.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newData = {
      ...data,
      columns: { ...data.columns, [newColumn.id]: newColumn },
    };
    console.log(data);
    setData(newData);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId: string) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(
          (taskId: string) => data.tasks[taskId],
        );
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}
