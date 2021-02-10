// const EventEmitter = require('events');
// const emitter = new EventEmitter();

/*
//listener kayıt et
emitter.on('connection',function(args){
    console.log('Baglantı Kuruldu')
    console.log("Id :" + args.id,"\nName : " + args.name)
})

//event'i tetikle
emitter.emit("connection",{id:1,name:'hello'})
*/

/*
//listener kayıt et
emitter.on('connection',function(args){
    console.log('Baglantı Kuruldu')
    console.log("Id :" + args.id,"\nName : " + args.name)
})

const logger = require('./logger');

logger("emir kayıt oldu")
*/

const Logger = require('./Logger');
const logger = new Logger()

//listener kayıt et
logger.on('connection',function(args){
    console.log('Baglantı Kuruldu')
    console.log("Id :" + args.id,"\nName : " + args.name)
})

logger.log("Sadık Abimiz")
