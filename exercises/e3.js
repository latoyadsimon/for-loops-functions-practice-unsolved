
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    let item = array[i];
     console.log(item);
     sum+=item;
    
  }
  console.log(sum);
  console.log((sum/array.length));
  return (sum/array.length);

}


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  //put the string into an array
  //compare each items type, if its a number push to a new array
  //add the numbers of that array
  let numArray = [];
  let sumOfString = 0;

  for(let i = 0; i < str.length; i++) {
    let item = Number(str[i]);
    // console.log(item)
    if(item >= 0) {
        numArray.push(item);
    }
  }
  console.log(numArray);
  if(numArray.length) {
    for(let j = 0; j < numArray.length; j++) {
      let num = Number(numArray[j]);
      sumOfString += num;
    }
  }
  console.log(sumOfString);
  return sumOfString;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
