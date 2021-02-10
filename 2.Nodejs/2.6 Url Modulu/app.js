const url = require('url');

const address = "http://www.emirhan.com?id=1&name=Emirhan"

let result = url.parse(address,true) // burdali true query string gi objecye ceviriyimmi demek true diyerek çevir demiş olduk


console.log(result)

console.log(result.query.id)
console.log(result.query.name)