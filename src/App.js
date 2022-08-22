import History from "./components/History";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Form from "./components/Form";
import Typography from "@mui/material/Typography";
import Amount from "./components/Amount";
import Display from "./components/Display";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import Snackbar from "./components/Snackbar";

function App() {
  const colorR = "#E6EBE0";
  const colorL = "#ffe8eb";

  return (
    <>
      <GlobalProvider>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            backgroundColor: colorL,
            height: "100vh",
            overflow: "auto",
            p: 0,
            m: 0,
          }}
        >
          <Grid xs={6} sx={{ height: "100%", overflow: "auto", p: 0 }}>
            <History sx={{ width: "100%" }} />
          </Grid>
          <Grid
            xs={6}
            sx={{
              backgroundColor: colorR,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{ marginBottom: "50px", marginTop: "50px" }}
              >
                Expensify
              </Typography>
              <Amount />
              <Display />
              <Form />
            </Box>
          </Grid>
        </Grid>
      </GlobalProvider>
      <Snackbar />
    </>
  );
}

export default App;
