import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import { selectLesson } from "../../GlobalFuture/GlobalFutureSelector";
import { setLesson } from "../../GlobalFuture/GlobalFutureSlice";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import * as theme from "./CustomSelectThemex";
const lessonItems = [
  { text: "Выбрать предмет" },
  { text: "Ментальная арифметика" },
  { text: "Скорочтение" },
  { text: "Программирование" },
];

const CustomSelect = () => {
  const dispatch = useAppDispatch();
  const lesson = useSelector(selectLesson);

  const handleLessonChange = (event: SelectChangeEvent<string>): void => {
    dispatch(setLesson(event.target.value));
  };

  return (
    <Select
      IconComponent={KeyboardArrowDownRoundedIcon}
      sx={theme.Select}
      value={lesson}
      onChange={handleLessonChange}
    >
      {lessonItems.map((e) => (
        <MenuItem value={e.text} key={e.text} disableRipple sx={theme.MenuItem}>
          {e.text}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
