import TaskStatus from "./TaskStatus";

const Task = ({task}) => {
    return (
        <div className="task">
            <div className="content">
              <p className="name">
                {task.name}
              </p>
            </div>
            <div className="time">
              {task.time}
            </div>
            <TaskStatus task={task} />
            <p className="tag">{task.tag}</p>
          </div>
    );
}

export default Task;