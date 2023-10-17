"use client"
import { useState } from "react";
import AddTaskBtn from "./AddTaskBtn";
import { Play, Hash } from "react-feather";
const TaskEntry = () => {
  const [taskReg, setTaskReg] = useState({
    name: "",
    tag: ""
  })
  const handleForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const jsonData = localStorage.getItem("data")
    if(jsonData === null) {
      localStorage.setItem("data", JSON.stringify([]))
    } else {
      const data = JSON.parse(jsonData)
      const newData = [...data, taskReg]
      localStorage.setItem("data", JSON.stringify(newData))
    }
    setTaskReg({
      name: "",
      tag: ""
    })
  }
    return (
        <form onSubmit={handleForm}>
              <fieldset>
                <legend>New Task</legend>
                <input type="text" name="new-task" id="task" maxLength={42} minLength={2} placeholder="What are you upto?" autoFocus required onChange={(ev) => setTaskReg(prev => ({...prev, name: ev.target.value}) )} />
                <Play color="#ff6347" />
              </fieldset>
              <fieldset>
                <legend>Create/Set Tag</legend>
                <input type="text" name="new-task-tag" id="task-tag" max={42} minLength={2} placeholder="Tag name..." autoFocus required onChange={(ev) => setTaskReg(prev => ({...prev, tag: ev.target.value}))} />
                <Hash color="#ff6347" />
              </fieldset>
              <AddTaskBtn />
          </form>
    );
}

export default TaskEntry;