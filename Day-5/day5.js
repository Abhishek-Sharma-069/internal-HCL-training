
let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");

console.log("Script loaded");

function change(){
    heading1.innerHTML="I am the king";
}

button2.addEventListener("click", ()=>{
    heading2.innerHTML="I am the queen";
});

button3.addEventListener("click", ()=>{
    heading1.style.color="red";
    heading2.style.color="red";
});
button4.addEventListener("click", ()=>{
    heading1.style.color="green";
    heading2.style.color="green";
});
button5.addEventListener("click", ()=>{
    heading1.style.color="blue";
    heading2.style.color="blue";
});

button6.addEventListener("click", ()=>{
    heading1.style.color="black";
    heading2.style.color="black";
});