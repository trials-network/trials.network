import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import subWeeks from "date-fns/subWeeks";
import subYears from "date-fns/subYears";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Shell from "./components/Shell";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const useStyles = makeStyles((theme) => ({
  container: {},
  paper: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  gender: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Dashboard() {
  const classes = useStyles(),
    [name, setName] = useState(""),
    [gender, setGender] = useState(null),
    [birthDate, setBirthDate] = useState(subYears(new Date(), 70)),
    [symptomsStartDate, setSymptomsStartDate] = useState(
      subWeeks(new Date(), 1)
    ),
    [hospitalizationDate, setHospitalizationDate] = useState(new Date()),
    [ethnicity, setEthnicity] = useState(""),
    [conditions, setConditions] = useState(""),
    [medications, setMedications] = useState(""),
    [allergies, setAllergies] = useState(""),
    handleGenderChange = (e: any) => setGender(e.target.value),
    handleBirthDateChange = (date: MaterialUiPickersDate | null) => {
      if (date) {
        setBirthDate(date);
      }
    },
    handleSymptomsStartDateChange = (date: MaterialUiPickersDate | null) => {
      if (date) {
        setSymptomsStartDate(date);
      }
    },
    handleHospitalizationDateChange = (date: MaterialUiPickersDate | null) => {
      if (date) {
        setHospitalizationDate(date);
      }
    };

  return (
    <Shell>
      <Container maxWidth="sm" className={classes.container}>
        <Paper className={classes.paper}>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("submit");
              console.log({
                name,
                gender,
                ethnicity,
                birthDate,
                symptomsStartDate,
                hospitalizationDate,
                conditions,
                medications,
                allergies
              });
              // TODO
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name and Surname"
              autoFocus
            />
            <FormControl
              component="fieldset"
              className={classes.gender}
              required
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div>
                <KeyboardDatePicker
                  margin="normal"
                  label="Birth Date (YYYY-MM-DD)"
                  format="yyyy-MM-dd"
                  inputVariant="outlined"
                  value={birthDate}
                  onChange={handleBirthDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </div>
              <div>
                <KeyboardDatePicker
                  margin="normal"
                  label="Symptoms Start Date (YYYY-MM-DD)"
                  format="yyyy-MM-dd"
                  inputVariant="outlined"
                  value={symptomsStartDate}
                  onChange={handleSymptomsStartDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </div>
              <div>
                <KeyboardDatePicker
                  margin="normal"
                  label="Hospitalization Date (YYYY-MM-DD)"
                  format="yyyy-MM-dd"
                  inputVariant="outlined"
                  value={hospitalizationDate}
                  onChange={handleHospitalizationDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </div>
            </MuiPickersUtilsProvider>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={ethnicity}
              onChange={(e) => setEthnicity(e.target.value)}
              label="Ethnicity"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={conditions}
              onChange={(e) => setConditions(e.target.value)}
              label="Pre-existing conditions"
              multiline
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={medications}
              onChange={(e) => setMedications(e.target.value)}
              label="Pre-existing medications"
              multiline
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              label="Allergies"
              multiline
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Patient
            </Button>
          </form>
        </Paper>
      </Container>
    </Shell>
  );
}
