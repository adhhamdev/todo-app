"use client"
import TaskList from "@/components/TaskList";
import TaskEntry from "@/components/TaskEntry";
import { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState([])
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
          <TaskEntry list={list} setList={setList} />
        </div>
        <div className="tagList">
          <button className="tag active">Category 1</button>
        </div>
        <h2>Tasks</h2>
        <TaskList list={list} setList={setList} />
      </div>
    </main>
  )
}
