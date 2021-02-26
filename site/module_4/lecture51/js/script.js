// Closures
function makeMutliplier (multiplier){
  function b()
  {
    console.log("Miltiplier is: "+ multiplier);
  }
  b();
  return(
    function(x){
      return multiplier * x;
    }

  );
}

var doubleAll = makeMutliplier(2);
console.log(doubleAll(10)); //its own exec env