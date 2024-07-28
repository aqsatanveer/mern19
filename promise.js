// promise function when value calculated then pending 
// fulfill.... resolve or reject
// even main resolve
// otherwise rejected
// will return anything resolve or rejected
// output depend on other is called promise

// resolve promise((res, rej)) => {
    // a = 2
    // if 
    // }
let num = 3;
const evenOdd = new Promise((){
    if(num % 0) {
    console.log("even"); 
} else {
    console.log("odd");
}
) };
 evenOdd
    .then(res) => {
        console.log(res);
    })
// then catch ak sath nhi chal sakty
.catch((error)) => {
    console.log(error)
})
  .finally((final) => {
    console.log(final);
  });
// optional change promises mae chalye gai
// create digital clock promises set timout function
// promises should be use in recursive 
// promises should be use in loop
// optional mae khud chnage kre  ga
//finally sb mae chlye ga (chain calling) two functions perfome
// push pop kre ga
// pop or chain calling



