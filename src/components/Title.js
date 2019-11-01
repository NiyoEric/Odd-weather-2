import React, { Component } from "react";
import Convert from "../helpers/converters";
import Forecast from "./Forecast";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import NotFound from './404';

class Titles extends Component {
  render() {
    const { REACT_APP_ICON_URL: ICON_URL } = process.env;
    const { list, city } = this.props.data;
    
    return (
      <div>
        <h6>Odd Weather</h6>
        <Router>
            <Switch>
                <Route exact path="/forecast">
                    <div className="link-container">
                    <Link className="link" to="/">View Current Day Weather</Link>
                    </div>
                    <Forecast forecast={list} city={city} />
                </Route>
                <Route exact path="/">
                    <div className="link-container">
                    <Link  className="link" to="/forecast">View 5 Day Forecast</Link>
                    </div>
                    <div className="weatherGrid">
                    <div className="degree-span-row-2">
                        <h2>
                        {Convert.convertDegrees(!list ? "" : list[0].main.temp)}
                        &#176;C
                        </h2>
                    </div>
                    <div>
                        <p id="city">{city.name}</p>
                    </div>
                    <div id="icon">
                        <img
                        alt=""
                        src={`${ICON_URL}${!list ? "" : list[0].weather[0].icon}.png`}
                        />
                    </div>
                    <div>
                        <p id="date">{!list ? "" : list[0].dt_txt}</p>
                    </div>
                    <div>
                        <p>{!list ? "" : list[0].weather[0].main}</p>
                    </div>
                    </div>
                </Route>
                <Route exact path="*" component={NotFound} status={404}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default Titles;
