import { List } from "@mui/material";
import { Task } from "./Task";

export function TasksList({ todos, handleTaskCompletedToggle }) {
  return (
    <List
      sx={{
        background: "secondary",
        backgroundColor: "#cecdc9",
        borderRadius: "6px",
        height: 200,
        border: "2px solid #a13030",
        padding: "16px",
        marginBottom: 0.5,
        overflow: "auto",
      }}
    >
      {todos.map((todo) => (
        <Task
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          onToggle={() => handleTaskCompletedToggle(todo.id)}
        />
      ))}
    </List>
  );
}
