function Setusername(username){
    this.username=username;
}

function createuser(username,email,password){
     Setusername.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createuser("chai","chai@fb.com",12345)
console.log(chai)