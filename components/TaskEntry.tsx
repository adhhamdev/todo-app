"use client"
import { useState } from "react";
import AddTaskBtn from "./AddTaskBtn";
import { Play, Hash } from "react-feather";
import React from "react";

interface TaskEntryProps {
  setList: React.Dispatch<React.SetStateAction<{ id: number; name: string; tag: string; time: string; checked: boolean }[]>>;
  list: { id: number; name: string; tag: string; time: string; checked: boolean }[];
}

const TaskEntry: React.FC<TaskEntryProps> = ({ setList, list }) => {
    const [taskReg, setTaskReg] = useState({
        name: "",
        tag: ""
    })
    const handleForm = (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const newData = {...taskReg, id: Math.floor(Math.random() * 1000), time: new Date().toLocaleTimeString(), checked: false};
      localStorage.setItem("data", JSON.stringify([...list, newData]));
      setList(prev => ([...prev, newData]));
      setTaskReg({name: "", tag: ""})
    };
    return (
        <form onSubmit={handleForm}>
              <fieldset>
                <legend>New Task</legend>
                <input type="text" name="new-task" id="task" maxLength={42} minLength={2} placeholder="What are you upto?" autoFocus required onChange={(ev) => setTaskReg(prev => ({...prev, name: ev.target.value}) )} value={taskReg.name} />
                <Play color="#ff6347" />
              </fieldset>
              <fieldset>
                <legend>Create/Set Tag</legend>
                <input type="text" name="new-task-tag" id="task-tag" max={42} minLength={2} placeholder="Tag name..." autoFocus required onChange={(ev) => setTaskReg(prev => ({...prev, tag: ev.target.value}) )} value={taskReg.tag} />
                <Hash color="#ff6347" />
              </fieldset>
              <AddTaskBtn />
          </form>
    );
}

export default TaskEntry;