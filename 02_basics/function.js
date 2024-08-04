function addTwoNumber(number1,number2){
    return number1+number2
}
const res=addTwoNumber(3,4)
console.log("result: ",res)

//multiple arguments
function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,250,300,400,500,385))

//function passing with object
const user={
    username:"hitesh",
    price:199
}
function handleobject(anyobject){
console.log(`username is${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user)
handleobject({
username:"sam",
price:222
})
