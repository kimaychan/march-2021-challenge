/**
 * THE PROBLEM
 * Alice has n candies, where the ith candy is of type candyType[i]. 
 * 
 * Alice noticed that she started to gain weight, so she visited a doctor.
 * The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). 
 * Alice likes her candies very much, and she wants to eat the maximum number of different types of 
 * candies while still following the doctor's advice. 
 * 
 * Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
 * 
 * @param {number[]} candyType
 * @return {number}
 */

var distributeCandies = function(candyType) {
  const maxCandyLength = Math.ceil(candyType.length / 2)
  const candiesEaten = candyType.reduce((res, v, i) => {
    res[v] = res[v] || 1
    res[v] += 1
    return res
  }, {})
  const numOfCandyTypes = Object.keys(candiesEaten).length
  const result = numOfCandyTypes > maxCandyLength ? maxCandyLength : numOfCandyTypes
  return result
};