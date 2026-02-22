/*Q1. Create a Bank Account (Using Closures for Private State)
It should return an object with:

a. deposit(amount)
b. withdraw(amount)
c. getBalance()
d. getTransactionHistory()

Requirements:
a. Balance must be private (not directly accessible)
b. Prevent negative deposits
c. Maintain transaction history array
d. Return error messages instead of crashing.*/

function createBankAccount() {
  let balance = 0;      
  let history = [];    

  return {
    deposit(amount) {
      if (amount <= 0) {
        return "Error: Invalid deposit amount";
      }
      balance += amount;
      history.push(`Deposited ${amount}`);
      return balance;
    },

    withdraw(amount) {
      if (amount <= 0) {
        return "Error: Invalid withdraw amount";
      }
      if (amount > balance) {
        return "Error: Insufficient balance";
      }
      balance -= amount;
      history.push(`Withdrew ${amount}`);
      return balance;
    },

    getBalance() {
      return balance;
    },

    getHistory() {
      return history;
    }
  };
}


const account = createBankAccount();
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
console.log(account.getHistory());