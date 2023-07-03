
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
//   console.log(array);
  let over100 = [];
  for(let i = 0; i < array.length; i++) {
    let deposits = array[i].deposits;
    console.log("this is deposits for " + array[i].name + ":",deposits);

    // for accounts that don't have any deposits yet so they don't throw off my calculations
    if(!array[i].deposits) {
        array[i].deposits = [0];
    }
    console.log("new array with deposits: ", array);

}

for(let i=0; i < array.length; i++) {
    let deposits = array[i].deposits;
    for(let deposit of deposits ){
         if(deposit > 100) {
        over100.push(deposit);
    }
    }
   
}
  console.log("this is the final: ", over100);
  return over100;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
