import { useEffect, useRef } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { SideBarrArr } from "./ListIcons";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { setNavNum } from "../../GlobalFuture/GlobalFutureSlice";
import * as theme from "./SideBarListThemes";

const SideBarList = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const firstListItemRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (firstListItemRef.current) {
      firstListItemRef.current.focus();
    }
  }, []);

  const handleItemClick = (index: number, page?: string) => {
    dispatch(setNavNum(index));
    if (page) {
      navigate(page);
    } else {
      navigate("/");
    }
  };

  const currentPath = location.pathname;

  let result: number;

  switch (currentPath) {
    case "/":
      result = 0;
      break;
    case "/schedule":
      result = 1;
      break;
    default:
      break;
  }

  return (
    <Box sx={theme.SideBarListWrapper}>
      <List sx={theme.List}>
        {SideBarrArr.map((e, index) => (
          <ListItem disablePadding key={e.id}>
            <ListItemButton
              disableRipple
              selected={index === result}
              onClick={() => handleItemClick(index, e.page)}
              sx={theme.ListItemButton}
            >
              <ListItemIcon sx={theme.ListItemIcon}>
                <img
                  src={e.img}
                  alt={e.description}
                  style={index === result ? theme.IconSize : {}}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={index === result ? theme.Text700 : theme.Text400}
                  >
                    {e.description}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBarList;
