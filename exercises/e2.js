// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max) {
    // Your code goes here...
  // a number squared (times itself) gives us a number that has a square root
    let numbersWithSquareRoots = [];
    let allNumbersSquared = [];
    let maxList = [];
    // console.log("this is the max list ", maxList);
    
    for(let i = 0; i <= max; i++) {
        maxList.push(i);
        let squared = Number(i*i);
        if(squared<max) {
            allNumbersSquared.push(squared);
        }
    }
    // console.log("this is the max list filled", maxList);
    // console.log("all squares: ", allNumbersSquared);
    
    // let i = 0;
    
  for(let j = 0; j < allNumbersSquared.length; j++) {
    // in all numbers squared, we need to find the maxNum
    

    for (const maxNum of maxList) {
      if(maxNum === allNumbersSquared[j] ) {
        numbersWithSquareRoots.push(maxNum);
        console.log("yay we found a square root with " + maxNum + "!!!");
        }
        // else {
        //     console.log(maxNum + " does not have a square root");
        // }
      }
    }
    
    // console.log("numbers with square roots: ",numbersWithSquareRoots);
    return numbersWithSquareRoots;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
