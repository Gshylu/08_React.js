import React from 'react'

const Weathercard = ({tempInfo}) => {
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      } = tempInfo

  return (
    <article className="widget">
    <div className="weatherIcon">
      <i className={`wi-day-sunny`}></i>
    </div>

    <div className="weatherInfo">
      <div className="temperature">
        <span>25.5&deg;</span>
      </div>

      <div className="description">
        <div className="weatherCondition">cool</div>
        <div className="place">
          pune, india
        </div>
      </div>
    </div>

    <div className="date"> {new Date().toLocaleString()} </div>*/

    
    <div className="extra-temp">
      <div className="temp-info-minmax">
        <div className="two-sided-section">
          <p>
            <i className={"wi wi-sunset"}></i>
          </p>
          <p className="extra-info-leftside">
          19:19PM PM <br />
            Sunset
          </p>
        </div>

        <div className="two-sided-section">
          <p>
            <i className={"wi wi-humidity"}></i>
          </p>
          <p className="extra-info-leftside">
          19:19PM <br />
            Humidity
          </p>
        </div>
      </div>

      <div className="weather-extra-info">
        <div className="two-sided-section">
          <p>
            <i className={"wi wi-rain"}></i>
          </p>
          <p className="extra-info-leftside">
            19:19PM<br />
            Pressure
          </p>
        </div>

        <div className="two-sided-section">
          <p>
            <i className={"wi wi-strong-wind"}></i>
          </p>
          <p className="extra-info-leftside">
            19:19PM <br />
            Speed
          </p>
        </div>
      </div>
    </div>
  </article>
  )
}

export default Weathercard