var firstName = "Emirhan"

console.log(firstName);
global.firstName = "Çifci";
console.log(global.firstName);
module.exports = {
    name : firstName
};
