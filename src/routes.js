import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import NotFound from  './components/404';
// import Forecast from './components/Forecast';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/forecast" component={App}></Route>
                <Route exact path="/" component={App}></Route>
                <Route exact path="*" component={NotFound} status={404}/>
            </Switch>
        </Router>
    );
};

export default Routers;