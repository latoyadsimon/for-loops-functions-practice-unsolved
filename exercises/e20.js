
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

// using replit to break code down notes:

// let people = [
//   'Ben', 'Emma',
//   'Sophia', 'William',
//   'Elijah', 'James',
//   'Lucas', 'Mason',
//   'Mia', 'Liam',
//   'Noah', 'Oliver',
//   'Ethan', 'Harper',
//   'Evelyn'
// ];

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  //in each name, push to an array if you see "a"
  //else push name to a different array
  console.log(array);
  let separatedNames = [[], []];
  
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i].toLowerCase());
    let name = array[i].toLowerCase();
    console.log("For name: ", name, " we have:");

    for (let j = 0; j < name.length; j++) {

      let alpha = name[j];
      console.log("looking at ", alpha, "in name: ", name );
      
      if ("a" === alpha) {
        console.log(array[i], " has an a in it.");
        separatedNames[0].push(array[i]);
        break;//this is to get out of the loop
        }
      if (j === name.length - 1 && "a" !== alpha) {
        console.log(array[i], " does not have an a in it.");
        separatedNames[1].push(array[i]);
      }
    }
  }
  console.log("this is the separtedNames: ", separatedNames);
  return separatedNames;


}
//to invoke the code in replit
// console.log(separateNamesWithAFromRest(people));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
