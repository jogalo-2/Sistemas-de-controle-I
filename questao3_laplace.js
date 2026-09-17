const math = require('mathjs');

const s = 's';

// 1)
let f1 = '45 / (s * (s + 2) * (s + 9))';

// 2)
let f2 = '10 * (s + 3) / ((s + 2) * (s + 4))';

// 3)
let f3 = '4 / (s^2 + 5*s + 80)';

console.log("F1(s) =", f1);
console.log("F2(s) =", f2);
console.log("F3(s) =", f3);

// resultados das inversas
let inv1 = '5/2 - (45/14)e^(-2t) + (5/7)e^(-9t)';
let inv2 = '5e^(-2t) + 5e^(-4t)';
let inv3 = '(8/sqrt(295))e^(-5t/2)sen(sqrt(295)t/2)';

console.log("\nTransformadas inversas:");
console.log("f1(t) =", inv1);
console.log("f2(t) =", inv2);
console.log("f3(t) =", inv3);
