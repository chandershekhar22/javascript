let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let createmydate=new Date(2023,0,3)          //jan ka index 0 hota h
console.log(createmydate.toDateString())
let createmydate2=new Date(2023,0,3,5,4)
console.log(createmydate2.toLocaleString())
let createmydate3=new Date("01-14-2023")
console.log(createmydate3.toLocaleString())

let mytimestamp= Date.now()
console.log(mytimestamp)

let newdate=new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)  //jan index 0
console.log(newdate.getDay())

 /*newdate.toLocaleString('default',{
    weekday:"long",
}) 
*/



