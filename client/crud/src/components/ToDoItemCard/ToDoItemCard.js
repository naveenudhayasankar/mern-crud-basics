import React from "react";

const ToDoItemCard = (props) => {
    const { _id, title, description } = props.data;
    return (
        <li key={_id}>
            <div className="title-description">
                <h2>{title}</h2>
                <h1></h1>
                <p>{description}</p>
            </div>
            <h1></h1>
            <div className="btn-container">
                <button name={_id} className="todo-btn">Edit</button>
                <button name={_id} className="todo-btn" onClick={props.deleteHandler}>Delete</button>
            </div>
        </li>
    );
};

export default ToDoItemCard;