import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <AppThemeProvider>
      <div className="App">
        <CssBaseline />
        <AppRoutes />
      </div>
    </AppThemeProvider>
  );
}

export default App;
