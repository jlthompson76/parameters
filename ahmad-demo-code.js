// Demo code presented by Ahmad during class

const express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.send('Hello World! This is a simple text which was sent through .send() method')
});

app.get('/profile/:username', (request, response) => {
    const parameters = request.params;
    console.log("This is the URL I got:" + request.url);
    console.log("These are the parameters I have:" + parameters);
    const provided_user_name = parameters.username;
    console.log("User on my website is:" + provided_user_name);
    response.render('index', {
        'name': provided_user_name
    })
});

const PORT = 3000;
app.listen(PORT, () => {console.log(`Server is up at ${PORT}`)});

// The corresponding HTML code in index.ejs is:
// <h1> Hello </h1> <%= name %>
