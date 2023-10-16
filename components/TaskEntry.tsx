"use client"
import { useState } from "react";
import AddTaskBtn from "./AddTaskBtn";
import { Play, Hash } from "react-feather";
const TaskEntry = () => {
    const [taskReg, setTaskReg] = useState({
        name: "",
        tag: ""
    })
    const handleForm = (ev) => {
        ev.preventDefault()

    }
    return (
        <form onSubmit={handleForm}>
              <fieldset>
                <legend>New Task</legend>
                <input type="text" name="new-task" id="task" maxLength={42} minLength={2} placeholder="What are you upto?" autoFocus required onChange={(ev) => setTaskReg(prev => 0 )} />
                <Play color="#ff6347" />
              </fieldset>
              <fieldset>
                <legend>Create/Set Tag</legend>
                <input type="text" name="new-task-tag" id="task-tag" max={42} minLength={2} placeholder="Tag name..." autoFocus required />
                <Hash color="#ff6347" />
              </fieldset>
              <AddTaskBtn />
          </form>
    );
}

export default TaskEntry;