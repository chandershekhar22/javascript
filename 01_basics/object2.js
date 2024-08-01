const regularuser={
    email:"some@gmail.com",
    fullname:{
    userfullname:{
        firstname:"hitesh",
        lastname:"choudhary"
    }
}
}  
console.log(regularuser.fullname) 

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)

const obj3={...obj1,...obj2}   //most freq used syntax
console.log(obj3)   

const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false

console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
 





