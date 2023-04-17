import { Button } from "@mui/material";
import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Button variant="contained" color="primary">
                Teste
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
