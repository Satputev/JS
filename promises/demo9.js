let mypromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("mypromise1 resolve");
  }, 5000);

  setTimeout(() => {
    reject("mypromise1 reject");
  }, 3000);
});

let mypromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("mypromise2 resolve");
  }, 2000);
  setTimeout(() => {
    reject("mypromise2 reject");
  }, 4000);
});

mypromise1.then(
  PosRes => {
    console.log(PosRes);
  },
  errRes => {
    console.log(errRes); //mypromise1 reject
  }
);

mypromise2.then(
  PosRes => {
    console.log(PosRes); //mypromise2 resolve
  },
  errRes => {
    console.log(errRes);
  }
);
