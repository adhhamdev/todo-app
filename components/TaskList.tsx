"use client"
import { useEffect, useState } from "react";
import Task from "./Task";

const List = () => {
    const [list, setList] = useState([
        {
            id: 12,
            name: "Start a Game",
            time: "02:20 PM",
            tag: "Workout"
        }
    ])
    useEffect(() => {
        const getLocalData = () => {
            const data = JSON.parse(localStorage.getItem("data"));
            if(!data) localStorage.setItem("data", JSON.stringify([]))
            setList(data)
        }
        getLocalData();
    })
    return (
        <div className="TaskList">
          {list.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
    );
}

export default List;