import React, { useState, useEffect } from "react";
import { HomePage } from "./HomePage";
import { NavBar } from "./NavBar";
import { CreatePage } from "./CreatePage";
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
        <Route path={ROUTE_PATH.HOME_PAGE} element={<HomePage />} />
        <Route path={ROUTE_PATH.CREATE_PAGE} element={<CreatePage />} />
      </>
    )
  );

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <NavBar />
            <StyledEngineProvider injectFirst>
              <RouterProvider router={router} />
            </StyledEngineProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
  );
}

export default App;
