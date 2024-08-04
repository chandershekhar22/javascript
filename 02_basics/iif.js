//imediately invoked function expresion
(function chai(){
    //named IIFE
    console.log("DB Connected");
    
})();
//((){})()

((name)=>{
    console.log(`DB connected to ${name}`)
})("hitesh")

//glolad space k variables k pollution ko hatane k lie use hota h iffe
//imediately invoked hota h 