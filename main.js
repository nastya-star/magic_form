const express = require('express');
const validateEmail = require('./scripts/validateEmail');
const validateUsername = require('./scripts/validateUsername');
const getDate = require('./scripts/getDate');
const app = new express();

app.use('/', express.static(__dirname + '/front/'));

app.use(express.json());

app.post('/', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const email = req.body.email;
    const username = req.body.username;

    if (!username || !email) 
        return res.status(201).json({error: 'There is an empty field!'});

    if (!validateEmail(email))
        return res.status(201).json({error: 'Your email is invalid!'});

    if (!validateUsername(username))
        return res.status(201).json({error: 'Your username is invalid!'});
    
    return res.status(200).json({
        username,
        email,
        date: getDate()
    });
    
});

app.listen(3000, () => console.log('The server runs on http://localhost:3000'));