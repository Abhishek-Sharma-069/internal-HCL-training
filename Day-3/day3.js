
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