//call by value
let myYouTubeName="hitesh@youtube"

let anotherName=myYouTubeName
anotherName="chandu@youtube"

console.log(myYouTubeName)
console.log(anotherName)
//call by refrence
let userone={
email:"user@gamail",
upi:"user@gmail"
}
let userTwo=userone
userTwo.email="tarac@gmail"

console.log(userone.email)
console.log(userTwo.email)
