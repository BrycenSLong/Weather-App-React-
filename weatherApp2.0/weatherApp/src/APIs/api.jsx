import React, { useState, useEffect } from 'react'


function APIOptions({ daily }) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {

        fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=apparent_temperature_max,apparent_temperature_min&hourly=temperature_2m&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit')
            .then(res => {
                if(res.ok) {
                    console.log('SUCCESS')
                    return res.json();

                } else {
                    console.log("Not Successful")
                    throw new Error('Network response was not ok')

                }
            })
            .then(data => {
                console.log(data)
                setWeatherData(data)
            })
            .catch(error => console.log('ERROR', error))
}, []);

    return (
        <div className="weather-data">
            {weatherData ? (
                <div>
                    <p>Max Temperature: {weatherData.daily.apparent_temperature_max[daily]}°F</p>
                    <p>Min Temperature: {weatherData.daily.apparent_temperature_min[daily]}°F</p>
                </div>
            ) : (
                <p>Loading...</p>
        )}
        </div>
    )
}

export default APIOptions