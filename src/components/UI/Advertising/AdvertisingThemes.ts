import { Properties } from "csstype";

type ImgStyle = Properties<string | number>;

export const RounderBoxStyle = {
  position: "relative",
  borderRadius: "15px",
  padding: "16px 16px 10px 16px",
  background: "#FDFDFF",
  margin: "0px 20px 24px 20px",
};
export const Title = {
  fontSize: "15px",
  fontWeight: 700,
  color: "#323854",
  textAlign: "left",
  marginBottom: "4px",
};
export const SubTitle = {
  fontSize: "10px",
  fontWeight: 300,
  lineHeight: "12px",
  color: "#323854",
  textAlign: "left",
  marginBottom: "10px",
};

export const img: ImgStyle = {
  position: "absolute",
  bottom: "0px",
  right: "0px",
  borderRadius: "0 0 15px 0",
};
