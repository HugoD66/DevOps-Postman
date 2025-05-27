const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/status', function (request, response) {
    response.status(200).send();
});

app.get('/city', function (request, response) {
    const city = ['Paris', 'Bordeaux', 'Lyon', 'Strasbourg', 'Toulouse', 'Marseille'];
    response.json(city);
    response.end();
});

app.use(function (req, res, next) {
    res.status(404).send('Unable to find the requested resource!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});