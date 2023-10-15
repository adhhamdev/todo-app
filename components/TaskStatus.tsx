"use client"
import { Circle, CheckCircle } from "react-feather"
const TaskStatus = () => {
    return (
        <div className="status">
            <input type="checkbox" name="task-status" enterKeyHint="done" hidden />
            <Circle />
        </div>
    );
}

export default TaskStatus;