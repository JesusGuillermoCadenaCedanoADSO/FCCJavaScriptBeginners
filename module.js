//Named Exports: Named exports are useful to export
// several values. During the import, it is mandatory to
// use the same name of the corresponding object. 
0
export const capitalizeString = str => str.toUpperCase();


//Use export to Reuse a Code Block

const capitalizeString2 = (string)=> {
    return string.charAt(0).toUpperCase()+string.slice(1);
}

export {capitalizeString2};

export const foo="bar";
export const bar="foo";

//export default
//Default Exports: Default exports are useful to export only
// a single object, function, variable. During the import, we can use any name to import. 

//export default function subtract(x,y) {return x-y;}


//Using Named and Default Exports at the same time:
// It is possible to use Named and Default exports in the same file.
// It means both will be imported in the same file. Example: 

var xxx=2;
const yyy=4;
function fun() {
   return "This a default export."
}
function square(xxx) {
  return xxx * xxx;
}
export { fun as default, xxx, yyy, square };

