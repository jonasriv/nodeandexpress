//MOdul som faktisk kjører en funksjon, og så importere den i modules.js: 

const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1 + num2}`);
}

addValues(); //invoke i denne modulen, så når modulen importres til app, så kjøres den med et resultat herfra. Da trenger man ingen module.exports..... osv. 