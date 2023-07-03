
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  
//   console.log(array);

  //   for each member, add up their deposits
let allDeposits = [];

// some members don't have deposits and its messing up my calcs, give them one.
for(let i = 0; i < array.length; i++) {
    if(!array[i].deposits) {
        array[i].deposits = [0];
    }
}
// console.log("New array: ", array);// all the arrays now have a deposits

for(let j = 0; j < array.length; j++) {
   
     let accountDeposits = array[j].deposits;
     
     console.log("this is accountDeposits for: " + array[j].name+ ": ", accountDeposits);
     
     if(accountDeposits[0] > 0) {
        let sum = 0;
        
        for(let num of accountDeposits) {
            sum+=num;
        }
        allDeposits.push(sum);
        console.log("this is the sum now for : "+ array[j].name+": ", sum);
        console.log("allDeposits now looks like this: ", allDeposits);
    }else {
        let sum = 0;
        allDeposits.push(sum);
        console.log("allDeposits now looks like this for people who had none: ", allDeposits);
    }
       
}
console.log("this is the final result of allDeposits: ", allDeposits);
// return allDeposits;


  //   for each member, add up their withdrawals
let allWithdrawals = [];

// some members don't have withdrawals and its messing up my calcs, give them one.
for(let i = 0; i < array.length; i++) {
    if(!array[i].withdrawals) {
        array[i].withdrawals = [0];
    }
}
// console.log("New array: ", array);// all the arrays now have a withdrawals


for(let j = 0; j < array.length; j++) {
   
     let accountWithdrawal = array[j].withdrawals;
     
     console.log("this is accountWithdrawal for: " + array[j].name+ ": ", accountWithdrawal);
     
     if(accountWithdrawal[0] > 0) {
        let sum = 0;
        
        for(let num of accountWithdrawal) {
            sum+=num;
        }
        allWithdrawals.push(sum);
        console.log("this is the sum now for : "+ array[j].name+": ", sum);
        console.log("allWithdrawals now looks like this: ", allWithdrawals);
    }else {
        let sum = 0;
        allWithdrawals.push(sum);
        console.log("allWithdrawals now looks like this for those who dont have any: ", allWithdrawals);
    }
       
}
console.log("this is the final result of allWithdrawals: ", allWithdrawals);
// return allWithdrawals;

// get the balance of all the accounts
let allBalances = [];
for(let k = 0; k < array.length; k++) {
    allBalances.push(array[k].balance);

}
console.log("This is allBalances: ", allBalances);


let balanceIsWrong = [];
for (let b = 0; b < array.length; b++) {
    let withdrawals = allWithdrawals[b];
    let deposits = allDeposits[b];
    let balance = allBalances[b];
    if(deposits-withdrawals !== balance) {
        balanceIsWrong.push(array[b]);

        console.log("oh no, the balance for " + array[b].name + " is wrong!! Fix it Felix!!");
        // note to self for later: add a way to fix wrong balances here
    }
}
console.log("They got the wrong balance: " + balanceIsWrong);
return balanceIsWrong;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
