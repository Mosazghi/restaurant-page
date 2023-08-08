import bg from "../../assets/bg.jpg";

export default function menu() {
  const img = document.createElement("img");
  img.classList.add("rounded-full", "shadow-lg", "my-8");
  img.src = bg;

  return `<h2 class="text-2xl mb-3 font-bold">Our Menu</h2> 
          <div class="flex flex-col flex-wrap gap-3 ">
            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>
            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>
            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>
            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>
            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>
          </div>
          `;
}
