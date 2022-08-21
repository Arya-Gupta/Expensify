import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import HistoryContents from "./HistoryContents";
import Paper from "@mui/material/Paper";
import RestoreIcon from "@mui/icons-material/Restore";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const colorSubtract = "#9BC1BC";
  const colorAdd = "#ED6A5A";
  const colorH = "#2b2d42";

  return (
    <React.Fragment>
      <Paper
        sx={{
          width: "100%",
          height: "5rem",
          position: "sticky",
          top: "0",
          zIndex: "1",
          backgroundColor: colorH,
          color: "white",
        }}
        elevation={10}
      >
        <Toolbar sx={{ width: "30%", margin: "auto" }}>
          <RestoreIcon />
          <Typography variant="h6" component="div" sx={{ marginX: "10px" }}>
            History
          </Typography>
        </Toolbar>
      </Paper>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ marginBottom: "50px" }}>
          <HistoryContents colorAdd={colorAdd} colorSubtract={colorSubtract} />
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
