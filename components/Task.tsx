import TaskStatus from "./TaskStatus";

import { TaskType } from "../types";

interface TaskProps {
  task: TaskType;
  list: TaskType[];
  setList: React.Dispatch<React.SetStateAction<TaskType[]>>;
}




const Task = ({ task, list, setList }: TaskProps) => {
  return (
    <div className="task">
      <div className="content">
        <p className="name">{task.name}</p>
      </div>
      <div className="time">{task.time}</div>
      <TaskStatus list={list} task={task} setList={setList} />
      <p className="tag">{task.tag}</p>
    </div>
  );
};




export default Task;


