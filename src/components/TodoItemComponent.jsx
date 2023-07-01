/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TodoItemComponent = ({ item, handleEditItem, handleDeleteItem }) => {
    const [isEditing, setIsEditing] = useState(false);
    // eslint-disable-next-line react/prop-types
    const [newItem, setNewItem] = useState(item.name);

    const onEdit = () => {
        if (newItem) {
            handleEditItem(item.id, newItem);
            setIsEditing(false);
            toast.success("Todo Updated.");
        } else {
            toast.error("Todo item must not be empty.");
        }
    };

    const onDelete = () => {
        handleDeleteItem(item.id);
        toast.success("Todo Deleted.");
    };

    return (
        <>
            <li>
                {isEditing ? (
                    <input
                        type="text"
                        value={newItem}
                        onChange={(event) => setNewItem(event.target.value)}
                    />
                ) : (
                    <span>{item.name}</span>
                )}

                <div className="button-container">
                    <button
                        onClick={() => {
                            isEditing ? onEdit() : setIsEditing(true);
                        }}
                        className="btn-edit"
                    >
                        <FaEdit />
                        {isEditing ? "Save" : "Edit"}
                    </button>
                    <button onClick={() => onDelete()} className="btn-delete">
                        <AiFillDelete /> Delete
                    </button>
                </div>
            </li>
        </>
    );
};

export default TodoItemComponent;
