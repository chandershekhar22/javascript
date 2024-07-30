const score=400
console.log(score)

const bal=new Number(100)
console.log(bal)

console.log(bal.toString())
console.log(bal.toFixed(2))

const othernum=123.897635
console.log(othernum.toPrecision(4))
console.log(othernum.toPrecision(6))
console.log(othernum.toPrecision(3))

const hundred=1000000
console.log(hundred.toLocaleString())

//maths
console.log(Math.abs(-4))
console.log(Math.round(4.4))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

console.log(Math.random())  //always gives range 0-1
console.log((Math.random()*10)+1)  //range >=1

//if we want range 10-20
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)