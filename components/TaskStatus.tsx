import { useState } from "react";
import { Circle, CheckCircle, Trash } from "react-feather"
type Task = {
    id: number;
    name: string;
    checked: boolean;
};

type Props = {
    task: Task;
    list: Task[];
    setList: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskStatus = ({ task, list, setList }: Props) => {
    const [checked, setChecked] = useState(false)
    const handleCheck = () => {
        setChecked(prev => !prev)

        setList(prev => prev.map(prevTask => prevTask.id === task.id ? {...prevTask, checked: !prevTask.checked} : prevTask))
        localStorage.setItem("data", JSON.stringify(list.map(prevTask => prevTask.id === task.id ? {...prevTask, checked: !prevTask.checked} : prevTask)))
    }
    const handleDelete = () => {
        setList(prev => prev.filter(prevTask => prevTask.id !== task.id))
        localStorage.setItem("data", JSON.stringify(list.filter(prevTask => prevTask.id !== task.id)))
    }
    return (
        <div className="status">
            <Trash className="deleteIcon" size={28} onClick={handleDelete} />
            <div className="checkIcon" onClick={handleCheck}>
                {checked ?
                <CheckCircle size={28} color="#32cd32" /> :
                <Circle size={28} />
                }
            </div>
        </div>
    );
}

export default TaskStatus;