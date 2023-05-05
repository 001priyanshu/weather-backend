const express = require('express');
const router = express.Router();
const axios = require('axios');


const WEATHER_API_KEY = process.env.API;



router.post('/', async (req, res) => {
  
  const location = req.body.city;

  
  try {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${WEATHER_API_KEY}`
    );
    const weather = weatherResponse.data;
    const weatherDescription = weather.weather[0].description;
    const main = weather.main;
    // console.log(weather);

    res.send({ weatherDescription,main });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error getting weather data.' });
  }
});

module.exports = router;
