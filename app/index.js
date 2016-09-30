const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].split('(')[1].split(')')[0]
    });
});

app.listen(process.env.PORT); 