# bank-tech-test-js

## Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00

## User stories
```
As a customer bank account holder
To make sure I have enough money to pay bills
I want to be able to view my bank balance.

As a customer bank account holder
So i can add funds to my account
I want to be able to deposit money into my account

As a customer bank account holder
So i can have cash for cash payments
I want to be able to withdraw money from my account

As a customer bank account holder
To manage my account
I want to print my account statement

```

## CRC Diagram

<img alt ='CRC Diagram' src ='https://raw.githubusercontent.com/frank-mck/bank-tech-test-js/main/img/Screenshot%202021-08-02%20at%2021.32.46.png'>

## Passing tests with Jest

<img alt = 'test results' src ='https://raw.githubusercontent.com/frank-mck/bank-tech-test-js/main/img/Screenshot%202021-08-03%20at%2009.42.32.png'>
