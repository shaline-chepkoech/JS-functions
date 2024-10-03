function calculateVelocity(initialVelocity, acceleration, time){
let at = acceleration * time;
let velocity = initialVelocity + at;
console.log("velocity is ", velocity);
}
calculateVelocity(5, 2, 3);
calculateVelocity(0, 10, 5);
calculateVelocity(20, -3, 4);
calculateVelocity(15, 1, 10);
