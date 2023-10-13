import { Checkbox, ListItem, ListItemText } from "@mui/material";

export function Task({ task, completed, onToggle, onDelete }) {
  return (
    <ListItem>
      <Checkbox
        edge="start"
        disableRipple
        checked={completed}
        onChange={onToggle}
      />
      <ListItemText secondary={task} />
      <button
        onClick={onDelete}
        style={{
          border: "1px solid #a13030",
          borderRadius: "50%",
          borderColor: "#a13030",
          color: "#ffff",
          backgroundColor: "#a13030",
        }}
      >
        x
      </button>
    </ListItem>
  );
}
