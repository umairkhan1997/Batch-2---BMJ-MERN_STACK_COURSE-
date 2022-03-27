const express = require('express');
const db = require('./db')
const app = express();
const PORT = 3000;
const Product = require('./models/products/model');
const User = require('./models/users/model');
const { comparePassword } = require('./helpers/password');
// tables  - collections
// rows - document
// column - field
// const product = {
//     name: "products 2",
//     category: "xyz",
//     price: "123",
//     currency: "pkr",
//     discount: 50
// };

// const newProduct = new Product(product);
// newProduct.discountedPrice = newProduct.getPrice();
// newProduct.save();
// console.log('connected', newProduct.getPrice())


// const users = [
//     {
//         id:'0983490 8934083490',
//         fullName: "Bill Gates",
//         position: "Founder Microsoft",
//         salary: ""
//     },
//     {
//         id:'0983490 8934083490',
//         fullName: "Bill Gates",
//         position: "Founder Microsoft",
//     },
//     // {
//     //     "name": "user 1",
//     //     age: 1,
//     //     verified: true,
//     //     "skills": [],
//     //     "location": {
//     //         lat: 13.32353,
//     //         lng: 84.98340934
//     //     }
//     // }
// ]

const bodyParser = express.json();
app.use(bodyParser);

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('<h1>Hello world</h1>')
})


app.get('/products', async (req, res) => {
 const allProducts = await Product.find();
//  const allProducts = await Product.find({ name: "123", discount: 50 });
 return res.json(allProducts);
})

app.post('/products', async(req, res) => {
    const product = req.body;
    try {
        const newProduct = new Product(product);
        await newProduct.save();

        return res.send({
            message: "success",
            data: newProduct,
            error: null
        })
    } catch (e) {
        const errors = {};
        if(e.errors) {
            for(let key in e.errors) {
                errors[key] = e.errors[key].properties.message;
                console.log(key, e.errors[key].properties.message);
            }
        } else {
            errors.server = 'Internal Server Error'
        }

      
        console.log(e.errors)
        return res.send({
            message: "fail",
            data: null,
            error: errors
        })
    }
   

})

app.get('/product/:id', async (req, res)=> {
    const productId = req.params.id; 
    const productDetail = await Product.findById(productId);

    return res.send({
        message: "success",
        data: productDetail,
        error: null
    })
})


app.delete('/product/:id', async (req, res) => {
    const productId = req.params.id;
    const productDetail = await Product.findOneAndDelete({ name: 'Iphone 7'});
    // const productDetail = await Product.findByIdAndDelete(productId);

    return res.send({
        message: "success",
        data: productDetail,
        error: null
    })
})

app.patch('/product/:id', async (req, res) => {
    const productId = req.params.id;
    const newProduct = req.body;
    try {
        // const isProductExist = await Product.findById(productId);
        const productDetail = await Product.findOneAndReplace(
            { _id: productId },
            newProduct,
            {new : true }
            );
        // const productDetail = await Product.findByIdAndDelete(productId);
    
        return res.send({
            message: "success",
            data: productDetail,
            error: null
        })
        
    } catch (error) {
        return res.send({
            message: "fail",
            data: null,
            error: 'Internal Server Error'
        })
    }
})

// User APIS - 23 - March

app.post('/signup', async (req, res) => {
    const body = req.body;

    try {
        const user = await User.findOne({ email: body.email });
        if(user) {
            return res.send({
                message: "fail",
                data: null,
                error: 'User already exist!'
            })
        } else {
            const newUser = new User(body);
            await newUser.save();
        
            return res.send({
                message: "success",
                data: newUser,
                error: null
            })
        }
       
    } catch(e) {
        console.log(e);

        return res.send({
            message: "fail",
            data: null,
            error: e.message
        })
    }

})


app.post('/login', async (req, res) => {
    const body = req.body;

    const user = await User.findOne({email: body.email });
    if(!user) {
        return res.send({
            message: "fail",
            data: null,
            error: 'User Not Found!'
        })
    } else {
        // JSON
        // BSON
        const result = await comparePassword(body.password, user.password);
        if(result) {
            return res.send({
                message: "success",
                test: "Dummy Test",
                data: user,
                error: null
            })
        } else {
            return res.send({
                message: "fail",
                data: null,
                error: 'Email or password is uncorrect'
            })
        }

    }
})


app.listen(PORT, (err) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(`Server is running on http://localhost:${PORT}`)
})
