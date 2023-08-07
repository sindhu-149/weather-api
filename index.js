// const express = require('express')
// const app = express()
// const axios = require('axios')
// require('dotenv').config()

// const API_KEY = process.env.API_KEY
// const port = 3033
// app.use(express.static(__dirname + '/public'));

// app.get('/', async(req, res) => {
//     const address = req.query.address
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${API_KEY}&units=metric`

//     try {
//         const response = await axios.get(url);
//         const data = response.data;
//         const cityName = data.name;
//         const temperature = data.main.temp;
//         const weatherData = {
//             cityName: cityName,
//             temperature: temperature
//         };
//         res.send(weatherData);
//     } catch (error) {
//         console.error(error);
//         res.send({ error: 'Error occurred' });
//     }
// })

// app.listen(port, () => {
//     console.log(`server is listening on port ${port}`);
// })

const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const port = 3033;

app.use(express.static(__dirname + '/public')); // Serve static files from 'public' directory

app.get('/weather', async (req, res) => {
    const address = req.query.address;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherData = {
            cityName: cityName,
            temperature: temperature
        };
        res.send(weatherData);
    } catch (error) {
        console.error(error);
        res.send({ error: 'Error occurred' });
    }
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

