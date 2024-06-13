export const Select = {
  width: "253px",
  height: "36px",
  color: "#79747F",
  background: "#FFFFFF",
  borderRadius: "8px",
  border: "1px solid #ECECEC",
  fontSize: "12px",
  lineHeight: "16.2px",
  backgroundColor: "none",

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #ECECEC",
  },
  ".MuiSvgIcon-root": {
    fontSize: "15px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #ECECEC",
  },
};
export const MenuItem = {
  fontSize: "12px",
  lineHeight: "16.2px",
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: "#ECECEC",
  },
  backgroundColor: "none",
  "&:hover": {
    color: "#79747F",
    background: "#ECECEC",
  },
  "&:active": {
    color: "#000000",
    background: "#ECECEC",
    backgroundColor: "none",
  },
};
