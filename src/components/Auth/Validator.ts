export const passwordValidator = (value: string) => {
  if (value.length < 8) return "Не менее 8 символов";
  return false;
};
export const emailValidator = (value: string) => {
  if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
    return "Невалидный Email";
  return false;
};
