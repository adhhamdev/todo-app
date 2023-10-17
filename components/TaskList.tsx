import Task from "./Task";

interface TaskInterface {
  id: number;
  text: string;
  completed: boolean;
}

type ListProps = {
  list: TaskInterface[];
  setList: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
};

const List = ({ list, setList }: ListProps) => {
  return (
    <div className="TaskList">
      {list ? list.map((task: TaskInterface) => (
        <Task key={task.id} task={task} list={list} setList={setList} />
      )) :
      <div>No Tasks.</div>
      }
    </div>
  );
}

export default List;