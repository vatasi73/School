import { Box } from "@mui/material";
import SideBarLogo from "../UI/SideBarLogo/SideBarLogo";
import SideBarList from "../UI/SideBarList/SideBarList";
import * as theme from "./SideBarThemes";
import Advertising from "../UI/Advertising/Advertising";

const SideBar = () => {
  const Click = () => {
    console.log("click");
  };
  return (
    <Box sx={theme.SideBarWrapper}>
      <Box sx={theme.LogoPos}>
        <SideBarLogo />
      </Box>
      <SideBarList />
      <Advertising
        title="Учитесь бесплатно"
        subTitle="Приводите друзей с детьми заниматься в Sirius Future 
и получайте подарки!"
        buttonText="Узнать"
        handleCkick={Click}
      />
    </Box>
  );
};

export default SideBar;
