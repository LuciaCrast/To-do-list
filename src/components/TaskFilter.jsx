import { Box, Button, ButtonGroup } from "@mui/material";

export function TaskFilter({
  showCompleted,
  toggleCompleted,
  handleDeleteTodos,
}) {
  return (
    <Box>
      <ButtonGroup
        fullWidth
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          variant={showCompleted ? "contained" : "outlined"}
          onClick={() => toggleCompleted(false)}
        >
          Pending Task
        </Button>
        <Button
          variant={showCompleted ? "outlined" : "contained"}
          onClick={() => toggleCompleted(true)}
        >
          Completed Task
        </Button>
        <Button
          variant="contained"
          onClick={() => handleDeleteTodos(showCompleted)}
        >
          Delete All
        </Button>
      </ButtonGroup>
    </Box>
  );
}
