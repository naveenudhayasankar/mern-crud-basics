import { useState } from "react";
import axios from "axios";

const UpdateToDo = (props) => {
    const [toDoItem, setToDoItem] = useState({title: "", description: ""});

    const handleChange = (e) => {
        setToDoItem((data) => ({...data, [e.target.name] : e.target.value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:4000/api/todoapp/${props._id}`)
            .then((res) => {
                setToDoItem({title: "", description: ""});
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <form className="form-container" onSubmit={(e) => {
            handleSubmit(e);
        }}>
            <label className="label" htmlFor="title">To Do Title</label>
            <input type="text" name="title" value={toDoItem.title} onChange={handleChange} className="input" />
            <label className="label" htmlFor="description">Add More Details</label>
            <input type="textarea" name="description" value={toDoItem.description} onChange={handleChange} className="input" />
            <button type="submit" className="todo-btn">Update</button>
        </form>
    )
};

export default UpdateToDo;