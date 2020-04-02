import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
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
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
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
  const classes = useStyles(),
    [institutionName, setInstitutionName] = useState(""),
    [addressLine1, setAddressLine1] = useState(""),
    [addressLine2, setAddressLine2] = useState(""),
    [postcode, setPostcode] = useState(""),
    [country, setCountry] = useState(""),
    [responsiblePerson, setResponsiblePerson] = useState(""),
    [workEmail, setWorkEmail] = useState(""),
    [phoneNumber, setPhoneNumber] = useState("");

  // TODO - validation

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register Institution
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
            console.log("submit", {
              institutionName,
              addressLine1,
              addressLine2,
              postcode,
              country,
              responsiblePerson,
              workEmail,
              phoneNumber
            });

            // TODO
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={institutionName}
            onChange={e => setInstitutionName(e.target.value)}
            label="Institution Name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={addressLine1}
            onChange={e => setAddressLine1(e.target.value)}
            label="Address Line 1"
            autoComplete="address-line1"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={addressLine2}
            onChange={e => setAddressLine2(e.target.value)}
            label="Address Line 2"
            autoComplete="address-line2"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={postcode}
            onChange={e => setPostcode(e.target.value)}
            label="Post Code"
            autoComplete="postal-code"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={country}
            onChange={e => setCountry(e.target.value)}
            label="Country"
            autoComplete="country-name"
          />
          <Divider variant="middle" className={classes.divider} />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={responsiblePerson}
            onChange={e => setResponsiblePerson(e.target.value)}
            label="Responsible Person"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={workEmail}
            onChange={e => setWorkEmail(e.target.value)}
            label="Work Email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            label="Phone Number"
            autoComplete="tel"
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
