<<<<<<< HEAD
import React, { Component } from "react";
import Convert from "../helpers/converters";

class Details extends Component {
=======
import React, { Component } from 'react';
import convertDegrees from '../helpers';

class Details extends Component {

>>>>>>> feature(styling): Grid styling - Improve UI Design as well as remove hard coded lines in the title component  - [Finishes #169230868]
  render() {
    const { error, data } = this.props.state;
    return (
      <div className="weather-details-container">
        <div className="weather-details">
<<<<<<< HEAD
          {error ? (
            <p className="weather-detail-header">{error}</p>
          ) : (
            <React.Fragment>
              <p className="weather-detail-header">Weather Details</p>
              <div className="weather-detail-data">
                <p>Clouds</p>
                <p className="details-data">{data.list[0].clouds.all}%</p>
              </div>
              <div className="weather-detail-data">
                <p>Wind</p>
                <p className="details-data">{data.list[0].wind.speed}km/h</p>
              </div>
              <div className="weather-detail-data">
                <p>Humidity</p>
                <p className="details-data">{data.list[0].main.humidity}%</p>
              </div>
              <div className="weather-detail-data">
                <p>Temp</p>
                <p className="details-data">
                  {Convert.convertDegrees(data.list[0].main.temp)}°C
                </p>
              </div>
              <div className="weather-detail-data">
                <p>Max temp</p>
                <p className="details-data">
                  {Convert.convertDegrees(data.list[0].main.temp_max)}°C
                </p>
              </div>
              <div className="weather-detail-data">
                <p>Max temp</p>
                <p className="details-data">
                  {Convert.convertDegrees(data.list[0].main.temp_min)}°C
                </p>
              </div>
            </React.Fragment>
          )}
=======
        {
          error ? <p className="weather-detail-header">{ error }</p>
          :
          <React.Fragment>
            <p className="weather-detail-header">Weather Details</p>
            <div className="weather-detail-data">
              <p>Clouds</p>
              <p className="details-data">{data.list[0].clouds.all}%</p>
            </div>
            <div className="weather-detail-data">
              <p>Wind</p>
              <p className="details-data" >{data.list[0].wind.speed}km/h</p>
            </div>
            <div className="weather-detail-data">
              <p>Humidity</p>
              <p className="details-data" >{data.list[0].main.humidity}%</p>
            </div>
            <div className="weather-detail-data">
              <p>Temp</p>
              <p className="details-data" >{convertDegrees(data.list[0].main.temp)}°C</p>
            </div>
            <div className="weather-detail-data">
              <p>Max temp</p>
              <p className="details-data" >{convertDegrees(data.list[0].main.temp_max)}°C</p>
            </div>
            <div className="weather-detail-data">
              <p>Max temp</p>
              <p className="details-data" >{convertDegrees(data.list[0].main.temp_min)}°C</p>
            </div>
          </React.Fragment>
        }
>>>>>>> feature(styling): Grid styling - Improve UI Design as well as remove hard coded lines in the title component  - [Finishes #169230868]
        </div>
      </div>
    );
  }
}

export default Details;
