// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
//   console.log(array);
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
        console.log("allWithdrawals now looks like this: ", allWithdrawals);
    }
       
}
console.log("this is the final result: ", allWithdrawals);
return allWithdrawals;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
