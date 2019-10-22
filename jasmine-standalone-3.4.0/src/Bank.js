class Bank  {
 
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

