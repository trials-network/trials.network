import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Shell from "./components/Shell";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Shell>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="body1">
          TODO
        </Typography>
      </Container>
    </Shell>
  );
}
