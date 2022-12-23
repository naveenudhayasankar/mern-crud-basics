import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ToDoItemCard from "../ToDoItemCard/ToDoItemCard";
import UpdateToDo from "../UpdateToDo/UpdateToDo";

const DisplayToDo = () => {
    const [toDoItems, setToDoItems] = useState([]);
    const [id, setId] = useState("");
    const [update, setUpdate] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/todoapp")
            .then((res) => {
                console.log(res.data);
                setToDoItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const editHandler = (e) => {
        setId(e.target.name);
        setModal(true);
    };

    const updateHandler = (e) => {
        setUpdate(!update);
    };

    const deleteHandler = (e) => {
        axios
            .delete(`http://localhost:4000/api/todoapp/${e.target.name}`);

        setToDoItems((data) => {
            return data.filter((toDoItem) => toDoItem._id !== e.target.name);
        });
    };

    const closeHandler = () => {
        setId("");
        setModal(false);
    };

    return (
        <section className="todo-container">
            <Link to="/add-todo" className="todo-btn-new">
                <button className="todo-btn">Add New</button>
            </Link>
            <section className="todo-data">
                <h1></h1>
                <ul className="todo-list-block">
                    {toDoItems.map((todo) => (
                        <ToDoItemCard key={id} data={todo} editHandler={editHandler} deleteHandler={deleteHandler} />
                    ))}
                </ul>
            </section>
            {modal ? (
                <section className="update-container">
                    <div className="update-data-container">
                        <p onClick={closeHandler} className="close">Close</p>
                        <UpdateToDo _id={id} closeHandler={closeHandler} updateHandler={updateHandler}/>
                    </div>
                </section>
            ) : (
                ""
            )}
        </section>
    );
}

export default DisplayToDo;