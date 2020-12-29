let mypromise1 = new Promise((resolve, reject) => {
  resolve("promise1");
  reject("prmise1 reject");
});

let mypromise2 = new Promise((resolve, reject) => {
  reject("promise2 reject");
  resolve("promise2 resolve");
});

let mypromise3 = new Promise((resolve, reject) => {
  resolve("promise3 resolve");
});

mypromise1.then(
  posRes => {
    console.log(posRes); //promise1
  },
  errRes => {
    console.log(errRes);
  }
);

mypromise2.then(
  posRes => {
    console.log(posRes);
  },
  errRes => {
    console.log(errRes); //promise2 reject
  }
);

mypromise3.then(
  posRes => {
    console.log(posRes);
  },
  errRes => {
    console.log(errRes); //promise3 resolve
  }
);
