import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes/Light";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={LightTheme}>
        {/* <CssBaseline /> */}
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
