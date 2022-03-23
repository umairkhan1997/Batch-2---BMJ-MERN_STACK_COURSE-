
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
var morgan = require('morgan')
const fs = require('fs');
var cors = require('cors')
// var bodyParser = require('body-parser')
const app = express();
const PORT = 3001;

let users = [
    { 
        id: 1, 
        name: 'User 1', 
        email: 'user1@gmail.com', 
        age: 12,
        skills: ['javascript']
    },
    { 
        name: 'User 2', 
        id: 2, 
        email: 'user2@gmail.com',
         age: 22, 
         skills: []},
    { name: 'User 3', id: 3, email: 'user3@gmail.com', age: 32, skills: ['javascript', 'react']},
    { name: 'User 4', id: 4, email: 'user4@gmail.com', age: 42, skills: []},
]


// fs.readFile('./index.html', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// fs.writeFile('./app.js', 'var a = 10;', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data)
//     }
// });

// fs.writeFileSync('./in.html', 'var a = 10;')

// try {
//     const data = fs.readFileSync('./in.html', 'utf-8');
//     console.log(data)
// } catch (error) {
//     console.log(error.message)
// }

// app.use(cors());
console.log('File Read')
// body parsing in json format;
app.use(express.static('public'));

const bodyParser = express.json();
app.use(morgan('combined'))
app.use(bodyParser);


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

// app.use(function (req, res, next) {
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.ip)
//     next();
// })

app.post('/create-file', (req, res) => {
    const body = req.body;
    fs.writeFile(`./public/${body.filename}`, body.data, (err, data) => {
        if(err) {
            res.send(err);
        } else {
            res.send({
                message: 'File Created',
                url: 'http://localhost:3001/'+body.filename
            })
        }
    })
})

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
    // console.log(req.testedInMiddleware);
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
    console.log(req.body)
    if(!req.body.name || !req.body.email ||  !req.body.age) {
        res.statusCode = 400;
        res.send({
            error: 'Missing some required field.',
            message: 'fail',
            data: null
        })
    } else {
        res.statusCode = 201;
        const newUserId = users.length + 1;
        const newUser = { 
            name: req.body.name, 
            email: req.body.email, 
            age: req.body.age,
            skills: req.body.skills || [],
            id: newUserId
        }
        users.push(newUser)
    
        res.send({
            error: null,
            message: 'success',
            data: {
                user: newUser
            }
        })
    }
})

app.patch('/users/:id', (req, res) => {
    const body = req.body;
    const userId = parseInt(req.params.id);
    const idx = users.findIndex((user) => user.id === userId);

    if(idx === -1) {
        res.statusCode = 401
        res.send({
            error: 'User Not Found!',
            message: 'fail',
            data: null
        })
    } else {
        const user = users[idx];
        const newUser = {
            name: body.name || user.name,
            email: body.email || user.email,
            age: body.age || user.age,
            skills: body.skills || user.skills,
            id: user.id
        }

        users.splice(idx, 1, newUser);
        res.statusCode = 201
     
        return res.send({
            error: null,
            message: 'success',
            data: {
                user: newUser
            }
        })
    }

})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
 })


