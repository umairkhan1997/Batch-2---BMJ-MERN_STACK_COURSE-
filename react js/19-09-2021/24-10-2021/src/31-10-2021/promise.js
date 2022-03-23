const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({ isLogin: true })
        reject("Failed")
    }, 2000)
    // resolve("Success");
    // reject("Failed")
});

const success = (response) => {
    console.log(response)
}

const reject = (error) => {
    console.log(error)
}
promise
.then(success)
.catch(reject)

