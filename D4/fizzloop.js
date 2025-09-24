num = 1;

while (num <= 100) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz " + num);
  } else if (num % 3 == 0) {
    console.log("Fizz " + num);
  } else if (num % 5 == 0) {
    console.log("BUzz " + num);
  } else {
    console.log(num);
  }

  num++;
}
