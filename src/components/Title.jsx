import { Box } from "@mui/material";
import "./Title.scss";

export function Title() {
  return (
    <Box className="container-title">
      <h1 className="container-title__title">To do List</h1>
      <p className="container-title__paragraph"> What's next...?</p>
    </Box>
  );
}
