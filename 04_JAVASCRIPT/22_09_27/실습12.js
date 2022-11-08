let no_1 = 2;
let no_2 = 4;
let no_3 = 6;

let add_1 =  no_1 + no_2 + no_3;
let sub_1 = no_2 - no_1;
let divide_1 = no_1/no_2;
let mul_1 = no_1*no_2;

console.log("no_1 = " + no_1);

console.log("no_2 = " + no_2);

console.log("no_3 = " + no_3);

function add() {
    console.log("no_1+ no_2 + no_3 = " + add_1);
    alert(no_1+ no_2 + no_3);
}

function sub() {
    console.log("no_2 - no_1 = "+ sub_1);
    alert(no_2 - no_1);
}

function divide() {
    console.log("no_1/no_2 = " + divide_1);
    alert(no_1/no_2);
}

function mul() {
    console.log("no_1*no_2 = " + mul_1);
    alert(no_1*no_2);
}

add();
sub();
divide();
mul();