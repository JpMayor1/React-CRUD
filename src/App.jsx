import TodoComponent from "./components/TodoComponent";
import { Toaster } from "react-hot-toast";
import "./style.css";

function App() {
    return (
        <div className="App">
            <TodoComponent />
            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: "green",
                            color: "white",
                        },
                    },
                    error: {
                        style: {
                            background: "red",
                            color: "white",
                        },
                    },
                }}
            />
        </div>
    );
}

export default App;
