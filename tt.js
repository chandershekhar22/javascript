const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    },1000)
})
promiseone.then(function(){
    console.log("promise consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
promisethree.then(function(user){
    console.log(user)
})



