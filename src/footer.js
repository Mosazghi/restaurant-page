const contactInfo = {
  name: "Mosazghi",
  github: "https://github.com/Mosazghi",
};

export default function Footer() {
  const footer = document.createElement("footer");

  footer.classList.add(
    "bg-gray-900",
    "opacity-50",
    "text-white",
    "p-4",
    "w-full"
  );
  footer.innerHTML = `
    <p class='text-center'>Created by <a class='hover:underline' href=${contactInfo.github} target='_blank'>${contactInfo.name} </a></p>
  `;

  return footer;
}
