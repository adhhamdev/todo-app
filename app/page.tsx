import TaskList from "@/components/TaskList";
import TaskEntry from "@/components/TaskEntry";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="topbar">
          <h1>To-Do</h1>
        </div>
        <div className="starter">
          <TaskEntry />
        </div>
        <div className="tagList">
          <button className="tag active">Category 1</button>
        </div>
        <h2>Tasks</h2>
        <TaskList />
      </div>
    </main>
  )
}
