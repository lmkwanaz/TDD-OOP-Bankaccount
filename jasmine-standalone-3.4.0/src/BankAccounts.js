let bank = class BankAccounts {
    // constructor of the class
    constructor(balance, interest, monthlyFee) {
      this.balance = balance;
      this.interest = interest;
      this.monthlyFee = monthlyFee;
    }
  
    //   Upadate the balnce after an interest has been earned and monthfee deducted
    finishMonth() {
      let bal = (this.balance * (this.interest / 100)) / 12;
  
      this.balance = Number((this.balance + bal - this.monthlyFee).toFixed(2));
      //this.balance.toFixed(1);
    }
  
    //   update the balnce when money deposited
    deposit(moneyIn) {
      this.balance += moneyIn;
    }
  
    //   update balance when money withdrawn
    withdraw(moneyOut) {
      this.balance -= moneyOut;
    }
  };
  
  module.exports = bank;