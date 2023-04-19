import { Button } from "@mui/material";
import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export const AppRoutes: React.FC = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Button onClick={toggleTheme} variant="contained" color="primary">
                ToggleTheme
              </Button>
            }
          />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/errandsList" element={<ListaRecados />} /> */}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AppRoutes;
