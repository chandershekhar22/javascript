const myarr=[2,3,6,4,9,6]
//const myHeros=["shaktiman","virat"]
const myArr2=new Array(2,8,7,6,5)

console.log(myarr)
myarr.push(9)
console.log(myarr)
myarr.unshift(0);
console.log(myarr)
myarr.shift();
console.log(myarr)
console.log(myarr.includes(9))

const newarr=myArr2.join()
console.log(myArr2)  //typeof arr
console.log(newarr)  //typeof string

//slice and splice
console.log("A",myArr2)
const myn1=myArr2.slice(1,3)
console.log(myn1)

console.log("B",myArr2)
const myn2=myArr2.splice(1,3)
console.log(myn2)
console.log("c",myArr2)
