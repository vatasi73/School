import { Box } from "@mui/material";

import Auth from "../components/Auth/Auth";
import * as theme from "./AuthPageThemes";

const AuthPage = () => {
  return (
    <Box sx={theme.AuthPageWrapper}>
      <Auth />
    </Box>
  );
};

export default AuthPage;
