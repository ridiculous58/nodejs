//private
var age = 30;

//public because we exports variable 
var firstName = "Emirhan";
var log = function(name){
    console.log(name);
};

module.exports = {
    name : firstName,
    consoleLog:log
};
