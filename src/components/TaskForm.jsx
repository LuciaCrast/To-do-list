import { useState } from "react";
import { TextField, Button } from "@mui/material";

export function TaskForm({ onAddTask }) {
  const [inputTask, setInputTask] = useState("");

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask.trim() === "") {
      return;
    }
    onAddTask(inputTask);
    setInputTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label=" Your task"
        variant="filled"
        fullWidth
        name="task"
        value={inputTask}
        onChange={handleInputChange}
        required
        multiline
        rows={4}
        sx={{
          backgroundColor: "#cecdc9",
          borderRadius: "6px",
          marginBottom: 0.5,
          "& label": {
            fontSize: "18px",
            fontWeight: "bold",
          },
        }}
      />
      <Button
        sx={{ marginBottom: 4 }}
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
      >
        Send
      </Button>
    </form>
  );
}
