let mp1 = new Promise((resolve, reject) => {
  resolve("p1");
});

let mp2 = new Promise((resolve, reject) => {
  resolve("p2");
});

Promise.all([mp1, mp2]).then(
  posRes => {
    console.log(posRes[0], posRes[1]); //p1 p2
  },
  errRes => {
    console.log(errRes[0], errRes[1]);
  }
);

//if any one is rejectes then success not printed..only reject printed when we use then() function
