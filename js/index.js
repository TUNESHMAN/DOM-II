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

const anchorTags = document.querySelectorAll(".nav-link");
console.log(anchorTags);

for (let i = 0; i < anchorTags.length; i++) {
  anchorTags[i].style.border = "1px solid black";
  anchorTags[i].style.width = "88px";
  anchorTags[i].style.paddingLeft = "15px";
  anchorTags[i].style.paddingTop = "6px";
  anchorTags[i].style.backgroundColor = "crimson";
  anchorTags[i].style.height = "40px";
  anchorTags[i].style.marginRight = "5px";

  anchorTags[i].addEventListener("click", event => {
    event.preventDefault();
  });
}

const button = document.querySelectorAll(".btn");
console.log(button);
for (let i = 0; i < button.length; i++) {
  button[i].style.color = "black";
  button[i].style.backgroundColor = "#00008b";

  button[i].addEventListener("dblclick", event => {
    alert(`THANK YOU FOR SIGNING UP`);
  });
}

const subHeader = document.querySelectorAll("h2");
for (let i = 0; i < subHeader.length; i++) {
  subHeader[i].style.color = "#A9A9A9";
  subHeader[i].style.fontFamily = "Arial";

  subHeader[i].addEventListener("mouseout", event => {
    console.log(`Mouse out of me!`);
  });
}

const smallHeader = document.querySelectorAll("h4");
for (let i = 0; i < smallHeader.length; i++) {
  smallHeader[i].style.color = "black";
  smallHeader[i].style.fontStyle = "Oblique";
  smallHeader[i].style.border = "1px solid black";
  smallHeader[i].style.textAlign = "center";
  smallHeader[i].style.borderRadius = "5px";
  smallHeader[i].style.paddingTop = "7px";
  smallHeader[i].style.backgroundColor = "red";

  smallHeader[i].addEventListener("mouseenter", () => {
    alert(`The mouse is here`);
  });
}

const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("drag", event => {
    console.log(`Picture is dragged`);
  });
}

const frame = document.querySelector("footer");
// console.log(frame);

frame.style.backgroundColor = "gray";
frame.addEventListener("select", event => {
  console.log(`I have moved`);
});
