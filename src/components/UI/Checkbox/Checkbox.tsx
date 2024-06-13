import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import * as theme from "./CheckboxThemes";

const CustomCheckbox = () => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox style={theme.Checkbox} />}
          label={
            <Typography sx={theme.CheckboxTypography}>
              Запомнить меня
            </Typography>
          }
        />
      </FormGroup>
    </>
  );
};

export default CustomCheckbox;
