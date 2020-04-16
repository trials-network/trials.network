import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
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
  ethnicityControl: {
    marginTop: theme.spacing(1),
    minWidth: 120,
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Dashboard() {
  const classes = useStyles(),
    [validate, setValidate] = useState(false),
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
    nameHasError = name.trim().length === 0,
    genderHasError = gender === null,
    ethnicityHasError = ethnicity === "",
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
    },
    handleEthnicityChange = (e: any) => setEthnicity(e.target.value),
    handleConditionsChange = (e: any) => setConditions(e.target.value),
    handleMedicationsChange = (e: any) => setMedications(e.target.value),
    handleAllergiesChange = (e: any) => setAllergies(e.target.value);

  return (
    <Shell title="Add a Patient">
      <Container maxWidth="sm" className={classes.container}>
        <Paper className={classes.paper}>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();

              if (!nameHasError && !genderHasError && !ethnicityHasError) {
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
                  allergies,
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name and Surname"
              autoFocus
              error={validate && nameHasError}
              helperText={
                validate && nameHasError
                  ? "Please provide patient's name and surname"
                  : null
              }
            />
            <FormControl
              component="fieldset"
              className={classes.gender}
              error={validate && genderHasError}
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
              {validate && genderHasError ? <FormHelperText>Please provide patient's gender</FormHelperText> : null}
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
            <FormControl
              variant="outlined"
              className={classes.ethnicityControl}
              required
              error={validate && ethnicityHasError}
            >
              <InputLabel htmlFor="ethnicity">Ethnicity</InputLabel>
              <Select
                native
                value={ethnicity}
                onChange={handleEthnicityChange}
                label="Ethnicity"
                inputProps={{
                  id: "ethnicity",
                }}
              >
                <option aria-label="Select" value="" />
                <option>Asian</option>
                <option>Black</option>
                <option>Mixed</option>
                <option>Other</option>
                <option>White</option>
              </Select>
              {validate && ethnicityHasError ? <FormHelperText>Please provide patient's ethnicity</FormHelperText> : null}
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={conditions}
              onChange={handleConditionsChange}
              label="Pre-existing conditions"
              multiline
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={medications}
              onChange={handleMedicationsChange}
              label="Pre-existing medications"
              multiline
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              value={allergies}
              onChange={handleAllergiesChange}
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
