import React, { useState, useEffect } from "react";
import { HomePage } from "./home_main.jsx";
import { LoginPage } from "./LoginPage.jsx";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ROUTE_PATH } from "./routePath";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const theme = createTheme();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={ROUTE_PATH.HOME_PAGE} element={<LoginPage />} />
      </>
    )
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <RouterProvider router={router} />
          </StyledEngineProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
