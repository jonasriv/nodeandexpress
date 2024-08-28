//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code(only share minimum)
//MODULE EKSPORTS - DIFFERENT WAYS IN "NAMES.JS" AND "ALTERNATIVE FLVAOR"...

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require("./06-alternative-flavor");
require("./07-mind-grenade");

sayHi(names.john); //Fra importert objekt. 
sayHi(names.peter);

