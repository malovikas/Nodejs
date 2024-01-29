//import own file
const add = (a, b) => {
    return (a + b);
}

const sub = (a, b) => {
    return (a - b);
}
const mul = (a, b) => {
    return (a * b);
}
const name='Malovika'

//for exporting multiple functions
/* module.exports.add=add;
module.exports.sub=sub; */

//for exporting variable as name
module.exports={add,sub,mul,name}