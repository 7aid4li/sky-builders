import React, { useState } from 'react';
import { ArrowRight, Download, Search, Building2, HelpCircle, MapPin, CheckCircle2, Factory, Home, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function ModularHero() {
  return (
    <section className="container" style={{ padding: '2rem 1.5rem' }}>
      <div 
        className="hero" 
        style={{ 
          borderRadius: '24px', 
          padding: '8rem 2rem',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%), url(https://images.unsplash.com/photo-1542036710-53bc7c688b1b?auto=format&fit=crop&q=80&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'left'
        }}
      >
        <motion.div 
          className="hero-content"
          style={{ margin: '0', maxWidth: '700px' }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }} variants={fadeInUp}>
            Modular Homes Perth
          </motion.h1>
          <motion.p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px' }} variants={fadeInUp}>
            Custom-designed modular homes in Perth, built in just 16 weeks. Browse our award-winning modular designs paired with completely bespoke prefab construction today.
          </motion.p>
          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#designs" className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              View Designs
            </a>
            <a href="#consultation" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Enquire Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const quickGuides = [
  { title: 'Enquire Now', desc: 'Have a question about modular living? Contact our experts today.', action: 'Speak to team', icon: Search, highlight: true },
  { title: 'Modular Brochure', desc: 'Discover our complete range of bespoke modular designs.', action: 'Download PDF', icon: Download },
  { title: 'Pricelist', desc: "Get a full understanding of modular home pricing and inclusions.", action: 'Download list', icon: Download },
  { title: 'Delivery Map', desc: 'Discover exactly where in WA we can deliver our modular homes.', action: 'View map', icon: MapPin },
];

function QuickGuides() {
  return (
    <section style={{ padding: '2rem 0 5rem 0' }}>
      <div className="container">
        <motion.div 
          className="guides-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {quickGuides.map((guide, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              style={{
                backgroundColor: guide.highlight ? 'var(--color-primary-dark)' : '#f8fafc',
                color: guide.highlight ? 'white' : 'var(--color-gray-900)',
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              className="hover-lift"
            >
              <guide.icon size={36} style={{ marginBottom: '1.5rem', color: guide.highlight ? 'white' : 'var(--color-primary-dark)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>{guide.title}</h3>
              <p style={{ flex: 1, color: guide.highlight ? 'rgba(255,255,255,0.9)' : 'var(--color-gray-600)', marginBottom: '2rem', lineHeight: 1.6 }}>{guide.desc}</p>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: guide.highlight ? 'white' : 'var(--color-primary-dark)' }}>
                {guide.action} <ArrowRight size={16} />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { text: "Built in as little as 16 weeks from slab delivery", icon: Zap },
    { text: "Prefabricated off-site in our advanced production yard", icon: Factory },
    { text: "Durable steel frame construction method", icon: ShieldCheck },
    { text: "Scalable for single-home or multi-residential projects", icon: Building2 },
    { text: "Available across Perth metro, rural, and regional WA", icon: MapPin },
    { text: "3-bedroom starting from $268,400", icon: Home },
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-white)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
        >
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
            alt="Modular Construction" 
            style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} 
          />
        </motion.div>
        
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Flexible & Fast Building Solutions</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', lineHeight: '1.7', marginBottom: '2rem' }}>
            We specialise in delivering modular homes to home buyers as well as industry partners, offering scalable solutions that redefine modern modular living. Embracing the power of prefabrication, we harness efficiency that exceeds the limitations of traditional on-site construction.
          </motion.p>

          <motion.div variants={fadeInUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {benefits.map((benefit, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <benefit.icon size={24} style={{ color: 'var(--color-primary-dark)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-gray-800)', lineHeight: '1.4' }}>{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const modularDesigns = [
  { name: 'Hammersley', beds: 3, baths: 2, cars: 1, price: 'From $299,600', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Frankland', beds: 3, baths: 2, cars: 1, price: 'From $273,400', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' },
  { name: 'Riverstone', beds: 4, baths: 2, cars: 2, price: 'From $338,400', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { name: 'Blackwood', beds: 3, baths: 2, cars: 1, price: 'From $270,400', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { name: 'Oakover', beds: 3, baths: 2, cars: 1, price: 'From $268,400', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
  { name: 'Avon', beds: 3, baths: 2, cars: 1, price: 'From $271,600', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
];

function ModularDesigns() {
  return (
    <section id="designs" style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
           style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Modular Home Designs</h2>
          <p style={{ color: 'var(--color-gray-600)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Browse our new range of modular home designs, carefully crafted for modern living and rapid construction.
          </p>
        </motion.div>

        <motion.div 
          className="designs-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {modularDesigns.map((home, idx) => (
            <motion.div key={idx} className="design-card hover-lift" variants={fadeInUp} style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                <img src={home.image} alt={home.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>{home.name}</h3>
                  <div style={{ padding: '0.25rem 0.75rem', backgroundColor: '#f1f5f9', borderRadius: '20px', color: 'var(--color-primary-dark)', fontWeight: 700, fontSize: '0.9rem' }}>
                    {home.price}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--color-gray-600)', fontWeight: 600, borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '1rem 0', margin: '1rem 0' }}>
                  <span>🛏️ {home.beds} Bed</span>
                  <span>🛁 {home.baths} Bath</span>
                  <span>🚗 {home.cars} Car</span>
                </div>

                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>
                  View home design <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinancingSection() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ padding: '3rem', backgroundColor: '#f8fafc', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--color-primary)' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Keystart Modular Home Loan</h3>
            <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              If you’ve been thinking about building a Modular Home, now is the perfect time. Keystart low deposit loans can now be used to buy a modular home.
            </p>
            <ul style={{ color: 'var(--color-gray-700)', paddingLeft: '1.5rem', lineHeight: '1.7', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Get started with just a <strong>2% deposit</strong></li>
              <li>Avoid paying lender’s mortgage insurance</li>
              <li>Make low monthly payments during construction</li>
            </ul>
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary-dark)' }}>Calculate borrowing power</button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ padding: '3rem', backgroundColor: '#1e293b', color: 'white', borderRadius: '24px' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Westgate Finance</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              As Modular finance specialists, Westgate works with you and us to streamline the process and find the right loan — from start to finish.
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '1.5rem', lineHeight: '1.7', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Exclusive access to tailored finance options</li>
              <li>Free valuations and credit reports</li>
              <li>Construction finance experts</li>
            </ul>
            <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Speak to Westgate</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What is a Modular Home?", a: "A modular home is a housing solution where the home is prefabricated and built in a factory before being transported to the site for final assembly. The key benefits include reduced construction time frames, reduced cost, and reduced environmental impact." },
  { q: "Why should I choose a Modular Home?", a: "Modular homes offer several advantages: they are typically built within 16 weeks, they are often more cost-effective (especially in rural areas), they cause less site disruption, and our factory construction ensures strict quality control." },
  { q: "How do I determine if my site is suitable?", a: "Site suitability depends primarily on access for delivery and crane placement. You'll need adequate road access for transport vehicles and sufficient space for a crane. We can conduct a site assessment to identify potential challenges and discuss solutions." },
  { q: "Can the modular homes be customised?", a: "Yes. You can personalise your home with fixture and finish selections for kitchens, bathrooms, and flooring, as well as choose your preferred interior and exterior colour schemes. Some layout modifications may also be possible." }
];

function FAQSection() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
           style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Modular FAQs</h2>
        </motion.div>

        <motion.div 
          style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}
            >
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <HelpCircle style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} size={24} />
                {faq.q}
              </h4>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.7', margin: 0, paddingLeft: '2.5rem' }}>{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const ModularHomesPage = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <ModularHero />
      <QuickGuides />
      <BenefitsSection />
      <ModularDesigns />
      <FinancingSection />
      <FAQSection />
    </div>
  );
};

export default ModularHomesPage;
