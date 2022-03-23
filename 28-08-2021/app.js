


localStorage.setItem('email','umair@gmail.com');
localStorage.setItem('password','123');


let emailUsername = localStorage.getItem('email');

console.log(emailUsername,'email');

localStorage.removeItem('email');

// let result = localStorage.getItem('email');

// console.log(result,'email');


let email = document.getElementById('email')
let pass = document.getElementById('pass')

function signup(){

    // console.log(email.value,pass.value)
    let obj={
        email:email.value,
        pass:pass.value
    }
    let localObj = JSON.stringify(obj)
    console.log(typeof localObj,'localObj');
    localStorage.setItem('userData',localObj)
}


let emails = document.getElementById('emails')
let passes = document.getElementById('passes')


function signin(){
    let userEmailAndPass = localStorage.getItem('userData');
    console.log(userEmailAndPass);
    let result = JSON.parse(userEmailAndPass);
    console.log(typeof result, result);
    if(emails.value == result.email && passes.value == result.pass){
        alert('You have been successfully login')
    }
    else{
        alert('Email or Password is incorrect')
    }
}

function clearData(){   
    localStorage.clear()
}