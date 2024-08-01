//object destructure 
const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructure:"hitesh"
}

const{courseInstructure:instructure}=course
console.log(instructure)