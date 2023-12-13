// The ides is to have one container and rest of the cards are added to it.

let body = document.body;
body.style.backgroundColor = "#faf0e6";

var cont = document.querySelector(".container");
var main_container = document.createElement("div");
main_container.classList.toggle("main-container");
main_container.style.width = "70%";
main_container.style.display = "flex";
main_container.style.flexDirection = "column-reverse";
main_container.style.rowGap = "1vh";
cont.before(main_container);
main_container.append(cont);

function createCard(thumbnail, duration, title, cName, views, monthsOld) {
    var card = document.createElement("div");
    card.classList.toggle("card");
    card.style.display = "flex";
    card.style.columnGap = "10%"
    card.style.backgroundColor = "#352f44"
    card.style.height = "10vh";
    card.style.borderRadius = "6px"

    console.log(cont);
    cont.append(card);
    cont.style.display = "flex";
    cont.style.position = "relative";
    cont.style.border = "2px solid black"
    cont.style.color = "white"
    cont.style.flexDirection = "column"
    cont.style.borderRadius = "0.3rem"
    cont.style.rowGap = "1vh";

    let image = document.createElement("img");
    image.setAttribute("src", `${thumbnail}`);
    card.insertAdjacentElement("afterbegin", image);
    image.style.width = "11%";
    image.style.borderRadius = "8px";
    image.style.objectFit = "cover";
    image.style.position = "absolute"; //Taki jab new image insert ho to wo aone container ke abolite alge
    image.style.left = "0px";

    let timing = document.createElement("div");
    timing.innerHTML = `${duration}`;
    image.after(timing);
    timing.style.position = "relative"; // taki jab koi timing function aaye apne function calling time pe, toh new timing element banega aur wo apne container se relative position pe rahega.... 
    timing.style.top = "65%";
    timing.style.left = "7.4%";
    timing.style.backgroundColor = "black";
    timing.style.color = "white";
    timing.style.fontSize = "0.85rem";
    timing.style.padding = "0% 0.25%";
    timing.style.borderRadius = "6px";
    timing.style.overflow = "hidden";
    timing.style.height = "27%";

    let sub_card = document.createElement("div");
    sub_card.classList.toggle("sub-card");
    sub_card.style.display = "flex";
    card.append(sub_card);
    sub_card.style.flexDirection = "column";
    sub_card.style.rowGap = "2vh";

    let primary_heading = document.createElement("div");
    primary_heading.classList.toggle("primary-heading");
    primary_heading.innerHTML = `${title}`;
    sub_card.append(primary_heading);
    primary_heading.style.position = "relative";
    primary_heading.style.top = "0.4vh"
    primary_heading.style.fontSize = "1.2rem"
    primary_heading.style.fontWeight = "400"


    let sub_class = document.createElement("div");
    sub_class.setAttribute("id", "sub-class");
    primary_heading.after(sub_class);
    sub_class.style.display = "flex";
    sub_class.style.columnGap = "2%";

    let sub_class_Element1 = document.createElement("div");
    sub_class_Element1.classList.toggle("views-section");
    sub_class_Element1.innerHTML = `${cName} ▪️`;
    sub_class.append(sub_class_Element1);
    sub_class_Element1.style.opacity = "0.6";

    let sub_class_Element2 = document.createElement("div");
    sub_class_Element2.classList.toggle("views-section");
    sub_class_Element2.innerHTML = `${views} ▪️`;
    sub_class.append(sub_class_Element2);
    sub_class_Element2.style.opacity = "0.6"

    let sub_class_Element3 = document.createElement("div");
    sub_class_Element3.classList.toggle("views-section");
    sub_class_Element3.innerHTML = `${monthsOld} months ago`;
    sub_class.append(sub_class_Element3);
    sub_class_Element3.style.opacity = "0.6";
}

// Random integer between 1 to 8
const limit_min = 1;
const limit_max = 8;
let watches = parseInt(limit_min + (limit_max - limit_min) * Math.random());

const limit_less = 1;
const limit_plus = 999;
let view = limit_less + (limit_plus - limit_less) * Math.random();
let rounded_Up = view.toFixed(1);

let multiplier = {
    1: 1, 2: 1000, 3: 10000, 4: 100000, 5: 1000000, 6: 10000000, 7: 100000000, 8: 1000000000
};

let rounded_up_one = multiplier[watches]*rounded_Up;

let postfix = ((rounded_up_one >= 999999999.9) ? "B" : (((rounded_up_one <= 999999999.9) && (rounded_up_one > 999999.9)) ? "M"  : ((rounded_up_one >= 1000) && (rounded_up_one <= 999999.9)) ? "K" : " "));

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "34:45", "Thanks So much, harry Bhai For launching this amazing productive course | #1", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "34:45", "CSS Variable Mastery With Me ! My friend Suraj, Gaurav, Aryan and Ankit | #2", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "12:56", "DOM Manipulation In Javascript| #3", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "16:08", "I tried to solve Every Question but was not Part of any of the Shoutout| #4", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "04:56", "Even Though i know that shoutouts don't matter| #5", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "56:56", "You know , the curiosity that you get when someone who is better than you is gonna watch your code| #6", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "35:56", "So that Is the message i had that i wanted to Give You through comments| #7", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "40:06", "It took me Quite a while But i did it | #8", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "44:16", "And i Feel confident about it.So, thanks Harry Bhaiya| #9", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

createCard("https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png", "44:16", "And i Feel confident about it.So, thanks Harry| #9", "codeWithHarry", `${rounded_Up}${postfix} views`, 8);

