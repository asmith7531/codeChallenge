//writes the completeTriangle up to row k to html doc
function pascalsTriangle(k) {
  var completeTriangle = [];
  while (k >= 0) {
    //setting n to be constant for this row
    var n = k;
    //'row' and n both equal k to start, but 'row' has to iterate during the for loop and n stays constant
    var row = k;
    // making sure to clear string where current row is stored on every while iteration
    var all = "";
    //calculates the values in the pascal's triangle for the current row, result is added to the 'all' string, same as the equation given in the problem description
    for (row; row >= 0; row--) {
      var nFactorialized = factorialize(n);
      var kFactorialized = factorialize(row);
      var diff = n - row;
      var nkFactorialized = factorialize(diff);
      //dividing the factorial of k by k times the factorial of the difference between k and n
      var result = nFactorialized / (kFactorialized * nkFactorialized);
      //adding the result of this location of the pascal triangle to a string with a space to keep multi digit results from single digit results
      all += result + " ";
    }
    k--;
    completeTriangle.push(all);
  }
  completeTriangle.reverse();
  document.write(completeTriangle.join("<br />"));
}
//this finds the factorial of any number
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
