"use client"
import TaskList from "@/components/TaskList";
import TaskEntry from "@/components/TaskEntry";
import { useEffect, useState } from "react";

type TaskType = {
  id: number;
  name: string;
  tag: string;
  time: string;
  checked: boolean;
}

export default function Home() {
  const [list, setList] = useState<TaskType[]>([]);
  useEffect(() => {
    const getLocalData = () => {
      const jsonData = localStorage.getItem("data");
      if(!jsonData) {
        localStorage.setItem("data", JSON.stringify([]))
      } else {
        const data = JSON.parse(jsonData)
        setList(data)
      }
    }
    getLocalData();
  }, [])
  return (
    <main>
      <div className="container">
        <div className="topbar">
          <h1>To-Do</h1>
        </div>
        <div className="starter">
          <TaskEntry setList={setList} list={list} />
        </div>
        <div className="tagList">
          <button className="tag active">Category 1</button>
        </div>
        <h2>Tasks</h2>
        <TaskList setList={setList} list={list} />
      </div>
    </main>
  )
}