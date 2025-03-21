import React from 'react';
import './App.css';
import './APIs/api.jsx';
import APIOptions from './APIs/api.jsx';



function App() {

  const today = new Date()

  const dateFormatter = new Intl.DateTimeFormat("en-us", {
    weekday: "long",
    day: "numeric",
  })

  function DisplayDate(date) {
    return dateFormatter.format(date)
  }

  function AddDays(date, days) {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result;
  }

  return (
    <div className="App">
      <nav className="Navbar">
        <h1>Weather App</h1>
        <ul>
          <a href="#">Sign In</a>
          <a href="#">Location</a>
        </ul>
      </nav>

      <div className="main-container">
        <div className="left-half">
          <div className="week-list">
            <h1>Forecast for this week</h1>
            <ol className="week-list-days">
              <li>
                {DisplayDate(today)}
                <div className="temp">
                  <APIOptions  daily={0} />
                </div>
              </li>
              <li>
                {DisplayDate(AddDays(today, 1))}
                <div className="temp">
                <APIOptions  daily={1} />
                </div>
              </li>
              <li>
                {DisplayDate(AddDays(today, 2))}
                <div className="temp">
                <APIOptions  daily={2} />
                </div>
              </li>
              <li>
                {DisplayDate(AddDays(today, 3))}
                <div className="temp">
                <APIOptions  daily={3} />
                </div>
              </li>
              <li>
                {DisplayDate(AddDays(today, 4))}
                <div className="temp">
                <APIOptions  daily={4} />
                </div>
              </li>
              <li>
                {DisplayDate(AddDays(today, 5))}
                <div className="temp">
                <APIOptions  daily={5} />
                </div>
              </li>
              <li>
                {DisplayDate(AddDays(today, 6))}
                <div className="temp">
                <APIOptions  daily={6} />
                </div>
              </li>
            </ol>
          </div>
        </div>










        <div className="right-half">
          <div className="radar">
            <h1>This section is for the weather radar</h1>
          </div>

          <div className="map">
            <h1>Plan your route map!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
