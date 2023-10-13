import { Checkbox, ListItem, ListItemText } from "@mui/material";

export function Task({ task, completed, onToggle }) {
  return (
    <ListItem>
      <Checkbox
        edge="start"
        disableRipple
        checked={completed}
        onChange={onToggle}
      />
      <ListItemText secondary={task} />
    </ListItem>
  );
}
