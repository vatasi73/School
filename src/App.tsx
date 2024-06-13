import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/GlobalThemes";
import AuthPage from "./pages/AuthPage";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SchedulePage from "./pages/SchedulePage";

import Layout from "./pages/Layout";
import { RequireAuth } from "./hoc/RequireAuth";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            maxWidth: "1440px",

            width: "100%",
            display: "flex",
            margin: "0 auto",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Layout />
                </RequireAuth>
              }
            >
              <Route
                index
                element={
                  <RequireAuth>
                    <MainPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/schedule"
                element={
                  <RequireAuth>
                    <SchedulePage />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="/authPage" element={<AuthPage />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
