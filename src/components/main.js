// nav buttons
import contact from "./nav/contact.js";
import home from "./nav/home.js";
import menu from "./nav/menu.js";

export default function Main() {
  const main = document.createElement("main");
  const navBtns = document.querySelectorAll(".nav-button");

  main.classList.add(
    "bg-slate-500",
    "transition-all",
    "sm:opacity-70",
    "opacity-90",
    "text-white",
    "p-8",
    "my-0",
    "sm:my-10",
    "flex-1",
    "sm:w-96",
    "w-full"
  );

  main.innerHTML = home();
  navBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      main.innerHTML = "";
      switch (btn.innerText) {
        case "Home":
          main.innerHTML = home();
          break;
        case "Menu":
          main.innerHTML = menu();
          break;
        case "Contact":
          main.innerHTML = contact();
          break;
      }
    });
  });

  return main;
}
