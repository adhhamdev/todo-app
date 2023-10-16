import { useState } from "react";
import { Circle, CheckCircle, Trash } from "react-feather"
const TaskStatus = ({task}) => {
    const [checked, setChecked] = useState(true)
    const handleCheck = () => {
        setChecked(prev => !prev)
    }
    return (
        <div className="status">
            <Trash className="deleteIcon" size={28} onClick={() => 0} />
            <div className="checkIcon" onClick={handleCheck}>
                {checked ?
                <CheckCircle size={28} /> :
                <Circle size={28} />
                }
            </div>
        </div>
    );
}

export default TaskStatus;