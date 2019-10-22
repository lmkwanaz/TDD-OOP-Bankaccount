describe("Evaluating the bankAccount class", () => {
  describe("Evaluating the bankAccount class values", () => {
    let bankAcc = new BankAccounts(1000, 7.5, 12);

    it("should return the balance", () => {
      expect(bankAcc.balance).toBe(1000);
    });
    it("should return the interest ", () => {
      expect(bankAcc.interest).toBe(7.5);
    });
    it("should return the monthly fee ", () => {
      expect(bankAcc.monthlyFee).toBe(12);
    });
  });

  describe("Testing the finish method", () => {
    it("Should return 2585.92", () => {
      let bankAcc2 = new BankAccounts(2500, 47, 12);
      bankAcc2.finishMonth();
      expect(bankAcc2.balance).toBe(2585.92);
    });
  });

  describe("Testing the withdraw method", () => {
    it("Should return the update balance=128", () => {
      let bankAcc3 = new BankAccounts(140, 47, 12);
      bankAcc3.withdraw(12,20);
      expect(bankAcc3.balance).toBe(128);

      


    });
  });

  describe("Testing the deposit method of bankAccounts class", () => {
    it("it return ..", () => {
      let bankAcc4 = new BankAccounts(200, 47, 12);
      bankAcc4.withdraw(20);
      expect(bankAcc4.balance).toBe(180);
    });
  });
});


describe("Testing bank class", () => {
  describe("Evaluating deposit", () => {
    it("return 112", () => {
      let bank = new Bank(100, 12, 2, 1245);
      bank.deposit(1245, 12);
      expect(bank.bankAcc.balance).toBe(112);
    });
  });

  describe("Evaluating the withdraw", () => {
    it("return 90", () => {
      let bank1 = new Bank(100, 12, 2, 1255);
      bank1.withdraw(1255, 10, 1255);
      expect(bank1.bankAcc.balance).toBe(90);
    });
  });

});

describe("Testing the customer class",()=>{
  
  describe("Testing the setpassword method",()=>{
    it("Should return the new password",()=>{
      let customer = new Customer(1500,12,25,11145,"what");
      customer.setPassword("hello");
      expect(customer.password).toBe("hello")
    })
  })


  describe("Testing the withdraw method",()=>{
    let customer2 = new Customer(1500,12,25,11145,"Ghad");
    it("It should return the updated balance after withdrawal:balance=1500-500=1000",()=>{
      customer2.withdraw(11145,500,"Ghad");
      expect(customer2.Bank.bankAcc.balance).toBe(1000)
    })

    it("return wrong password if the password is incorrectly inputed",()=>{
      try {
        customer2.withdraw(11145,500,"hel");
      } catch (e) {
        expect(e).toBeTruthy("wrong password");
      }

    })
  })

  describe("Testing the deposit function",()=>{
    it("It should return the updated balance after deposited which is balance=1700+500=2200 ",()=>{
      let customer3 = new Customer(1700,12,25,154745,"yalo");
      customer3.deposit(154745,500);
      expect(customer3.Bank.bankAcc.balance).toBe(2200);
    })
  }) 
})
