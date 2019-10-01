let BankAccounts = require('./BankAccounts');

class Bank  {
 
  constructor(balance, interest, mon, bankAccountNumber) { 
     this.bankAcc = new BankAccounts(balance, interest, mon);
    this.bankAccountNumber = bankAccountNumber;
  }

     withdraw(bankAccountNumber, amount) {
    
    bankAccountNumber.bankAcc.withdraw(amount);
    
    
  }
    

   deposit(bankAccountNumber, amount) {
    
     bankAccountNumber.bankAcc.deposit(amount);
  }
  
  transfer(fromBankAcountNumber, toBankAccountNumber, amount) {
   
    fromBankAcountNumber.bankAcc.withdraw(amount);
    toBankAccountNumber.bankAcc.deposit(amount);
  }
}


let bank1 = new Bank(2000, 12, 45, 143534646);
let bank2 = new Bank(1000, 12, 46, 1366746868);
let bank3 = new Bank(100, 12, 45);

console.log("after invoking the deposit method");

  bank1.transfer(bank1, bank2, 10);

console.log(bank1);

console.log(bank2);
