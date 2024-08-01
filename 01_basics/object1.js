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