let BankAccounts = require('./BankAccounts');

class Bank  {
 
  constructor(balance, interest, mon, bankAccountNumber) { 
     this.bankAcc = new BankAccounts(balance, interest, mon);
    this.bankAccountNumber = bankAccountNumber;
  }

  Password(arry){
      let pw = new Array(1);
      pw.push(arry)
  }

     withdraw(bankAccountNumber, amount, secretPassword) {
         if(!secretPassword == undefined){
    this.Password(secretPassword);
    bankAccountNumber.bankAcc.withdraw(amount);
         }else{
            return false;
         }
  }
    

   deposit(bankAccountNumber, amount) {
       if(this.withdraw(bankAccountNumber, amount) == false){
           return false;
       }else{
            bankAccountNumber.bankAcc.deposit(amount);
       }
  }
  
  transfer(fromBankAcountNumber, toBankAccountNumber, amount, secretPassword) {
     
         this.withdraw(fromBankAcountNumber, amount);
        this.deposit(toBankAccountNumber, amount)

    //    this.Password(secretPassword);
//     fromBankAcountNumber.bankAcc.withdraw(amount);
//     toBankAccountNumber.bankAcc.deposit(amount);
  }
}


let bank1 = new Bank(2000, 12, 45, 143534646);
let bank2 = new Bank(1000, 12, 46, 1366746868);
let bank3 = new Bank(100, 12, 45);

console.log("after invoking the deposit method");
bank1.Password(13443)
  bank1.transfer(bank1, bank2, 10);

console.log(bank1);

console.log(bank2);
