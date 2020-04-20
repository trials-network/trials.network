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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
}));

export default function SignIn() {
  const classes = useStyles(),
    [validate, setValidate] = useState(false),
    [institutionName, setInstitutionName] = useState(""),
    [addressLine1, setAddressLine1] = useState(""),
    [addressLine2, setAddressLine2] = useState(""),
    [postcode, setPostcode] = useState(""),
    [country, setCountry] = useState(""),
    [responsiblePerson, setResponsiblePerson] = useState(""),
    [workEmail, setWorkEmail] = useState(""),
    [phoneNumber, setPhoneNumber] = useState(""),
    institutionNameHasError = institutionName.trim().length === 0,
    addressLine1HasError = addressLine1.trim().length === 0,
    countryHasError = country.trim().length === 0,
    responsiblePersonHasError = responsiblePerson.trim().length === 0,
    workEmailHasError = workEmail.trim().length === 0,
    phoneNumberHasError = phoneNumber.trim().length === 0;

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
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();

            if (
              !institutionNameHasError &&
              !addressLine1HasError &&
              !countryHasError &&
              !responsiblePersonHasError &&
              !workEmailHasError &&
              !phoneNumberHasError
            ) {
              console.log("submit", {
                institutionName,
                addressLine1,
                addressLine2,
                postcode,
                country,
                responsiblePerson,
                workEmail,
                phoneNumber,
              });
              return;
            }

            setValidate(true);
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
            label="Institution Name"
            autoFocus
            error={validate && institutionNameHasError}
            helperText={
              validate && institutionNameHasError
                ? "Please provide institution name"
                : null
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            label="Address Line 1"
            autoComplete="address-line1"
            error={validate && addressLine1HasError}
            helperText={
              validate && addressLine1HasError
                ? "Please provide institution address"
                : null
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            label="Address Line 2"
            autoComplete="address-line2"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            label="Post Code"
            autoComplete="postal-code"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="Country"
            autoComplete="country-name"
            error={validate && countryHasError}
            helperText={
              validate && countryHasError
                ? "Please provide country where the institution is based"
                : null
            }
          />
          <Divider variant="middle" className={classes.divider} />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={responsiblePerson}
            onChange={(e) => setResponsiblePerson(e.target.value)}
            label="Responsible Person"
            error={validate && responsiblePersonHasError}
            helperText={
              validate && responsiblePersonHasError
                ? "Please provide the full name of the responsible person"
                : null
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={workEmail}
            onChange={(e) => setWorkEmail(e.target.value)}
            label="Work Email"
            autoComplete="email"
            error={validate && workEmailHasError}
            helperText={
              validate && workEmailHasError
                ? "Please provide the work email address of the responsible person"
                : null
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            label="Phone Number"
            autoComplete="tel"
            error={validate && phoneNumberHasError}
            helperText={
              validate && phoneNumberHasError
                ? "Please provide the phone number of the responsible person"
                : null
            }
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
