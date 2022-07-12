 module.exports = function toReadable (number) {
  let result;
  let arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let arr2 = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let arr3 = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let strNum = String(number);
  let firstItem = strNum[0];
  let secondItem = strNum[1];
  let thirdItem = strNum[2];
    if (number < 10) {
        result = arr1[number];
    }
    if (number > 10 && number < 20) {
        result = arr2[number - 11];
    }
    if (number % 10 == 0 && strNum.length == 2) {
        result = arr3[number / 10 - 1];
    }
    if (number % 10 !== 0 && strNum.length == 2 && number > 20) {
        result = arr3[Number(firstItem) - 1] + " " + arr1[Number(secondItem)];
    }
    if (number % 100 == 0 && strNum.length == 3) {
        result = arr1[Number(firstItem)] + " hundred";
    }
    if (number % 10 == 0 && number % 100 !== 0 && strNum.length == 3) {
        result = arr1[Number(firstItem)] + " hundred " + arr3[Number(secondItem - 1)];
    }
    if (number % 10 !== 0 && strNum.length == 3) { 
        result = arr1[Number(firstItem)] + " hundred " + arr3[Number(secondItem - 1)] + " " + arr1[Number(thirdItem)];
    }
    if (strNum.length == 3 && secondItem == 0 && number % 10 !== 0) {
        result = arr1[Number(firstItem)] + " hundred " + arr1[Number(thirdItem)];
    }
    if (strNum.length == 3 && secondItem == 1 && number % 10 !== 0) {
        result = arr1[Number(firstItem)] + " hundred " + arr2[Number(thirdItem - 1)];
    }
return result;
  }
