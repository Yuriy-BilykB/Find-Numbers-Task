

const findMissingElements = (arr) => {
  const start = arr[0];
  const length = arr.length;

  const findIndexByMissingCount = (missingToFind) => {
      let left = 0;
      let right = length;

      while (left < right) {

          const mid = Math.floor((left + right) / 2);

          const missingCount = arr[mid] - (start + mid);

          if (missingCount >= missingToFind) {
              right = mid;       
          } else {
              left = mid + 1;   
          }
      }
      return left;
  };

  const firstMissingIndex = findIndexByMissingCount(1);
  const firstMissingNumber = start + firstMissingIndex;            

  const secondMissingIndex = findIndexByMissingCount(2);
  const secondMissingNumber = start + secondMissingIndex + 1;       

  return [firstMissingNumber, secondMissingNumber];
};

console.log('Missed numbers', findMissingElements([1, 4, 5, 6, 7, 8, 9, 10]));

// Since the array is sorted, I used a binary search approach based on the index shift.
// Instead of iterating through all N elements, I eliminate half of the search space on each step.
// Therefore, the time complexity is O(log N)