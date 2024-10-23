console.log("Hello world")
console.log(Math.random(50))
console.log(Math.PI)
console.log(Math.round((2.5)))
Math.max(5,3,7,9,84)
console.log(Math.abs(-2))

// Primitive String
let s = "Atishay "
console.log(s)
console.log(typeof(s))

// Object String
let str = new String('Jain')
console.log(str)
console.log(typeof(str))
console.log(str.length)
console.log(str.includes('n'))
console.log(str.startsWith('ja'))

let message = "My name is Atishay Jain"
console.log(message.split(' '))

let names = "  Atishay Jain  "
console.log(names.trim())


// Template Literal
let msg = `This
is my
first
message`;
console.log(msg);

let num = [1,2,3,4,5];
num.push(7);  // Insert at the end
// console.log(num);

num.unshift(8);  // Insert at the begining
// console.log(num);

num.splice(2,0,'a','b','c','d');  // Insert at middle
console.log(num);

//  Searching

console.log(num.indexOf(3));

console.log(num.includes(9));


console.log(num.indexOf(8,4));

let courses = [
    {no:1, naam:'Atishay'},
    {no:2, naam:'Sushil'}
];

console.log(courses)

console.log(courses.indexOf({no:1, naam:'Atishay'}))
