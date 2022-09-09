function hasTargetSum(array, target) {
  // check each element in array
  for (let i = 0; i < array.length; i++) {
    const compare = target - array[i];
    // check each other element in the array
    for (let j = i + 1; j < array.length; j++) {

      // determine if these two elements sum to
      if (array[j] === compare) {
      //return all pairs of integers that sum to the target
        return true;
      }

    }
  }
  return false;

}
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;