import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import TodoItemComponent from "./TodoItemComponent";
import toast from "react-hot-toast";
import { FaListUl } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TodoComponent = () => {
    const inputRef = useRef();
    const [item, setItem] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const handleAddItem = () => {
        if (item) {
            setTodoItems([...todoItems, { id: uuid(), name: item }]);
            setItem("");

            toast.success("Todo Added.");
        } else {
            toast.error("Todo item cannot be empty.");
            inputRef.current.focus();
        }
    };

    const handleEditItem = (id, newItem) => {
        const updatedTodoItems = todoItems.map((item) => {
            if (item.id === id) {
                return { ...item, name: newItem };
            }

            return item;
        });
        setTodoItems(updatedTodoItems);
    };

    const handleDeleteItem = (removeId) => {
        const filteredItems = todoItems.filter((item) => item.id !== removeId);
        setTodoItems(filteredItems);
    };

    const handleClearItems = () => {
        setTodoItems([]);
        toast.success("Todo Items Cleared.");
    };

    return (
        <div className="todo">
            <h1>Todo List</h1>
            <div className="input-section">
                <div className="input-container">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Enter Todo list..."
                        value={item}
                        onChange={(event) => setItem(event.target.value)}
                    />
                    <button onClick={handleAddItem} className="btn-add">
                        <FaListUl /> Add Todo
                    </button>
                </div>
            </div>
            <ul className="todo-list">
                {todoItems.map((item) => (
                    <TodoItemComponent
                        key={item.id}
                        item={item}
                        handleEditItem={handleEditItem}
                        handleDeleteItem={handleDeleteItem}
                    />
                ))}
            </ul>
            {todoItems.length > 0 ? (
                <button onClick={handleClearItems} className="btn-clear">
                    <AiFillDelete /> Clear Todo Items
                </button>
            ) : null}
        </div>
    );
};

export default TodoComponent;
