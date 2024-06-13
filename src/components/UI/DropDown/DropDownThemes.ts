import { Menu, styled } from "@mui/material";

export const StyledMenu = styled(Menu)(({ theme }) => ({
  top: 50,
  left: -124,
  "& .MuiPaper-root": {
    paddingLeft: "27px",
    paddingRight: "27px",
    paddingTop: "26px",

    overflow: "visible",
    borderRadius: "10px",
    marginTop: theme.spacing(0.4),
    minWidth: 250,
    minHeight: "262px",

    border: "1px solid #7362BC",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      display: "flex",
      justifyContent: "space-between",
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "rgba(98, 18, 255, 1)",
      },
      "&:active": {
        width: "190px",
        borderRadius: "12px",
        backgroundColor: "#EEEEFF",
      },
      "&:hover": {
        width: "190px",
        borderRadius: "12px",
        backgroundColor: "#EEEEFF",
      },
    },
  },
}));

export const ArrowDropUpIcon = {
  fontSize: "32px",
  position: "absolute",
  top: -45,
  right: 0,
  color: "#7362BC",
};
export const ButtonCloseIcon = {
  background: "none",
  padding: "0px",
  minWidth: "0px",
  cursor: "pointer",
  position: "absolute",
  top: "-16px",
  right: "-13px",
  fontSize: "16px",
  color: "#7362BC",
  "&:hover": {
    background: "none",
  },
};
export const ChangeUserText = {
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: "21.6px",
  color: "#323854",
  marginBottom: "16px",
};
export const MenuItemWrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  marginLeft: "-2px",
  marginBottom: "16px",
};
export const CloseIcon = { width: "18px" };
export const img = { paddingLeft: "26px" };
export const buttonsWrapper = {
  width: "190px",
  display: "flex",
  justifyContent: "space-between",
  gap: "96px",
  marginTop: "20px",
};
export const Divider = { color: "#EEEEFF" };
