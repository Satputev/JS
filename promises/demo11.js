let mypromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 5000);
  setTimeout(() => {
    reject("fail.");
  }, 2000);
});

mypromise1.then(
  posRes => {
    console.log(posRes);
  },
  errRes => {
    console.log(errRes); //fail. after 2 sec
  }
);
