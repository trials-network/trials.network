import React from "react";
import { Link as RouterLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  bodyText: {
    marginLeft: 30,
    marginTop: 30
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <Button component={RouterLink} to="/" color="inherit">
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Typography variant="body1" className={classes.bodyText}>
          Here we could have some stats/charts
        </Typography>
      </main>
    </div>
  );
}
