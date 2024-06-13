import { MouseEvent, useEffect } from "react";

import ExitIcon from "../../../assets/Exit.svg";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, Button, Divider, MenuItem, Typography } from "@mui/material";
import CustomButton from "../Button/CustomButton";
import { StyledMenu } from "./DropDownThemes";
import { useSelector } from "react-redux";
import { selectAnchorEl } from "../../GlobalFuture/GlobalFutureSelector";
import { useAppDispatch } from "../../../store";
import { setAnchorEl } from "../../GlobalFuture/GlobalFutureSlice";

import { setUserIsAuth } from "../Input/InputFeature/inputSlice";
import { useNavigate } from "react-router-dom";
import {
  selectCurrentUser,
  selectUnActiveUser,
} from "../../Header/HeaderFeature/HeaderFeatureSelector";
import DropDownAvatar from "../DropDownAvatar/DropDownAvatar";
import {
  setCurrentUser,
  setUnActiveUser,
} from "../../Header/HeaderFeature/HeaderFeatureSlice";
import * as theme from "./DropDownThemes";
const DropDown = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const anchorEl = useSelector(selectAnchorEl);
  const currentUser = useSelector(selectCurrentUser);
  const unActiveUser = useSelector(selectUnActiveUser);
  const open = Boolean(anchorEl);

  const handleClose = (event: MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    dispatch(setAnchorEl(null));
  };

  const handleUserClick = (event: MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    handleClose(event);
    dispatch(setCurrentUser(unActiveUser));
    dispatch(setUnActiveUser(currentUser));
  };

  const LogOut = (event: MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    dispatch(setUserIsAuth(false));
    navigate("/authPage");
  };

  useEffect(() => {
    dispatch(setAnchorEl(null));
  }, [dispatch]);

  return (
    <StyledMenu
      id="demo-positioned-menu"
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <ArrowDropUpIcon sx={theme.ArrowDropUpIcon} />

      <Button onClick={handleClose} sx={theme.ButtonCloseIcon}>
        <CloseIcon sx={theme.CloseIcon} />
      </Button>

      <Typography sx={theme.ChangeUserText}>Смена пользователя</Typography>
      <Box sx={theme.MenuItemWrapper}>
        <MenuItem onClick={handleClose}>
          <DropDownAvatar user={currentUser} id={currentUser.id} />
        </MenuItem>
        <MenuItem onClick={handleUserClick}>
          <DropDownAvatar user={unActiveUser} />
        </MenuItem>
      </Box>

      <Divider sx={theme.Divider} />
      <Box sx={theme.buttonsWrapper}>
        <CustomButton
          variant="text"
          text="Выход"
          handleClick={LogOut}
          textVariant="blue"
          style="BlueButton"
          disableRipple
        />
        <CustomButton
          variant="text"
          textVariant="not"
          style="BlueButton"
          handleClick={LogOut}
          disableRipple
        >
          <img src={ExitIcon} alt="ExitIcon" style={theme.img} />
        </CustomButton>
      </Box>
    </StyledMenu>
  );
};

export default DropDown;
