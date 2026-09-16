
let salaries = {
    John: 1000,
    Anna: 1600,
    Pete: 1300
}
let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);