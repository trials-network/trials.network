import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core";
import Shell from "./components/Shell";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  gender: {
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(2, 0)
  }
}));

export default function Dashboard() {
  const classes = useStyles(),
    [name, setName] = useState(""),
    [id, setId] = useState(""),
    [ethnicity, setEthnicity] = useState(""),
    [gender, setGender] = useState(null),
    handleGenderChange = (e: any) => setGender(e.target.value);

  return (
    <Shell>
      <Container maxWidth="sm" className={classes.container}>
        <form
          className={classes.form}
          noValidate
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
            console.log("submit");
            console.log({
              name,
              id,
              gender,
              ethnicity
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
            onChange={e => setName(e.target.value)}
            label="Name"
            helperText="Will be kept anonymous"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={id}
            onChange={e => setId(e.target.value)}
            label="ID"
          />
          <FormControl component="fieldset" className={classes.gender} required>
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
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={ethnicity}
            onChange={e => setEthnicity(e.target.value)}
            label="Ethnicity"
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
      </Container>
    </Shell>
  );
}
