import bg from "../../assets/bg.jpg";

export default function home() {
  const img = document.createElement("img");
  img.classList.add("rounded-full", "shadow-lg");
  img.src = bg;

  return `<h2 class="text-2xl mb-3 font-bold">Welcome to Veggie Restaurant</h2> 
          <div class="space-y-5">
            <p>A restaurant where food and services will not disappoint you!</p>
            <p>Our menu is 100% vegan and we have a wide variety of dishes.</p>
            <p>Not interested in vegan? Grab some coffee!</p>
            ${img.outerHTML}
            <p>So what are you waiting for?! Order now!</p>
          </div>
          <div class="text-center mt-5">
          <h3 class="text-xl mb-3">Opening Hours</h3>
          <p>Monday - Friday: 07:30 - 20:30</p>
          <p>Saturday: 09:00 - 20:30</p>
          </div> 
          `;
}
