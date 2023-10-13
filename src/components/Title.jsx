import { Box, Typography } from "@mui/material";

export function Title() {
  return (
    <Box className="container-title" sx={{ padding: "20px" }}>
      <Typography
        color="primary"
        variant="h2"
        className="container-title__title"
      >
        Todo List
      </Typography>
      <Typography
        color="secondary"
        variant="subtitle1"
        className="container-title__paragraph"
      >
        What's next...?
      </Typography>
    </Box>
  );
}
