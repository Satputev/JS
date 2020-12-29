let mypromise1 = new Promise((resolve, reject) => {
  resolve("promise1..");
});

let mypromise2 = new Promise((resolve, reject) => {
  resolve("promise2");
});
//consuming Promises

mypromise1.then(
  posRes => {
    console.log(posRes); //promise1..
  },
  errRes => {
    console.log(errRes);
  }
);

mypromise2.then(
  posRes => {
    console.log(posRes); //promise2
  },
  errRes => {
    console.log(errRes);
  }
);
