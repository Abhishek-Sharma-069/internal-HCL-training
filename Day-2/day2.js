/*
                    Invesitgation study of variables
 */



/*
            1-Try to change value of each and every variable and display the error message if any. 
            2-Redeclare the variable with same name initialize with new value and display the output.
            3-Display all the value of above variable.
*/


let a=23;
const b = "abc";
var c = 78;
d = 88

// Ans-1 = when changing the value of const variable it will generate error;

a = 24;
// b = "sdfa";
c = 80;
d =90

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/workspaces/internal-HCL-training/Day-2/day2.js:22:3)
//     at Module._compile (node:internal/modules/cjs/loader:1706:14)
//     at Object..js (node:internal/modules/cjs/loader:1839:10)
//     at Module.load (node:internal/modules/cjs/loader:1441:32)
//     at Function._load (node:internal/modules/cjs/loader:1263:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49


// Ans-2 can't declare same name of variable in same scope

// Ans -3 
console.log(`a:${a} b:${b} c:${c} d:${d}`); 


let e;
console.log(e)



// ---------------------------------------- important data types ------------------------------

/*
    s.No.   value           type
    1 -     null            object
    2-      undefined ->    undefined
*/





// -------------------------- type casting ----------------------------------------------------

let score = "33mn,";

console.log(typeof(score));
console.log(typeof score);

let score2 = Number(score);
console.log(typeof(score2));
console.log(typeof score2);