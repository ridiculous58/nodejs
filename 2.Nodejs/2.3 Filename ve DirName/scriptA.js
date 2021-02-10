//<IIFE>

// (function(exports,require,module,__filename,__dirname){
// })()

//</IIFE>

var firstName = "Emirhan";
var log = function (name){
    console.log(name);
};

console.log(__dirname) //bulunguğumuz klosor path i verir
console.log(__filename) //bulunguğumuz script'in path i verir
module.exports = {
    firstName,
    log
};


