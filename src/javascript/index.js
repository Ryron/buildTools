let JsonEqual = (a, b) => {
  if (a === b) {
    return true;
  } else if (!a || !b || typeof a != 'object' || typeof b != 'object') {
    return a === b;
  } else {
    return objEqual(a, b);
  }
}
let objEqual = (a, b) => {
  let akeyArray = Object.keys(a).sort();
  let bkeyArray = Object.keys(b).sort();
  // 长度不相等
  if (akeyArray.length !== bkeyArray.length) {
    return false;
  }
  for (let i = akeyArray.length - 1; i >= 0; i--) {
    if (akeyArray[i] !== bkeyArray[i]) {
      return false;
    }
  }
  for (let j = akeyArray.length - 1; j >= 0; j--) {
    let key = akeyArray[j];
    if (!JsonEqual(a[key], b[key])) {
      return false;
    }
  }
  return typeof a === typeof b;
}