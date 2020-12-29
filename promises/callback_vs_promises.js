function add(num, callBack) {
  return callBack(num + 5, false);
}

function sub(num, callBack) {
  add(num, (addRes, err) => {
    if (!err) {
      return callBack(addRes - 3, false);
    }
  });
}

function mul(num, callBack) {
  sub(num, (subRes, err) => {
    if (!err) {
      return callBack(subRes * 2, false);
    }
  });
}

function div(num, callBack) {
  mul(num, (mulRes, err) => {
    if (!err) {
      return callBack(mulRes / 7);
    }
  });
}