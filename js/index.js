// Your code goes here

// I STYLED AND ADDED MOUSEOVER EVENT AND STYLED THE NAVIGATION
const display = document.querySelector(".main-navigation");
console.log(display);

display.style.backgroundColor = "white";
display.addEventListener("mouseover", event => {
  console.log(
    "Mouse has been moved to",
    `[${event.screenX}, ${event.screenY}]`
  );
});

// I STYLED THE HEADER TEXT
const logo = document.querySelector(`h1`);
console.log(logo);

logo.style.fontSize = "40px";
logo.style.fontWeight = "bold";
logo.style.color = "brown";

// I STYLED THE ANCHOR TAGS

const anchorTags = document.querySelector(".nav-link");
console.log(anchorTags);
anchorTags.style.border = "1px solid black";
anchorTags.style.width = "80px";
anchorTags.style.paddingLeft = "15px";
anchorTags.style.paddingTop = "6px";
anchorTags.style.backgroundColor = "crimson";
anchorTags.style.height = "30px";

anchorTags.addEventListener("onfocus", event => {
  console.log(`Clicked`);
});

//

const button = document.querySelector(".btn");
console.log(button);
button.style.color = 'black';
button.style.backgroundColor = '#00008b'
button.addEventListener("dblclick", event => {
  alert(`THANK YOU FOR SIGNING UP`);
});

