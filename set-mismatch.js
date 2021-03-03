/**
 * THE PROBLEM
 * You have a set of integers s, which originally contains all the numbers from 1 to n. 
 * Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, 
 * which results in repetition of one number and loss of another number. You are given an integer array nums 
 * representing the data status of this set after the error. 
 * 
 * Find the number that occurs twice and the number that is missing and return them in the form of an array.
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function(nums) {
  var numsChecked = []
  
  const findMissingNum = () => {
    var i = 1, missingNum = undefined
    while (i <= nums.length && !missingNum) {
      if (nums.indexOf(i) === -1) {
        missingNum = i
      } else {
        i+=1
      }
    }
    return missingNum
  }
  
  var numIndex = 0, 
      duplicate = undefined
  
  while (numIndex < nums.length && !duplicate) {
    if (numsChecked.indexOf(nums[numIndex]) === -1) {
      numsChecked.push(nums[numIndex])
    } else {
      duplicate = nums[numIndex]
    }
    numIndex+=1
  }

  return [duplicate, findMissingNum()]
};