function one(){
const username="Hitesh"

function two(){
const website="you tube"
console.log(username)
}
//console.log(website)     =>gives error as website is local varible in scope of fuction two
two()
}
one()

/////intresting//////
console.log(one(9))        //=>can do
function one(num){
    return num+1
}
//console.log(addone)                    cant do
const addone=function addone(num){
    return num+1
}
console.log(addone(7))