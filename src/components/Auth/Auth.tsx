import { useState, useRef, useEffect, useCallback, memo } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../UI/Logo/Logo";
import Input from "../UI/Input/Input";
import * as theme from "./AuthThemes";
import CustomCheckbox from "../UI/Checkbox/Checkbox";
import CustomButton from "../UI/Button/CustomButton";
import CustomLink from "../UI/CustomLink/CustomLink";
import TranslationButton from "../UI/TranslationButton/TranslationButton";
import { useAppDispatch } from "../../store";
import {
  setAuthStatus,
  setEmail,
  setIsFormValid,
  setPassword,
} from "../UI/Input/InputFeature/inputSlice";
import {
  selectEmail,
  selectFormIsValid,
  selectPassword,
  selectUserIsAuth,
} from "../UI/Input/InputFeature/inputSelectors";
import { useSelector } from "react-redux";
import { emailValidator, passwordValidator } from "./Validator";
import { useNavigate } from "react-router-dom";

const linkChildren = ["Я забыл пароль", "Войти как тренер"];
const TranslateButtonArr = [
  { name: "RU", value: 1 },
  { name: "EN", value: 2 },
];

const Auth = memo(() => {
  const [activeButton, setActiveButton] = useState(1);

  const dispatch = useAppDispatch();

  const password = useSelector(selectPassword);
  const isFormValid = useSelector(selectFormIsValid);
  const userIsAuth = useSelector(selectUserIsAuth);
  const email = useSelector(selectEmail);

  const navigate = useNavigate();

  const formValid = useRef({ password: false, email: false });
  const handleButtonClick = useCallback(
    (buttonNumber: number) => {
      if (activeButton !== buttonNumber) {
        setActiveButton(buttonNumber);
      }
    },
    [activeButton]
  );
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Object.values(formValid.current).every((isValid) => isValid)) {
      dispatch(setIsFormValid(true));
      Login();
    } else {
      alert("Форма не валидна! Пожалуйста проверьте поля ввода...");
    }
  };

  const updateEmail = useCallback(
    (e: string) => {
      dispatch(setEmail(e));
    },
    [dispatch]
  );

  const updatePassword = useCallback(
    (e: string) => {
      dispatch(setPassword(e));
    },
    [dispatch]
  );

  const Login = () => {
    dispatch(setAuthStatus());
  };
  useEffect(() => {
    if (userIsAuth === true) {
      navigate("/");
    }
  }, [userIsAuth, navigate]);
  useEffect(() => {
    dispatch(setIsFormValid(false));
  }, [password, email, dispatch]);

  const validateEmail = useCallback((isValid: boolean) => {
    formValid.current.email = isValid;
  }, []);

  const validatePassword = useCallback((isValid: boolean) => {
    formValid.current.password = isValid;
  }, []);
  return (
    <Box sx={theme.AuthWrapper}>
      <Box sx={theme.LogoWrapper}>
        <Logo width="80px" />
      </Box>
      <Typography variant="h1" sx={theme.AuthTtle}>
        Вход в Sirius Future
      </Typography>
      <Box sx={theme.AuthInputWrapper}>
        <Input
          value={email}
          type="email"
          placeholder="E-mail"
          validator={emailValidator}
          isValid={validateEmail}
          onChange={(value) => updateEmail(value)}
        />
        <Input
          value={password}
          type="password"
          placeholder="Пароль"
          validator={passwordValidator}
          isValid={validatePassword}
          onChange={(value) => updatePassword(value)}
        />
        {isFormValid && (
          <Typography sx={theme.WrongMailPassText}>
            Вы ввели неверный Email и/или пароль
          </Typography>
        )}
      </Box>
      <Box sx={theme.CustomCheckboxWrapper}>
        <CustomCheckbox />
      </Box>
      <CustomButton
        maxWidth="339px"
        height="48px"
        variant="contained"
        style="contained"
        handleClick={handleSubmit}
        text="Войти"
        textVariant="bold18"
      />
      <Box sx={theme.linkChildrenWrapper}>
        {linkChildren.map((e: string) => (
          <CustomLink key={e}>{e}</CustomLink>
        ))}
      </Box>
      <Box sx={theme.BottomLinkWrapper}>
        <Typography sx={theme.NoAccountText}>Нет аккаунта?</Typography>
        <CustomLink>Зарегистрироваться</CustomLink>
      </Box>
      <Box sx={theme.TranslateButtonWrapper}>
        {TranslateButtonArr.map((e) => (
          <TranslationButton
            key={e.value}
            active={activeButton === e.value}
            handleClick={() => handleButtonClick(e.value)}
            name={e.name}
          />
        ))}
      </Box>
    </Box>
  );
});

export default Auth;
