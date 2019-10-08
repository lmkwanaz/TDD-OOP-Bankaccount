let BankAccounts = require('./BankAccounts');

let Bank = class Bank  {
 
  constructor(balance, interest, mon, bankAccountNumber) { 
     this.bankAcc = new BankAccounts(balance, interest, mon);
     this.bankAccountNumber = bankAccountNumber;
     this.Accounts = [];
    this.Accounts.push({
      bankAccountNumber: this.bankAccountNumber,
      bankAcc: this.bankAcc
    });
  }

  createAccounts(balance, interestRate, monthlyFee, bankAccountNumber) {
    this.bankAcc = new BankAccounts(balance, interestRate, monthlyFee);
    this.bankAccountNumber = bankAccountNumber;
    this.Accounts.push({
      bankAccountNumber: this.bankAccountNumber,
      bankAcc: this.bankAcc
    });
  }

  withdraw(bankAccountNum, amount) {
    for (let i = 0; i < this.Accounts.length; i++) {
      if (bankAccountNum == this.Accounts[i].bankAccountNumber) {
        this.Accounts[i].bankAcc.withdraw(amount);
      } else {
        throw new Error("incorrect AccountNumber!!1");
      }
    }
  }
    

  deposit(bankAccountNumber, amount) {
    for (let i = 0; i < this.Accounts.length; i++) {
      if (bankAccountNumber == this.Accounts[i].bankAccountNumber) {
        this.Accounts[i].bankAcc.deposit(amount);
      } else {
        throw new Error("incorrect AccountNumber!!2");
      }
    }
  }

  
  transfer(fromBankAcountNumber, toBankAccountNumber, amount) {
     
         this.withdraw(fromBankAcountNumber, amount);
        this.deposit(toBankAccountNumber, amount)
  }
}


// let bank1 = new Bank(2000, 12, 45, 143534646);
// let bank2 = new Bank(1000, 12, 46, 1366746868);
// let bank3 = new Bank(100, 12, 45);

// console.log("after invoking the deposit method");

//   bank1.transfer(bank1, bank2, 10);

// console.log(bank1);

// console.log(bank2);

const bank = new Bank(1000, 12, 50, 12345);
bank.createAccounts(150, 12, 40, 22345);
bank.createAccounts(110, 15, 30, 3345);
 bank.transfer(3345, 22345, 100) 


module.exports = Bank;