import { useSelector } from "react-redux";

import Task from "./components/Task";
import TaskList from "./components/TaskList";

import "./App.css";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme}>
      <h1>Todo</h1>
      <ThemeSelector />
      <Task />
      <TaskList />
    </div>
  );
}

export default App;
