var url = "https://helloworld.com";

function log(message) {
  console.log(message);
}
 
// export as a function 
// module.exports = log // here the function is directly exported as a function not as a object..

module.exports.funcLog = log;
module.exports.url = url;
// module.exports.(key) = real Name Of The Function Or Variable You Are Exporting



// Here you can write anything in the module.exports.(here) but other side of the = should be valid function or variable name that you work with..
// here that thing after module.export.(here) it will be key and the thing that iis to be imported will be id in other module import variable or require variable