class user{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    //constructor b set krra h setter b ...pr setter overwrite krra h islie setter ki maani jayegi
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}
const hitesh = new user("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(hitesh.password);
