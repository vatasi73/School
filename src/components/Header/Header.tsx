import { Avatar, Badge, Box, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Chat from "../../assets/Messages, Chat.svg";

import CustomButton from "../UI/Button/CustomButton";
import DropDown from "../UI/DropDown/DropDown";
import { useAppDispatch } from "../../store";
import { setAnchorEl } from "../GlobalFuture/GlobalFutureSlice";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./HeaderFeature/HeaderFeatureSelector";
import * as theme from "./HeaderThemes";
import { useRef } from "react";
const Header = () => {
  const location = useLocation();
  const headerRef = useRef(null);
  const dispatch = useAppDispatch();
  const currentPath = location.pathname;
  const user = useSelector(selectCurrentUser);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(setAnchorEl(headerRef.current));
  };
  const handleChat = () => {
    console.log("Button clicked!");
  };
  return (
    <Box sx={theme.HeaderWrapper}>
      {currentPath === "/" && (
        <Typography sx={theme.WelcomText}>
          Добро пожаловать,
          <Typography sx={theme.Nametext} component="span">
            {user.name}
          </Typography>
          <Typography sx={theme.ExclamationPoint} component="span">
            !
          </Typography>
        </Typography>
      )}
      <Box sx={theme.ButtonWrappe}>
        <CustomButton
          maxWidth="42px"
          height="42px"
          handleClick={handleChat}
          variant="outlined"
          style="circleButton"
          textVariant="not"
        >
          <Badge badgeContent={2} color="error" sx={theme.Bage} />
          <img src={Chat} alt="Chat" />
        </CustomButton>
        <CustomButton
          maxWidth="42px"
          height="42px"
          handleClick={handleClick}
          variant="outlined"
          textVariant="not"
          style="circleButton"
        >
          <Avatar alt="Mihail" src={user.img} ref={headerRef} />
          <KeyboardArrowDownRoundedIcon sx={theme.IconButton} />
          <DropDown />
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Header;
