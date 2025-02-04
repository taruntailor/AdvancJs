// Sum the properties There is a salaries object with arbitrary
// number of salaries. Write the function sumSalaries(salaries)
// that returns the sum of all salaries using Object.values and the
// for..of loop.If salaries is empty, then the result mustbe 0. let
// salaries = {
// "John": 100,
// "Pete": 300,
// "Mary": 250
// }; alert( sumSalaries(salaries)
// ); // 650

let salaries ={
    "John": 100,
  "Pete": 300,
  "Mary": 250
}

function sumSalaries(salaries){
    let sum=0;

    let values = Object.values(salaries);

    for(let value of values){
        sum += value;
    }
    return sum;
}

alert(sumSalaries(salaries));