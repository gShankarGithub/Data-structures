// const arr = [1,2,3,3,2,1]

// function duplicateNo(dup){
//     return [ ...new Set(dup)]
// }

// console.log(duplicateNo(arr))
const arr4 = [1, 2, 1, 3, 2];
function duplicateElement(arr) {
  let response = {};
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (!response[arr[i]]) {
      response[arr[i]] = true;
      result.push(arr[i]);
    }
    // console.log(response);
  }
  return result;
}
console.log("unique elemnents " + duplicateElement(arr4));