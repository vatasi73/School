import React, { ChangeEvent, useState, memo, useCallback } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

import * as theme from "./InputThemes";

interface CustomInputProps {
  type: string;
  placeholder: string;
  isValid: (isValid: boolean) => void;
  validator: (value: string) => string | false;
  value: string;
  onChange: (value: string) => void;
}

const Input = memo<CustomInputProps>(
  ({ type, placeholder, isValid, validator, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | false>(false);

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const errorMessage = validator(newValue);
        setError(errorMessage);
        isValid(!errorMessage);
        onChange(newValue);
      },
      [validator, setError, isValid, onChange]
    );

    return (
      <TextField
        sx={theme.TextField}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        error={!!error}
        helperText={error}
        autoComplete="off"
        InputProps={
          type === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffOutlined sx={theme.VisibilityIcon} />
                      ) : (
                        <VisibilityOutlined sx={theme.VisibilityIcon} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />
    );
  }
);

export default Input;
