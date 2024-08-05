//forof
const myobject={
    'game1':'NFS', 
    'game2':'spiderman'
}
//isme forof loop nhi lgega myobject iteratable nhi hoga usse

//forin
for (const key  in myobject) {
   console.log(`${key} shortcut is for ${myobject[key]}`); 
}

//for-each loop
const coding=["js","ruby","java","python","cpp"]

coding.forEach(function(val){
    console.log(val)
})
 
//with arrow
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

