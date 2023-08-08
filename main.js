(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&!t;)t=a[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=["Home","Menu","Contact"],n=e.p+"9bbbfecfd03350f5d352.jpg";function a(){const e=document.createElement("img");return e.classList.add("rounded-full","shadow-lg"),e.src=n,`<h2 class="text-2xl mb-3 font-bold">Welcome to Veggie Restaurant</h2> \n          <div class="space-y-5">\n            <p>A restaurant where food and services will not disappoint you!</p>\n            <p>Our menu is 100% vegan and we have a wide variety of dishes.</p>\n            <p>Not interested in vegan? Grab some coffee!</p>\n            ${e.outerHTML}\n            <p>So what are you waiting for?! Order now!</p>\n          </div>\n          <div class="text-center mt-5">\n          <h3 class="text-xl mb-3">Opening Hours</h3>\n          <p>Monday - Friday: 07:30 - 20:30</p>\n          <p>Saturday: 09:00 - 20:30</p>\n          </div> \n          `}const s=document.getElementById("content");s.classList.add("flex","flex-col","items-center","justify-center","min-h-screen","w-screen"),s.appendChild(function(){const e=document.createElement("header");return e.classList.add("bg-gray-900","opacity-90","text-white","p-4","w-full","flex","flex-col","justify-center","items-center"),e.innerHTML=`\n  <h1 class="text-6xl text-center">Veggie</h1>\n  <nav class="mt-5   text-white text-xl"> ${t.map((e=>(console.log,`<button class="nav-button p-5 cursor-pointer hover:underline transition-all duration-500 hover:-translate-y-2">${e}</button>`))).join("")}</nav>\n  `,e}()),s.append(function(){const e=document.createElement("main"),t=document.querySelectorAll(".nav-button");return e.classList.add("bg-slate-500","transition-all","sm:opacity-70","opacity-90","text-white","p-8","my-0","sm:my-10","flex-1","sm:w-96","w-full"),e.innerHTML=a(),t.forEach((t=>{t.addEventListener("click",(s=>{switch(e.innerHTML="",t.innerText){case"Home":e.innerHTML=a();break;case"Menu":e.innerHTML=function(){const e=document.createElement("img");return e.classList.add("rounded-full","shadow-lg","my-8"),e.src=n,'<h2 class="text-2xl mb-3 font-bold">Our Menu</h2> \n          <div class="flex flex-col flex-wrap gap-3 ">\n            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n            <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n          </div>\n          '}();break;case"Contact":e.innerHTML='  <h2 class="text-2xl mb-3 font-bold">Contact Us</h2> \n            <div class="flex flex-col flex-wrap gap-3 ">\n              <div class="p-2 bg-slate-700">\n                <h3 class="text-xl mb-3">Opening Hours</h3>\n                <p>Monday - Friday: 07:30 - 20:30</p>\n                <p>Saturday: 09:00 - 20:30</p>\n              </div> \n              <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Address</h3><p>1234 Veggie Lane</p><p>San Francisco, CA</p>\n              </div>\n              <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Phone</h3><p>(123) 456-7890</p></div>\n              <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Email<p>Veggie@restaurant.com</p></h3> </div> \n              <div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>\n            '}}))})),e}(),function(){const e=document.createElement("footer");return e.classList.add("bg-gray-900","opacity-50","text-white","p-4","w-full","min-h-full"),e.innerHTML="\n    <p class='text-center'>Created by <a class='hover:underline' href=https://github.com/Mosazghi target='_blank'>Mosazghi </a></p>\n  ",e}())})();