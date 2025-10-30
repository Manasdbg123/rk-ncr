import React from "react";

export default function App() {
  const services = [
    { title: "Visiting Card", desc: "Premium and budget visiting cards in all finishes." },
    { title: "Letter Head", desc: "Custom letterheads for professional communication." },
    { title: "Brochure", desc: "Tri-fold, bi-fold brochures and catalogs." },
    { title: "Standee & Flex", desc: "Large format flex, standees and banners." },
    { title: "Vinyl Printing", desc: "Indoor & outdoor vinyl, stickers and gumming." },
    { title: "T-Shirt & Mug Print", desc: "Sublimation & screen printing for garments and mugs." },
    { title: "Name Plate & Letter Board", desc: "Office signages, nameplates and letter boards." },
    { title: "Packaging & Accessories", desc: "Bags, boxes, keychains, trophies and corporate gifting." }
  ];

  function handleQuoteSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value || "Guest";
    const service = form.service.value || "General";
    const email = form.email.value || "";
    const message = form.message.value || "";
    const subject = `Quote request from ${name} - ${service}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:ravi@rkprint.co?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  return (
    <div className="min-h-screen">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-gradient-to-tr from-[#ff7675] to-[#ff4d4f] flex items-center justify-center text-white font-bold">RK</div>
          <div>
            <h1 className="text-2xl font-bold">RK Print NCR</h1>
            <p className="text-sm text-gray-300">Digital | Offset | Screen Printing — Noida</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services" className="hover:text-[#ff4d4f]">Services</a>
          <a href="#portfolio" className="hover:text-[#ff4d4f]">Portfolio</a>
          <a href="#about" className="hover:text-[#ff4d4f]">About</a>
          <a href="#contact" className="bg-[#ff4d4f] text-black px-4 py-2 rounded-md">Get Quote</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Your One-Stop Print Solution in Noida</h2>
            <p className="mt-4 text-gray-300">Visiting cards, brochures, flex, vinyl printing, t-shirt & mug prints — fast turnaround, quality finishes and bulk discounts for businesses.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block bg-[#ff4d4f] text-black px-5 py-3 rounded-md font-medium">Request a Quote</a>
              <a href="#portfolio" className="inline-block border border-gray-700 px-5 py-3 rounded-md">See Portfolio</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-300">
              <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded">Fast Turnaround</div>
              <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded">Bulk Discounts</div>
              <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded">Custom Sizes</div>
              <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded">Free Design Support</div>
              <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded">Doorstep Delivery</div>
              <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded">Secure Payments</div>
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-md shadow-sm">
            <img src="/Banner (1).jpg" alt="Business card sample" className="w-full h-64 object-contain rounded-md" />
            <div className="mt-3 text-xs text-gray-400">Top: visiting card sample — replace with your high-res photos.</div>
          </div>
        </section>

        <section id="services" className="mt-12">
          <h3 className="text-2xl font-semibold">Services</h3>
          <p className="mt-2 text-gray-300">We offer a complete range of print & branding services:</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-4 border border-[rgba(255,255,255,0.04)] rounded-lg hover:shadow-md transition">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
                <button className="mt-4 inline-block text-[#ff4d4f] text-sm">Request Price</button>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Updated Portfolio Section with multiple visible images */}
        <section id="portfolio" className="mt-12">
          <h3 className="text-2xl font-semibold">Portfolio</h3>
          <p className="mt-2 text-gray-300">Recent work and samples.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              // "/fr1.jpg",
              // "/fr2.jpg",
              "/Banner (1).jpg",
              "/Banner (3).jpg",
              "/Banner (5).jpg",
              "/Banner (7).jpg",
              "/Banner (8).jpg",
              "/Banner (6).jpg",
              "/Banner (2).jpg",
              "/Banner (4).jpg",
              "/Banner (1).jpeg",
            ].map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] hover:scale-105 transition-transform duration-300"
              >
                <img src={img} alt={`Portfolio ${index + 1}`} className="w-full h-48 object-cover" />
                <div className="p-3">
                  <div className="font-medium">Sample Print {index + 1}</div>
                  <div className="text-xs text-gray-400 mt-1">Description or finish type.</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-12 bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
          <div className="md:flex md:gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">About RK Print NCR</h3>
              <p className="mt-3 text-gray-300">Founded by Ravi Kumar, RK Print NCR provides digital, offset and screen printing solutions across Gautam Buddh Nagar. We focus on quality, quick turnarounds and transparent pricing. From single visiting cards to large corporate orders, we handle it all.</p>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                <li>✅ High-quality materials</li>
                <li>✅ Fast & reliable delivery</li>
                <li>✅ Experienced design support</li>
                <li>✅ Bulk pricing available</li>
              </ul>
            </div>

            <div className="w-44 h-44 bg-white/5 rounded shadow flex items-center justify-center">
              <img src="/Banner (1).jpg" alt="owner card" className="max-h-36 object-contain" />
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-semibold">Get a Quote</h3>
          <p className="mt-2 text-gray-300">Tell us what you need — we will respond quickly (or use WhatsApp).</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form onSubmit={handleQuoteSubmit} className="space-y-4 bg-[rgba(255,255,255,0.02)] p-4 rounded">
              <div>
                <label className="block text-sm font-medium text-gray-200">Name</label>
                <input name="name" required className="mt-1 w-full bg-transparent border border-[rgba(255,255,255,0.06)] rounded px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">Email</label>
                <input name="email" type="email" required className="mt-1 w-full bg-transparent border border-[rgba(255,255,255,0.06)] rounded px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">Service</label>
                <select name="service" className="mt-1 w-full bg-transparent border border-[rgba(255,255,255,0.06)] rounded px-3 py-2">
                  <option>Visiting Card</option>
                  <option>Brochure</option>
                  <option>Flex / Standee</option>
                  <option>T-Shirt / Mug</option>
                  <option>Packaging / Boxes</option>
                  <option>Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">Message</label>
                <textarea name="message" rows={4} className="mt-1 w-full bg-transparent border border-[rgba(255,255,255,0.06)] rounded px-3 py-2" />
              </div>

              <div className="flex gap-3">
                <button type="submit" className="bg-[#ff4d4f] text-black px-4 py-2 rounded-md">Send Quote</button>
                <a href="https://wa.me/919305697612" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border px-4 py-2 rounded-md text-gray-200">
                  WhatsApp
                </a>
              </div>
            </form>

            <div className="p-4 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
              <h4 className="font-semibold">Contact Details</h4>
              <p className="mt-2 text-sm text-gray-300">Ravi Kumar — Founder & Director</p>
              <p className="mt-1 text-sm">Phone: <a href="tel:+919305697612" className="text-[#ff4d4f]">+91 93056 97612</a></p>
              <p className="text-sm">Email: <a href="mailto:ravi@rkprint.co" className="text-[#ff4d4f]">ravi@rkprint.co</a></p>
              <p className="mt-3 text-sm">Address:</p>
              <address className="not-italic text-sm text-gray-300">C-391, Ground Floor, Sector-10, Gautam Buddh Nagar, Noida - 201301</address>

              <div className="mt-4">
                <h5 className="text-sm font-medium">Opening Hours</h5>
                <p className="text-sm text-gray-300">Mon - Sat: 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t border-[rgba(255,255,255,0.03)] pt-6 pb-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
            <div>© {new Date().getFullYear()} RK Print NCR — All rights reserved.</div>
            <div className="flex gap-3">
              <a href="https://www.rkprint.co" className="hover:text-[#ff4d4f]">Website</a>
              <a href="mailto:ravi@rkprint.co" className="hover:text-[#ff4d4f]">Contact</a>
              <a href="https://wa.me/919305697612" className="hover:text-[#ff4d4f]">WhatsApp</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
