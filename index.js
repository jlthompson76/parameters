const express = require('express');
let app = express();
app.set('view engine', 'ejs');

// app.get('/', (request, response) => {
//     response.render('index');
// });

let PORT = 3000;

app.listen(PORT, () => {console.log('The server is running')});

app.get('/profile/:name', (request, response) => {
    const params = request.params; // This is an object
    const username = params.name; // OR params[‘name’]
    response.render('index', {
        'name': username
    })
}); 
