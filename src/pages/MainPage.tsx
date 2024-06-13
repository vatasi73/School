import { Box } from "@mui/material";

import Main from "../components/Main/Main";
import * as theme from "./MainPageThemes";
const MainPage = () => {
  return (
    <Box sx={theme.MainPageWrapper}>
      <Main />
    </Box>
  );
};

export default MainPage;
