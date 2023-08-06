import Footer from "./footer.js";
import Header from "./header.js";
import Main from "./main.js";

const content = document.getElementById("content");

content.classList.add(
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "min-h-screen",
  "w-screen"
);

content.append(Header(), Main(), Footer());
console.log("Hello World!");
const navBtns = document.querySelectorAll(".nav-button");
console.log(navBtns);
