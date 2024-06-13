export const SideBarListWrapper = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
  background: "#EEEEFF",
  paddingRight: "20px",
  marginBottom: "48px",
};
export const List = { padding: "0px" };
export const ListItemButton = {
  display: "flex",
  alignItems: "center",
  paddingBottom: "5.5px",
  paddingTop: "5.5px",
  color: "#434B74",
  borderRadius: "0 30px 30px 0",
  "&.Mui-selected": {
    color: "#FFFFFF",
    backgroundColor: "#8D7FC7",
    borderRadius: "0 30px 30px 0",
    "&:hover": {
      backgroundColor: "#8D7FC7",
    },
  },
  "&:hover": {
    backgroundColor: "inherit",
  },
};
export const ListItemIcon = {
  paddingLeft: "31px",
  marginRight: "4px",
  color: "red",
};
export const IconSize = { width: "24px" };
export const Text400 = {
  color: "#434B74",
  fontSize: "16px",
  lineHeight: "21px",
};
export const Text700 = {
  paddingLeft: "4px",
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "21px",
};
