import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(2, 0)
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register Institution
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address1"
            label="Address Line 1"
            id="address1"
            autoComplete="address-line1"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="address2"
            label="Address Line 2"
            id="address2"
            autoComplete="address-line2"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="postcode"
            label="Post Code"
            id="postcode"
            autoComplete="postal-code"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="country"
            label="Country"
            id="country"
            autoComplete="country-name"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Link to="/" component={RouterLink} variant="body2">
            Go to Sign In instead
          </Link>
        </form>
      </Paper>
    </Container>
  );
}
