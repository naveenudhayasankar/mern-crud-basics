import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const CreateToDo = () => {
    const [toDoItem, setToDoItem] = useState({ title: "", description: "" });

    const handleChange = (e) => {
        setToDoItem((data) => (
            { ...data, [e.target.name]: e.target.value }
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/api/todoapp", toDoItem)
            .then((res) => {
                setToDoItem({ title: "", description: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Cannot create ToDo Item");
                console.log(err);
            });
    };

    return (
        <section className="container">
            <Link to="/">
                <button type="button" className="todo-btn-back">Back</button>
            </Link>
            <section className="todo-data">
                <form onSubmit={handleSubmit} className="form-container" noValidate>
                    <label className="label" htmlFor="title">To Do Title</label>
                    <input type="text" name="title" value={toDoItem.title} onChange={handleChange} className="input" />
                    <label className="label" htmlFor="description">Add More Details</label>
                    <input type="textarea" name="description" value={toDoItem.description} onChange={handleChange} className="input" />
                    <button type="submit" className="todo-btn">Create</button>
                </form>
            </section>
        </section>
    );
};

export default CreateToDo;