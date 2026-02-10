// const myModule = require("./myModule");
const { inc, dec, getCount } = require("./myModule");

// console.log(myModule.anything);
// console.log(myModule.inc());

inc();
inc();
inc();
console.log(`the count is ${getCount()}`);
