
let fun = function (n)
{
    return n*2
}

console.log(fun(72));


//---------Array----------


let arr = ["King", 1, 3, 0.9, fun(10)];

console.log(arr);


// ------------------------------------------ Basic Functions of array-------------

fruits = ["Apple", "Strawberry", "Pineapple","Gwava"];

fruits.forEach(element => {
    console.log(element);
});


fruits.push("papaya");
fruits.pop();

fruits.unshift("kiwi");

console.log(fruits.includes("Mango"));

console.log(fruits.indexOf("Banana"));



// map , filter, reduce in array

let numbers = [2,3,4,5];

let mappedNumber = numbers.map(val=>val*2);

let filterdNumber = numbers.map(val=>val%2==0);

console.log(`mapped values: ${mappedNumber} filterd values: ${filterdNumber}`)


let reducedNumber = numbers.reduce((acc,val) => acc+val,0);
console.log(`Reduced values: ${reducedNumber}`)