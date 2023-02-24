import History from "./components/History";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TransactionForm from "./components/TransactionForm";
import Typography from "@mui/material/Typography";
import Amount from "./components/Amount";
import Display from "./components/Display";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import ModeSwitch from "./components/ModeSwitch";
import { useState } from "react";

function App() {
  const theme = {
    dark: {
      right: "#212529",
      left: "#042743",
      text: "white",
      symbol: "black",
      add: "#3e6963",
      subtract: "#782218",
    },
    light: {
      right: "#E6EBE0",
      left: "#ffe8eb",
      text: "black",
      symbol: "gray",
      add: "rgb(155, 193, 188)",
      subtract: "rgb(237, 106, 90)",
    },
  };

  const [mode, setMode] = useState("light");
  const [activeTheme, setTheme] = useState(theme.light);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTheme(theme.dark);
    } else {
      setMode("light");
      setTheme(theme.light);
    }
  };

  return (
    <>
      <GlobalProvider>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            backgroundColor: activeTheme.left,
            height: "100vh",
            overflow: "auto",
            p: 0,
            m: 0,
          }}
        >
          <Grid xs={6} sx={{ height: "100%", overflow: "auto", p: 0 }}>
            <History sx={{ width: "100%" }} theme={activeTheme} />
          </Grid>
          <Grid
            xs={6}
            sx={{
              backgroundColor: activeTheme.right,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Box onClick={toggleMode}>
                <ModeSwitch />
              </Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  marginBottom: "50px",
                  marginTop: "50px",
                  color: activeTheme.text,
                }}
              >
                Expensify
              </Typography>
              <Amount theme={activeTheme} />
              <Display />
              <TransactionForm theme={activeTheme} />
            </Box>
          </Grid>
        </Grid>
      </GlobalProvider>
    </>
  );
}

export default App;
