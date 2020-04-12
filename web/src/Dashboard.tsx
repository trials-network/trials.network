import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core";
import Shell from "./components/Shell";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2)
  },
  title: {
    marginBottom: theme.spacing(1)
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Shell title="Dashboard">
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            color="primary"
            className={classes.title}
          >
            Patients
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Last Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Peter Smith</TableCell>
                <TableCell>Improving</TableCell>
                <TableCell align="right">April 2, 10:30 AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Unconfirmed</TableCell>
                <TableCell align="right">April 2, 10:15 AM</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Shell>
  );
}
