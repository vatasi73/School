import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import { Box } from "@mui/material";
import * as theme from "./LayoutThemes";
const Layout = () => {
  return (
    <>
      <Box sx={theme.LayoutWrapper}>
        <Box>
          <SideBar />
        </Box>
        <Box sx={theme.RoghtSideContentWrapper}>
          <Box>
            <Header />
          </Box>
          <Box sx={theme.OutletWrapper}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
