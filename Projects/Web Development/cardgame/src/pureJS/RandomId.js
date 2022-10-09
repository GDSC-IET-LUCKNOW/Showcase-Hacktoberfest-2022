export const RandomId = () => {
  let arr = [];
  while (arr.length < 16) {
    let r = Math.floor(Math.random() * 16);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  //console.log(arr);
  return arr;
};
