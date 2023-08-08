import background from "./assets/background.jpg";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Main from "./components/main.js";

document.body.style.overflowX = "hidden";

const content = document.getElementById("content");
content.style.backgroundImage = `url(${background})`;

content.classList.add(
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "min-h-screen",
  "w-screen",
  "bg-cover",
  "bg-no-repeat",
  "overflow-x-hidden",
  "bg-fixed"
);

content.appendChild(Header());
content.append(Main(), Footer());
