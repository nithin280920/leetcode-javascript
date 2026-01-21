let n = 6;
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j < n; j++) {
    star += " *";
  }
  console.log(star);
}

console.log("----------------next-----------------");

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j < i+1; j++) {
    star += " *";
  }
  console.log(star);
}

console.log("----------------next-----------------");

//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5
for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j < i+1; j++) {
    star += ` ${j + 1}`;
  }
  console.log(star);
}

console.log("----------------next-----------------");

//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5
for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j < i+1; j++) {
    star += ` ${i + 1}`;
  }
  console.log(star);
}

console.log("----------------next-----------------");

//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1
for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j < n-i; j++) {
    // star += ` ${1+j}`
    star += ` *`;
  }
  console.log(star);
}

console.log("----------------next-----------------");

//  1 1 1 1 1
//  2 2 2 2
//  3 3 3
//  4 4
//  5
for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j < n-i; j++) {
    star += ` ${1 + i}`;
  }
  console.log(star);
}

console.log("----------------next-----------------");

//     *
//    **
//   ***
//  ****
// *****
for (let i = 0; i < n; i++) {
  let star = "";
  for (let j = 0; j < n - (i+1); j++) {
    star += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    star += "*";
  }
  console.log(star);
}

console.log("----------------next-----------------");

//  1
//  1 0
//  1 0 1
//  1 0 1 0
//  1 0 1 0 1
for (let i = 0; i < n; i++) {
  let num = "";
  for (let j = 0; j < 1 + i; j++) {
    if (j % 2 === 0) {
      num += 1;
    } else {
      num += 0;
    }
  }
  console.log(num);
}

// OR

for (let i = 0; i < n; i++) {
  let num = "";
  let toggle = 1;
  for (let j = 0; j < 1 + i; j++) {
    num += toggle;
    if (toggle == 1) toggle = 0;
    else toggle = 1;
  }
  console.log(num);
}

//  1
//  0 1
//  0 1 0
//  1 0 1 0
//  1 0 1 0 1

let toggle = 1;
for (let i = 0; i < n; i++) {
  let num = "";
  for (let j = 0; j < i + 1; j++) {
    num += toggle;
    toggle = 1 - toggle;
  }
  console.log(num);
}