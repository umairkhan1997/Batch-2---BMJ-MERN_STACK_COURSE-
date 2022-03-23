
// const http = require('http');
// // import http from 'http';

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     // statusCode 
//     // 200 - 299 - Success
//     // 300 - 399 - Moved // https://google.com/a ->https://google.com/b
//     // 400 - 499 - Unauthorized / Not Found
//     // 500 - 599 - Server Error

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');

//     if(req.url === '/') {
//         res.setHeader('Content-Type', 'application/json');
//         return res.end('<h1>Hello World</h1>')
//     }
//     if(req.url === '/bmj') {
//         return res.end('Hello BMJ Node JS Class')
//     }
//     console.log(req)
    
//     res.end('Invalid Request')
// })
// console.log('RUNNING SERVER on PORT ' + PORT)
// server.listen(PORT);

const express = require('express');
// var bodyParser = require('body-parser')
const app = express();
const PORT = 3001;

let users = [
    { name: 'User 1', id: 1},
    { name: 'User 2', id: 2},
    { name: 'User 3', id: 3},
    { name: 'User 4', id: 4},
]



// body parsing in json format;
const urlParser = express.json();
app.use(urlParser);

// if method === GET && URL === '/'

// app.use((req, res, next) => {
//     console.log('middleware',req.url);
//     if(req.url === '/bmj') {
//         return res.send('<h1>Hello From Nodejs Middleware</h1>')
//     }
//     req.testedInMiddleware = true;
//     next();
// });

// app.use((req, res, next) => {
//     console.log('inside second middleware',req.url);
//     next();
// });

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('<h1>Hello World</h1>');
})

app.get('/bmj', (req, res) => {
    console.log('inside /bmj route')
    res.statusCode = 200;
    res.send('Hello BMJ');
})


app.get('/users', (req, res) => {
    console.log(req.testedInMiddleware);
    res.statusCode = 200;
    res.json(users);
});


// if method === GET && URL === '/users/:id'
app.get('/users/:id', (req, res) => {
    res.statusCode = 200;
    const user = users.find((usr) => usr.id === parseInt(req.params.id));
    if(!user) {
        return res.send(`<h1>User ${req.params.id} Not Found</h1>`)
    }
    res.json(user)
})
// if method === DELETE && URL === '/users/:id'
app.delete('/users/:id', (req, res) => {
    res.statusCode = 200;
    const filterUser = users.filter((usr) => usr.id !== parseInt(req.params.id));
    users = filterUser;
    res.send('<h1>User Delete Successfully</h1>')
})


app.post('/create-user', ( req, res ) => {
    if(req.body.name) {
        res.statusCode = 201;
        const newUser = users.length + 1;
        users.push({ 
            name: req.body.name , 
            id: newUser
        })
    
        res.send('<h1>User Created Successfully</h1>')
    } else {
        res.statusCode = 400;
        res.send('<h1>Name Field is Missing</h1>')
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
 })
