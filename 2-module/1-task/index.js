function sumSalary(salaries) {
  let arraySalary = Object.values(salaries);
  console.log(arraySalary);
  let arrayNumber = [];

  for (let i = 0; i < arraySalary.length; i++) {
    if (typeof arraySalary[i] == "number" && arraySalary[i] !== Infinity && arraySalary[i] !== -Infinity && true !== isNaN(arraySalary[i])) {
      arrayNumber[i] = arraySalary[i];
    }
    console.log(arrayNumber);
  }

  console.log("type an object value massive", arrayNumber);

  if (arrayNumber.length == 0) {
    return 0;
  }

  let a = 0;
  console.log(a);

  for (let i = 0; i < arrayNumber.length; i++) {
    a += arrayNumber[i];
  }
  return a;
}
