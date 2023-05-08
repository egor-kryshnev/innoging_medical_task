import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { useDispatch } from "react-redux";
import { theme } from "./theme/Theme";
import logo from './logo.svg';
import './App.css';
import CanvasComponent from "./CanvasComponent/CanvasComponent";
import { initAppActionCreator } from "./store/actions/appActions/appActionsCreator";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadAndInit = async () => {
      await dispatch(initAppActionCreator());
    };
    loadAndInit();
  }, [dispatch])

  return (
    <>
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <CanvasComponent />
          </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
