const nav = ["Home", "Menu", "Contact"];

export default function Header() {
  const header = document.createElement("header");

  header.classList.add(
    "bg-gray-900",
    "opacity-80",
    "text-white",
    "p-4",
    "w-full",
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );

  header.innerHTML = `
  <h1 class="text-6xl text-center">Veggie</h1>
  <nav class="mt-5   text-white text-xl"> ${nav
    .map((el) => {
      console.log;
      return `<button class="nav-button p-5 hover:underline transition-all duration-500 hover:-translate-y-5">${el}</button>`;
    })
    .join("")}</nav>
  `;

  return header;
}
