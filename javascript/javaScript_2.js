// Object cloning 

let src = {   // Crearion of object
    value : 10,
    a: 20,
    b: 30
}; 

// let dest = {}

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest)

// Method 2
let dest  = Object.assign({},src)
console.log(dest) 

//  Method 3
// let dest =  {...src}


// Garbage Collection:
