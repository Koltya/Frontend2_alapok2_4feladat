//console.log(parseInt("a")) = NaN

const nums = ["a", 4, 2, 2, 1, 1];

function add(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      console.log(array[i] + " is not a number. I try to convert.");
      if (isNaN(parseInt(array[i]))) {
        console.log("The converting is not working. Sorry!");
        i += 1;
      } else {
        array[i] = parseInt(array[i]);
      }
    }
    sum += array[i];
  }
  console.log(sum);
}

add(nums);
