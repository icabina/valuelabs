const corchetes = ["{", "}"];
const brackets = ["[", "]"];
const parentesis = ["(", ")"];

const ejemplo = "{[}]}";
//const myArray = n.split("");

function test(n) {
  // Here array.values() function is called.
  const myArray = n.toString().match(/.{1,2}/g);
  //const myArray = n.split("");
  let iterator = myArray.values();
  // All the elements of the array the array are being printed.
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
}
test(ejemplo);

//const newArray = myArray.map(a,b)=>{}
/* const here = myArray => ejemmyArrayplo.every( n => n=== myArray[0] )
allEqual( [1,1,1,1] )  // true */
