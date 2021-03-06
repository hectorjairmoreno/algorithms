function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([3, 4, 5, 2, 44, 5, 64, 3]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

console.log(selectionSort([4, 3, 5, 33, 43, 24, 21, 55, 1, 2, 3, 4]));

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

console.log(mergeSort([55, 32, 76, 34, 89, 3, 7, 1]));

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

console.log(toTitleCase("hello world how are you"));

var text = "foo bar loo zoo moo";
text = text
  .toLowerCase()
  .split(" ")
  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  .join(" ");
console.log(text, "text");

function checkPalindrom(str) {
  return str == str.split("").reverse().join("");
}
console.log(checkPalindrom("racecar"));

["car", "test", "car"].sort((a, b) => (a > b) * 2 - 1);

function howManyRepeated(str) {
  const result = [];
  const strArr = str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/g);

  if (strArr != null) {
    strArr.forEach((elem) => {
      result.push(elem[0]);
    });
  }
  return result;
}

console.log(howManyRepeated("arflasfldsjflsj"));

const counts = {};
const sampleArray = [1, 1, 1, 1, 3, 4, 4, 4];
sampleArray.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
