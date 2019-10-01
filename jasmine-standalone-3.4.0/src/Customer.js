const bcrypt = require('bcrypt');
let Bank = require('./Bank');

class Customer{
    constructor(bal, int, mon, bankAcc){
        this.Bank = new Bank(bal, int, mon, bankAcc);
    }

    setPassword(){
        
    }
}