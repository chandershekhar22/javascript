const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)   //print dc_heros as 4th index element of marvelhero

console.log(marvel_heros) 

const all_newheros=[...marvel_heros, ...dc_heros]  //concanate both array elements
console.log(all_newheros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[8,9]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))         //It covert string into array
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))

const mySym=Symbol("key1")

const Jsuser={
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    [mySym]:"mykey",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastlogindays:["Monday","Saturday"]
}
console.log(Jsuser.email)
console.log(Jsuser["email"])
//console.log(Jsuser."fullname")  cant access by this
console.log(Jsuser["full name"])
console.log(Jsuser[mySym])

Jsuser.email="hitesh@chatgpt.com"
Object.freeze(Jsuser)
Jsuser.email="hitesh@microsoft.com"
console.log(Jsuser);
   

