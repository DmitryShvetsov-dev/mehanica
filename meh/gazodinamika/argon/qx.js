let n = 1,
  Rkp = 122 + 10 * n,
  R0 = 2 * Rkp,
  L = 250 + 10 * n,
  R1 = 3 * Rkp,
  a = 20 + n,
  b = 10 + n / 2,
  p0 = n * 100000,
  V0 = 2 * n;
let k = 1.667; //Показатель Адиабаты для аргона
let radiusArray = [];
for (let i = 0; i < L; i++) {
  radiusArray[i] = R0;
}
let reziseL = L;
for (let i = R0; i > Rkp; i--) {
  radiusArray[reziseL] = i;
  reziseL++;
}
for (let i = Rkp; i <= R0; i++) {
  radiusArray[reziseL] = i;
  reziseL++;
}
radiusArray[392] = 133;
let qxArray = [];
for (i = 0; i < radiusArray.length; i++) {
  qxArray[i] = (3.14 * Rkp * Rkp) / (3.14 * radiusArray[i] * radiusArray[i]);
}

let lambdaArray = [];
function equation(x, i) {
  let answer =
    x *
      Math.pow((k + 1) / 2, 1 / (k - 1)) *
      Math.pow(1 - ((k - 1) / (k + 1)) * x * x, 1 / (k - 1)) -
    qxArray[i];
  return answer;
}
function findLambda(a, b, i) {
  while (true) {
    let c = (a + b) / 2;
    let a_value = equation(a, i);
    let b_value = equation(b, i);
    let c_value = equation(c, i);
    if (Math.abs(c_value) < 0.0001) {
      return c;
    }
    if (a_value * c_value < 0) {
      b = c;
    } else {
      a = c;
    }
  }
}
for (let i = 0; i < qxArray.length; i++) {
  lambdaArray[i] = findLambda(1, -1, i);
}

localStorage.setItem("lambdaArray", lambdaArray);
