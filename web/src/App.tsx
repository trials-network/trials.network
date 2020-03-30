import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import lightBlue from "@material-ui/core/colors/lightBlue";
import SignIn from "./SignIn";
import RegisterInstitution from './RegisterInstitution';
import Dashboard from './Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: lightBlue
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
        <Route path="/register-institution">
            <RegisterInstitution />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
