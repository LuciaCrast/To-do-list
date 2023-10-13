import { Box, Typography } from "@mui/material";

export function Title() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography color="primary" variant="h2">
        Todo List
      </Typography>
      <Typography color="secondary" variant="subtitle1">
        What's next...?
      </Typography>
    </Box>
  );
}
