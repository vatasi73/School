import { Box, Typography } from "@mui/material";
import RedMoney from "../../assets/RedMoney.svg";
import * as theme from "./SheduleLessonInfoThemes";
import { LessonInfo } from "./Schedule";
type Props = {
  isFuture: boolean;
  backgroundColor: string;
  borderColor: string;
  info: LessonInfo;
};

const SheduleLessonInfo = ({
  isFuture,
  backgroundColor,
  borderColor,
  info,
}: Props) => {
  return (
    <Box
      sx={[
        theme.LessonBox,
        {
          backgroundColor: isFuture ? "#D7F0D6" : backgroundColor,
          border: `solid 0.5px ${borderColor}`,
        },
      ]}
    >
      {info.notpaid && (
        <img src={RedMoney} alt="redMoney" style={theme.RerMomeySt} />
      )}
      <Typography
        sx={[
          theme.LessonTimeText,
          {
            textDecoration:
              info.lessonStatus === "canceled" ? "line-through" : "none",
          },
        ]}
      >
        {info.time}
      </Typography>
      <Typography
        sx={[
          theme.LessonNameText,
          {
            textDecoration:
              info.lessonStatus === "canceled" ? "line-through" : "none",
          },
        ]}
      >
        {info.lessonName}
      </Typography>
    </Box>
  );
};

export default SheduleLessonInfo;
