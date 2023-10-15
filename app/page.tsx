import AddTaskBtn from "@/components/AddTaskBtn";
import TaskStatus from "@/components/TaskStatus";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="topbar">
          <h1>To-Do</h1>
          <form>
            <fieldset>
              <legend>New Task</legend>
              <input type="text" name="new-task" id="task" placeholder="What are you upto?" autoFocus autoComplete="on" />
              <input type="text" name="new-task-tag" id="task-tag" placeholder="# Tag name..." autoFocus autoComplete="on" />
              <AddTaskBtn />
            </fieldset>
          </form>
        </div>
        <div className="list">
          <div className="task">
            <div className="content">
              <p className="name">
                Name of the Task
              </p>
             <TaskStatus />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
