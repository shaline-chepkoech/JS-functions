function calculate(num1, num2, operation){
let result;
if(operation ==='add'){
    result = num1+num2;
}
if(operation ==='subtract'){
    result = num1-num2;
}
if(operation ==='multiply'){
    result = num1*num2;
}
if(operation === 'divide'){
    result = num1/num2;
}
console.log("Result is:", result);
}
calculate(10, 5, "add");
calculate(10, 5, "subtract");
calculate(10, 5, "multiply");
calculate(10, 5, "divide");