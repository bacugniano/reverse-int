module.exports = function reverse (n) {
  
  let b = n.toString().split("");

  if (b[0] == '-') {
    b.shift();
  }

  return b.reverse().join("");

}
