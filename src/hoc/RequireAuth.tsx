import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectUserIsAuth } from "../components/UI/Input/InputFeature/inputSelectors";
import { ReactNode } from "react";
interface Iprops {
  children: ReactNode;
}
const RequireAuth = ({ children }: Iprops) => {
  const location = useLocation();
  const userIsAuth = useSelector(selectUserIsAuth);
  if (!userIsAuth) {
    return <Navigate to="/authPage" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
