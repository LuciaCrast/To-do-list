import { useState } from "react";
import { Title, TaskForm, TasksList, TaskFilter } from "./components";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./MUI/theme";
import "./App.scss";

function App() {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleCompleted = (value) => {
    setShowCompleted(value);
  };

  const onAddTask = (task) => {
    setIncompleteTodos((prevIncompleteTodos) => [
      ...prevIncompleteTodos,
      { id: Date.now(), task: task, completed: false },
    ]);
  };

  const handleDeleteTodos = (showTasks) => {
    if (showTasks === true) {
      setCompletedTodos([]);
    } else {
      setIncompleteTodos([]);
    }
  };
  const handleTaskDelete = (taskId) => {
    setIncompleteTodos((prevIncompleteTodos) =>
      prevIncompleteTodos.filter((todo) => todo.id !== taskId)
    );
    setCompletedTodos((prevCompletedTodos) =>
      prevCompletedTodos.filter((todo) => todo.id !== taskId)
    );
  };

  const handleTaskCompletedToggle = (taskId) => {
    if (showCompleted) {
      const taskToMove = completedTodos.find((todo) => todo.id === taskId);
      if (taskToMove) {
        setCompletedTodos((prevCompletedTodos) =>
          prevCompletedTodos.filter((todo) => todo.id !== taskId)
        );
        setIncompleteTodos((prevIncompleteTodos) => [
          ...prevIncompleteTodos,
          taskToMove,
        ]);
      }
    } else {
      const taskToMove = incompleteTodos.find((todo) => todo.id === taskId);
      if (taskToMove) {
        setIncompleteTodos((prevIncompleteTodos) =>
          prevIncompleteTodos.filter((todo) => todo.id !== taskId)
        );
        setCompletedTodos((prevCompletedTodos) => [
          ...prevCompletedTodos,
          { ...taskToMove, completed: true },
        ]);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="container">
        <Title />
        <TaskForm onAddTask={onAddTask} />
        <TasksList
          todos={showCompleted ? completedTodos : incompleteTodos}
          handleTaskCompletedToggle={handleTaskCompletedToggle}
          handleTaskDelete={handleTaskDelete}
        />
        <TaskFilter
          toggleCompleted={toggleCompleted}
          showCompleted={showCompleted}
          handleDeleteTodos={handleDeleteTodos}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
