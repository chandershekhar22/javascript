const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}
const string="Hello world"
for (const greet of string) {
    console.log(greet)   
}

//map
const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United sates of america")
map.set('Fr',"France")

console.log(map)
//syntax of forof loop in maps 
for (const [key,value] of map) {
    console.log(key,':-',value)
}
