module.exports = function (number) {

  console.log("NUMBER", number)
  let arr = [];
  for (let i = 1; i < number + 1; i++) {
    if (i % 3 === 0 && i % 15 !== 0) {
      console.log("NUMBER FIZZ", i + 1)
      arr.push('fizz');
    } else if (i % 5 === 0 && i % 15 !== 0) {
      arr.push('buzz')
    } else if (i % 15 === 0) {
      arr.push('fizzbuzz')
    } else {
      arr.push(i)
    }
  }

  return arr;
};


