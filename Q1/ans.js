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
    let history = []
}
return {
    deposit(amount) {
        if (amount <= 0) {
            return "invaild deposit amount"
        }
        balance += amount
        history.pushState(`Deposited ${amount}`)
        return balance;
    },
    withdraw(amount) {
        if (amount <= 0) {
            return "invaild withdraw amount"
        }
        if (amount > balance) {
            return "insufficient balance"
        }
        balance -= amount;
        history.pushState(`withdraw ${amount}`)
        return balance;
    },
    getBalance() {
        return balance;
    },
    getHistory() {
        return history;
    }
}

const account = createBankAccount();
account.deposit(200)
account.deposit(100)
console.log(account.getBalance())
console.log(account.getHistory())
console.log(account.balance)
