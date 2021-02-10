const fileSystem = require('fs');

/*
//Read Dir
const files = fileSystem.readdir('./',function(error,data){
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})
*/
/*
//Read File
const files = fileSystem.readFile('app.js','utf8',function(error,data){
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})
*/

/*
//Dosya Varsa Dosyayı Siler ve datayi Ekler Yoksa OLusturur ekler 
//Write File
fileSystem.writeFile("deneme.txt","Hello World",function(error){
    if(error){
        console.log("Bİr Hata Olustu {0}",error)
    }else{
        console.log("Islem Basarıyla Gerçekleştirildi")
    }
})
*/

/*
//Dosya Varsa Uzerine Ekler Yoksa OLusturur ekler 
fileSystem.appendFile("deneme1.txt","Hello World",function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Proccess is Successfully")
    }
})
*/
/*
//Delete File
fileSystem.unlink("deneme1.txt",function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Delete Processed Successfully")
    }
})
*/

/*
//Rename File 
*/
fileSystem.rename("deneme1.txt","deneme.txt",function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Işlem Başarıyla Gerçekleştirildi")
    }
})