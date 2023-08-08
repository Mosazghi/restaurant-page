export default function contact() {
  return `  <h2 class="text-2xl mb-3 font-bold">Contact Us</h2> 
            <div class="flex flex-col flex-wrap gap-3 ">
              <div class="p-2 bg-slate-700">
                <h3 class="text-xl mb-3">Opening Hours</h3>
                <p>Monday - Friday: 07:30 - 20:30</p>
                <p>Saturday: 09:00 - 20:30</p>
              </div> 
              <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Address</h3><p>1234 Veggie Lane</p><p>San Francisco, CA</p>
              </div>
              <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Phone</h3><p>(123) 456-7890</p></div>
              <div class="bg-slate-700 p-2"><h3 class="text-xl mb-3">Email<p>Veggie@restaurant.com</p></h3> </div> 
              <div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>
            `;
}
