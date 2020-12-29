function add(num) {
  return new Promise((resolve, reject) => {
    resolve(num + 5);
  });
}

function sub(num) {
  return new Promise((resolve, reject) => {
    resolve(num - 3);
  });
}

function mul(num) {
  return new Promise((resolve, reject) => {
    resolve(num * 2);
  });
}

function div(num) {
  return new Promise((resolve, reject) => {
    resolve(num / 7);
  });
}

async function myFun() {
  let addres = await add(5);
  let subres = await sub(addres);
  let mulres = await mul(subres);
  let finalres = await div(mulres);
  console.log(finalres);
}

myFun();
