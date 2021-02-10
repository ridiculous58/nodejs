//Nerede Kullanılıyor ? upload esnasında png den jpg e çevirme işleminde ve ya farklı upload dosya adı değiştirme tarzı uygulamalarda kullanılır
const path = require('path');

let result = path.resolve('app.js')

let typeFile = path.extname('app.js')

var pathParse = path.parse(__filename)
console.log("************<FileName>************")
console.log(__filename)
console.log("************</FileName>************")
console.log("************<PathObject>************")
console.log(pathParse)
console.log("************</PathObject>************")
console.log("************<PathObjectProperty>************")
console.log(pathParse.root)
console.log(pathParse.dir)
console.log(pathParse.base)
console.log(pathParse.ext)
console.log(pathParse.name)
console.log("************</PathObjectProperty>************")
/*
console.log(result)
console.log(typeFile)
console.log(path)
*/