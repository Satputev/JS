let mypromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success after 5 sec");
  }, 0);

  setTimeout(() => {
    reject("failure after 3 sec");
  }, 1000);
});
let mypromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("r2 success aft 2");
  }, 5000);
  setTimeout(() => {
    reject("r2 reject aft 3 sec");
  }, 10000);
});

Promise.all([mypromise1, mypromise2]).then(
  posRes => {
    console.log(posRes[0], posRes[1]);
  },
  errRes => {
    console.log(errRes[0], errRes[1]);
  }
);
