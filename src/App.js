import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import RegisterPage from './pages/auth/register/register.component'
import LoginPage from './pages/auth/login/login.component'
import Payment from "./components/payment/payment.component";
import SubmitProgress from "./components/submitProgress/submitProgress.component";
import ConfirmationPage from "./pages/Confirmation/confirmation.component";
import './App.css'


class App extends React.Component{
  
render () {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign-in" component={LoginPage} />
        <Route path="/sign-up" component={RegisterPage} />
        <Route path="/payment" component={Payment} />
        <Route path="/welcome" component={SubmitProgress} />
        <Route path="/confirmation" component={ConfirmationPage} />
      </Switch>
    </div>
  );
}

}

export default App;
