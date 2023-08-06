import contact from "./nav/contact.js";
import home from "./nav/home.js";
import menu from "./nav/menu.js";

export default function Main() {
  const main = document.createElement("main");
  const navBtns = document.querySelector(".nav-button");
  console.log(navBtns);

  main.classList.add("bg-transparent", "text-black", "p-4", "flex-1", "w-full");

  main.innerHTML = "home()";
  return main;
}
