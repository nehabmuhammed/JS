let arr = [2, 5,41, 7, 10];

let largest = arr[0];
for (let i = 1; i <= arr.length - 1; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
