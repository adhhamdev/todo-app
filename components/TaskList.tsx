import Task from "./Task";
import { TaskType } from "../types";

type ListProps = {
  list: TaskType[];
  setList: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

const List = ({ list, setList }: ListProps) => {
  return (
    <div className="TaskList">
      {list ? list.map((task: TaskType) => (
        <Task
          key={task.id}
          task={task}
          list={list}
          setList={setList}
        />
      )) :
      <div>No Tasks.</div>
      }
    </div>
  );
}

export default List;