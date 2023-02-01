function sum(a, b) {
    return a + b;
}
sum(30, 20);
//2.function expression
const sum2 = function (a, b) {
    return a + b;
};
console.log("function expression", sum2(30, 20));
//3.arrow function
const sum3 = (a, b) => a + b;
console.log("arrow function", sum3(30, 20));
//4.IIFE(Immediatetly Invoked Function Expression)
((a, b) => console.log(a + b))(30, 20);