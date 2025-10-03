export default function Home() {
  return (
    <div className="bg-[#F3EDE4] text-[#1F2937]">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#F3EDE4]/70 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-3">
          <a href="#top" className="font-bold tracking-tight text-2xl sm:text-3xl">
            <span className="text-[#037A88]">MindFit</span> Success
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[#037A88] hover:underline">Services</a>
            <a href="#programs" className="hover:text-[#037A88] hover:underline">Programmes</a>
            <a href="#stories" className="hover:text-[#037A88] hover:underline">Client Stories</a>
            <a href="#about" className="hover:text-[#037A88] hover:underline">About</a>
            <a href="#faqs" className="hover:text-[#037A88] hover:underline">FAQs</a>
          </nav>
          <a href="#book" className="bg-[#037A88] hover:bg-[#02525C] text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-md hover:shadow-lg transition">Book a free 20-min call</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center pt-12 pb-10">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Train your mind. <span className="text-[#037A88]">Transform your life.</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            Mindset coaching and clinical-grade hypnotherapy to overcome blocks, reduce anxiety, and move forward with confidence, online across the UK.
          </p>
          <p className="mt-2 text-base italic text-[#037A88]">Empower your mind • Rebuild your energy • Thrive with confidence</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#book" className="bg-[#037A88] hover:bg-[#02525C] text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-md hover:shadow-lg transition">Book a free 20-min call</a>
            <a href="#programs" className="border border-[#037A88] text-[#037A88] hover:border-[#02525C] hover:text-[#02525C] hover:bg-[#02525C]/20 px-4 py-2 rounded-2xl text-sm font-medium transition">Explore programmes</a>
          </div>
        </div>
        <div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop" alt="Calm morning run along the coast" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {[{
            id: 'coaching',
            title: 'Coaching',
            desc: 'Structured, goal-led sessions for clarity, strategy and accountability.',
            cta: 'View Coaching'
          },{
            id: 'hypnotherapy',
            title: 'Hypnotherapy',
            desc: 'Evidence-informed hypnosis for anxiety, sleep, habits and pain modulation.',
            cta: 'View Hypnotherapy'
          },{
            id: 'corporate',
            title: 'Corporate',
            desc: 'Workshops and 1:1 clinics for wellbeing and performance in teams.',
            cta: 'For Organisations'
          }].map(card => (
            <div key={card.id} className="bg-white rounded-2xl shadow-sm p-4 flex flex-col border border-transparent hover:border-[#037A88] transition h-full">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-black/75 mt-2 flex-1">{card.desc}</p>
              <div className="mt-auto pt-4">
                <a href={`#${card.id}`} className="block border border-[#037A88] text-[#037A88] hover:border-[#02525C] hover:text-[#02525C] hover:bg-[#02525C]/20 px-4 py-2 rounded-2xl text-sm font-medium text-center transition">{card.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Programmes that fit your life</h2>
        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {[{
            name: 'Reset (4 weeks)',
            copy: 'Rapid relief for stress and sleep; weekly sessions plus audio support.',
            price: 'From £X/session'
          },{
            name: 'Momentum (8 weeks)',
            copy: 'Coaching to instill habits; gain clarity and confidence.',
            price: 'Packages from £Y'
          },{
            name: 'Thrive (12 weeks)',
            copy: 'Deep work on identity, purpose and performance; ideal post treatment.',
            price: 'Custom'
          }].map(plan => (
            <div key={plan.name} className="bg-white rounded-2xl shadow-sm p-4 flex flex-col border border-transparent hover:border-[#037A88] transition h-full">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm text-black/75 mt-2 flex-1">{plan.copy}</p>
              <p className="text-sm font-medium mt-3">{plan.price}</p>
              <div className="mt-auto pt-6">
                <a href="#book" className="block bg-[#037A88] hover:bg-[#02525C] text-white px-4 py-2 rounded-2xl text-sm font-medium text-center shadow-md hover:shadow-lg transition">Compare and book</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Stories */}
      <section id="stories" className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Client Stories</h2>
        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {[{
            name: 'Sarah, 42',
            story: 'After breast cancer treatment I felt stuck. Coaching with MindFit Success gave me confidence to return to work and feel like myself again.'
          },{
            name: 'James, 36',
            story: 'Hypnotherapy helped me break a 10-year habit and improve my sleep. I feel more present with my family.'
          },{
            name: 'Aisha, 29',
            story: 'The Momentum programme gave me clarity and direction when I was overwhelmed. I finally feel in control of my future.'
          }].map(client => (
            <div key={client.name} className="bg-white rounded-2xl shadow-sm p-4 flex flex-col border border-transparent hover:border-[#037A88] transition h-full">
              <p className="text-sm text-black/75 flex-1 italic">“{client.story}”</p>
              <div className="mt-4 font-medium text-[#037A88]">— {client.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-3">About Us</h2>
            <p className="text-black/80">
              We combine rigorous Coaching with clinical-standard Hypnotherapy to help you quiet the noise, make better decisions and feel good in your body again. With a background in blue-chip pharmaceuticals, our approach is evidence-led and grounded. We also fundraise and trek for breast cancer charities, so we know what it means to rebuild.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
              <li>✔ NLP Master Practitioner</li>
              <li>✔ Certified Hypnotherapist</li>
              <li>✔ Enhanced DBS</li>
              <li>✔ UK based • Europe/London</li>
            </ul>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop" alt="Calm consulting room" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Photos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1400&auto=format&fit=crop" alt="Client coaching conversation" className="rounded-2xl shadow-md" />
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop" alt="Sunrise over mountain ridge" className="rounded-2xl shadow-md" />
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop" alt="Notebook, tea and headphones" className="rounded-2xl shadow-md" />
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">FAQs & safety</h2>
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <details className="py-2">
            <summary className="cursor-pointer font-medium hover:text-[#037A88]">What is hypnotherapy and is it safe?</summary>
            <p className="text-sm text-black/75 mt-2">Hypnotherapy uses focused attention and relaxation to access helpful states for change. You remain in control and can stop at any time. We follow safe practice guidelines and will collaborate with your GP/clinician when appropriate.</p>
          </details>
          <details className="py-2">
            <summary className="cursor-pointer font-medium hover:text-[#037A88]">How do sessions work?</summary>
            <p className="text-sm text-black/75 mt-2">45–60 minutes via secure Zoom or in person by arrangement. We’ll set goals, track progress, and you’ll have simple between-session tools. Packages available.</p>
          </details>
          <details className="py-2">
            <summary className="cursor-pointer font-medium hover:text-[#037A88]">Are there any contraindications?</summary>
            <p className="text-sm text-black/75 mt-2">Yes — certain conditions require adapted approaches or referral. We’ll complete a screening form first to ensure suitability.</p>
          </details>
          <details className="py-2">
            <summary className="cursor-pointer font-medium hover:text-[#037A88]">Payments, cancellations & receipts</summary>
            <p className="text-sm text-black/75 mt-2">Card payments accepted. You can reschedule with 24 hours’ notice. Receipts provided; hypnotherapy is complementary and not a substitute for medical care.</p>
          </details>
        </div>
      </section>

      {/* CTA Bar */}
      <section id="book" className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Ready to get started?</h2>
            <p className="text-black/80 mt-2">Book a free 20-minute discovery call. UK timezone (Europe/London). You’ll receive an email confirmation and a brief intake form.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-4 border border-transparent hover:border-[#037A88] transition">
            <form onSubmit={(e)=>e.preventDefault()} className="grid gap-3">
              <input className="border rounded-2xl px-3 py-2 focus:border-[#037A88] focus:ring-1 focus:ring-[#037A88] outline-none" placeholder="Your name" required />
              <input className="border rounded-2xl px-3 py-2 focus:border-[#037A88] focus:ring-1 focus:ring-[#037A88] outline-none" placeholder="Email" type="email" required />
              <input className="border rounded-2xl px-3 py-2 focus:border-[#037A88] focus:ring-1 focus:ring-[#037A88] outline-none" placeholder="Phone (optional)" />
              <textarea className="border rounded-2xl px-3 py-2 min-h-[100px] focus:border-[#037A88] focus:ring-1 focus:ring-[#037A88] outline-none" placeholder="What would you like help with?" />
              <button className="bg-[#037A88] hover:bg-[#02525C] text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-md hover:shadow-lg transition">Request call</button>
              <p className="text-xs text-black/60">By submitting, you consent to being contacted about your enquiry. See Privacy & Cookies below.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t border-black/10 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold text-lg"><span className="text-[#037A88]">MindFit</span> Success</div>
            <p className="text-sm text-black/70 mt-2">Coaching and Hypnotherapy online across the UK.</p>
          </div>
          <div className="text-sm">
            <div className="font-medium mb-2">Quick links</div>
            <ul className="space-y-1">
              <li><a href="#services" className="hover:text-[#037A88] hover:underline">Services</a></li>
              <li><a href="#programs" className="hover:text-[#037A88] hover:underline">Programmes</a></li>
              <li><a href="#stories" className="hover:text-[#037A88] hover:underline">Client Stories</a></li>
              <li><a href="#about" className="hover:text-[#037A88] hover:underline">About</a></li>
              <li><a href="#faqs" className="hover:text-[#037A88] hover:underline">FAQs</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-medium mb-2">Legal</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-center text-black/60 pb-8">
          © 2025 MindFit Success. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
