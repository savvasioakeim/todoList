import { useState } from "react";
import { CgTrash } from "react-icons/cg";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import "./app.css";

export default function TodoList() {
    const [tasks, setTasks] = useState([
        { text: "na vrw douleia epitelous", completed: false },
        { text: "na vgalw lefta", completed: false },
        { text: "o krik einai gay", completed: true }
    ]);
    const [newTasks, setNewTasks] = useState("");


    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }


    function addTask() {
        if (newTasks.trim() !== "") {
            setTasks((t) => [...t, { text: newTasks, completed: false }]);
            setNewTasks("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }


    function taskUp(index) {
        if (index > 0) {
            const sortTasks = [...tasks];
            [sortTasks[index], sortTasks[index - 1]] = [sortTasks[index - 1], sortTasks[index]];
            setTasks(sortTasks);
        }
    }


    function taskDown(index) {
        if (index < tasks.length - 1) {
            const sortTasks = [...tasks];
            [sortTasks[index], sortTasks[index + 1]] = [sortTasks[index + 1], sortTasks[index]];
            setTasks(sortTasks);
        }
    }


    function toggleTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return (
        <div className="container">
            <div className="list">
                <h1>Todo List</h1>
                <input
                    type="text"
                    placeholder="Add a new Todo"
                    onChange={handleInputChange}
                    value={newTasks}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") addTask();
                    }}
                />
                <button onClick={addTask}>Add</button>

                <ul>
                    {tasks.map((task, index) => {
                        return (
                            <li key={index} className="listItem">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(index)}
                                />
                                <span
                                    className="task"
                                    style={{
                                        textDecoration: task.completed ? "line-through" : "none",
                                        color: task.completed ? "gray" : "black",
                                    }}
                                >
                                    {task.text}
                                </span>
                                <div className="icons">
                                    <span onClick={() => taskUp(index)}>
                                        <FaLongArrowAltUp className="svg" />
                                    </span>
                                    <span onClick={() => taskDown(index)}>
                                        <FaLongArrowAltDown className="svg" />
                                    </span>
                                    <span onClick={() => deleteTask(index)}>
                                        <CgTrash className="svg trash" />
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
