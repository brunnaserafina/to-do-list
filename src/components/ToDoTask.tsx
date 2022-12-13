import React from "react";
import { ITask } from "./ToDoList";

interface TaskProps {
  task: ITask;
  deleteTask(deleteTaskById: number): void;
}

export default function ToDoTask({ task, deleteTask }: TaskProps) {
  return (
    <>
      <p>
        {task.nameTask}
        <span onClick={() => deleteTask(task.id)}>x</span>
      </p>
    </>
  );
}
