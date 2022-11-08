let sum = 0;
let sum_1 = 0;
let minus = 0;

let result = sum + sum_1 - minus;

for(let n=1; n<100; n++) {
    if(n%2 ==0 || n%3 ==0) {
        sum+=n
    }
}
console.log(sum);
