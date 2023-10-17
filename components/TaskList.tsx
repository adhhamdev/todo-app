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
            const jsonData = localStorage.getItem("data")
            if(jsonData === null) {
                localStorage.setItem("data", JSON.stringify([]))
            } else {
                const data = JSON.parse(jsonData);
                setList(data)
            }
        }
        getLocalData();
    }, [list])
    return (
        <div className="TaskList">
          {list.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
    );
}

export default List;