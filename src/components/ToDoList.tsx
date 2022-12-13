import React, { useState } from "react";
import ToDoTask from "./ToDoTask";
import { Wrapper } from "../styles/Wrapper";

export interface ITask {
  id: number;
  nameTask: string;
}

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState<ITask[]>([]);

  function addTaskIntoList(): void {
    if (task.length === 0) return;

    const idRandom = (num: number) => Math.floor(Math.random() * num);
    const newTask = { id: idRandom(10000000), nameTask: task };

    setListTasks([...listTasks, newTask]);
    setTask("");
  }

  function deleteTask(deleteTaskById: number): void {
    setListTasks(listTasks.filter((taskName) => taskName.id !== deleteTaskById))
  }

  return (
    <Wrapper>
      <div>
        <input
          type="text"
          name="task"
          placeholder="Digite uma nova tarefa"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          required
        />
        <button onClick={addTaskIntoList}>ADD</button>
      </div>

      {listTasks.map((task, index) => (
        <ToDoTask key={index} task={task} deleteTask={deleteTask}/>
      ))}
    </Wrapper>
  );
}


