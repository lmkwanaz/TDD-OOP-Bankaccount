class Customer{
    constructor(balance, interests, monthlyfee, bankAcc, password){
        this.Bank = new Bank(balance, interests, monthlyfee, bankAcc);
        this.password = password;
    }

    setPassword(secretpassword){
        this.password = secretpassword;
    }

    withdraw(bankAccountNumber, amount, secretPassword){
        if(secretPassword == this.password){
            this.Bank.withdraw(bankAccountNumber, amount);
        }else{
            throw new Error("wrong password")
        }
    }

    deposit(bankAccountNumber, amount){
        this.Bank.deposit(bankAccountNumber, amount);
       
    }

    transfer(fromBankAcountNumber, toBankAccountNumber, amount, secretPassword){
        if(secretPassword == this.password){
            this.withdraw(fromBankAcountNumber, amount);
            this.deposit(toBankAccountNumber, amount);
        }else{
            throw new Error("Error, incorrect password");
        }
    }
}

