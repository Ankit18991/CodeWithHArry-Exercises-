const lower_limit = 0;
const higher_limit = 255;


let ran_dom1 = parseInt(lower_limit + Math.random() * higher_limit);
let ran_dom2 = parseInt(lower_limit + Math.random() * higher_limit);
let ran_dom3 = parseInt(lower_limit + Math.random() * higher_limit);
let ran_dom4 = parseInt(lower_limit + Math.random() * higher_limit);
let ran_dom5 = parseInt(lower_limit + Math.random() * higher_limit);
let ran_dom6 = parseInt(lower_limit + Math.random() * higher_limit);
let ran_dom7 = parseInt(lower_limit + Math.random() * higher_limit);
let ran_dom8 = parseInt(lower_limit + Math.random() * higher_limit);
let ran_dom9 = parseInt(lower_limit + Math.random() * higher_limit);
let ran_dom10 = parseInt(lower_limit + Math.random() * higher_limit);

console.log("\n" + ran_dom1 + "\n" + ran_dom2 + "\n" + ran_dom3 + "\n")
const random_array = [ran_dom1, ran_dom2, ran_dom3,ran_dom4, ran_dom5,ran_dom6,ran_dom7, ran_dom8, ran_dom9, ran_dom10];

let boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((e) => {
    e.style.color = `rgb(${ran_dom1}, ${ran_dom2}, ${ran_dom3})`;
});

// Applied a circular algorithm
for (let key = 0; key < boxes.length ; key++)
{
        const element = boxes[key];
        if(key > 10){
            key = 0;
        }
        element.style.backgroundColor = `rgb(${random_array[key]}, ${random_array[key+1]}, ${random_array[key+2]})`;
}
