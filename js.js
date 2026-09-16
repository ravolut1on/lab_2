function multiplyNumeric(obj){
    for (let key in obj) {
        obj[key] *= 2;
    }
} 
let salaries = {
    john: 1000,
    ann: 1600,
    pete: 1300
}
let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);

let sum2 = 0;

multiplyNumeric(salaries);

for (let key in salaries) {
    sum2 += salaries[key];
}
alert(sum2);