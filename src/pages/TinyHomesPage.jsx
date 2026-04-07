import React from 'react';
import { ArrowRight, Download, Search, HelpCircle, MapPin, CheckCircle2, Trees, Leaf, Layers, Building } from 'lucide-react';
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

function TinyHero() {
  return (
    <section className="container" style={{ padding: '2rem 1.5rem' }}>
      <div 
        className="hero" 
        style={{ 
          borderRadius: '24px', 
          padding: '8rem 2rem',
          backgroundImage: 'linear-gradient(to right, rgba(20, 30, 40, 0.8) 0%, rgba(20, 30, 40, 0.3) 100%), url(https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1600)',
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
          <motion.h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem', color: '#fff' }} variants={fadeInUp}>
            Tiny Homes Perth
          </motion.h1>
          <motion.p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, color: '#f8fafc', maxWidth: '600px' }} variants={fadeInUp}>
            Discover award-winning Sky Builders Tiny Homes. Downsize and live the minimalist dream with Perth's leading, bespoke tiny home builders.
          </motion.p>
          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#designs" className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Explore Designs
            </a>
            <a href="#consultation" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: 'transparent' }}>
              Enquire Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const quickGuides = [
  { title: 'Tiny Homes Pricelist', desc: 'Get a clear understanding of our tiny home prices.', action: 'Download list', icon: Download },
  { title: 'Where We Deliver', desc: 'Discover exactly where in WA we deliver our tiny homes.', action: 'View map', icon: MapPin },
  { title: 'Tiny Homes Brochure', desc: 'Discover our complete range of bespoke minimalist designs.', action: 'Download PDF', icon: Download },
  { title: 'Enquire Now', desc: 'Have a question? Speak to our tiny home experts today.', action: 'Speak to team', icon: Search, highlight: true },
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
              <guide.icon size={36} style={{ marginBottom: '1.5rem', color: guide.highlight ? 'white' : 'var(--color-primary)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>{guide.title}</h3>
              <p style={{ flex: 1, color: guide.highlight ? 'rgba(255,255,255,0.9)' : 'var(--color-gray-600)', marginBottom: '2rem', lineHeight: 1.6 }}>{guide.desc}</p>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: guide.highlight ? 'white' : 'var(--color-primary)' }}>
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
  const points = [
    "Tiny homes built in 16 weeks from slab down*",
    "Various finance options available through Westgate Home Loans",
    "Prefabricated off-site using durable TRUECORE® steel frames",
    "Available across Perth metro, rural, and regional WA",
    "Range of bespoke 1-3 bedroom tiny homes designs starting from $162,200",
    "Standalone designs that comply with current building standards"
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-white)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Huge Plans for Tiny Homes</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', lineHeight: '1.7', marginBottom: '2rem' }}>
            With decades of building experience, we have drawn together our expertise to create our new Sky Builders Tiny Homes collection. Encompassing all the same qualities of our award-winning homes, just compacted into a beautiful tiny house with a minimal carbon footprint.
          </motion.p>
          
          <motion.ul variants={fadeInUp} style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {points.map((point, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={24} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--color-gray-800)', lineHeight: 1.5, fontWeight: 500 }}>{point}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInUp}>
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary-dark)' }}>Myaree Village (Opening 2026)</button>
          </motion.div>
        </motion.div>

        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
        >
          <img 
            src="https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&q=80&w=1200" 
            alt="Tiny Home Construction" 
            style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} 
          />
        </motion.div>
      </div>
    </section>
  );
}

const tinyDesigns = [
  { name: 'River', type: 'Single level design', price: 'From $254,000', specs: '2 Bed | 2 Bath', features: ['Built-in Pantry', 'Built-in Robes'], image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800' },
  { name: 'Terra', type: 'Loft design', price: 'From $284,500', specs: '2 Bed | 1 Bath', features: ['High Ceilings', 'Laundry Nook'], image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?auto=format&fit=crop&q=80&w=800' },
  { name: 'Hazel', type: 'Single level design', price: 'From $213,200', specs: '1 Bed | 1 Bath', features: ['Built-in Pantry', 'Built-in Robes'], image: 'https://images.unsplash.com/photo-1542314831-c6a4d1424b91?auto=format&fit=crop&q=80&w=800' },
  { name: 'Meadow', type: 'Single level design', price: 'From $243,600', specs: '2 Bed | 1 Bath', features: ['Built-in Robes', 'Fitted Kitchen'], image: 'https://images.unsplash.com/photo-1620300431327-024af6e771c9?auto=format&fit=crop&q=80&w=800' },
  { name: 'Orion', type: 'Loft design', price: 'From $254,000', specs: '1 Bed | 1 Bath', features: ['Linen Cupboard', 'Loft Design'], image: 'https://images.unsplash.com/photo-1520608596001-3b7c2b6238b9?auto=format&fit=crop&q=80&w=800' },
  { name: 'Aurora', type: 'Single level design', price: 'From $192,800', specs: '1 Bed | 1 Bath', features: ['Equipped Kitchen', 'Open Plan Living'], image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=800' },
];

function TinyDesignsGrid() {
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tiny Home Designs</h2>
          <p style={{ color: 'var(--color-gray-600)', fontSize: '1.2rem', maxWidth: '750px', margin: '0 auto' }}>
            Browse our range of Tiny Home concepts. Choose from simple single-level sanctuaries, intelligent loft designs, and versatile workers' accommodation.
          </p>
        </motion.div>

        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {tinyDesigns.map((home, idx) => (
            <motion.div key={idx} className="design-card hover-lift" variants={fadeInUp} style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                <img src={home.image} alt={home.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'rgba(255,255,255,0.9)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>
                  {home.type}
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.5rem', fontWeight: 800 }}>{home.name}</h3>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', fontWeight: 600 }}>{home.specs}</div>
                  </div>
                  <div style={{ padding: '0.25rem 0.75rem', backgroundColor: '#e0f2fe', borderRadius: '20px', color: 'var(--color-primary-dark)', fontWeight: 700, fontSize: '0.9rem' }}>
                    {home.price}
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {home.features.map((feature, fIdx) => (
                    <span key={fIdx} style={{ fontSize: '0.8rem', backgroundColor: '#f1f5f9', color: 'var(--color-gray-700)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontWeight: 500 }}>
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>
                  View Home Detail <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FlexibleAccommodationInfo() {
  const accommodations = [
    { label: "Student Accommodation", icon: Building },
    { label: "Retreat Accommodation", icon: Trees },
    { label: "Workers' Accommodation", icon: Layers },
    { label: "Eco Tourism / Cabins", icon: Leaf },
  ];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Tiny Size, Huge Potential</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {accommodations.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
              <item.icon size={40} style={{ color: '#bae6fd' }} />
              <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.label}</span>
            </div>
          ))}
        </div>
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
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Need help financing?</h3>
            <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              As Tiny Home finance specialists, Westgate Home Loans works closely with you to streamline the entire process.
            </p>
            <ul style={{ color: 'var(--color-gray-700)', paddingLeft: '1.5rem', lineHeight: '1.7', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>2% deposit</strong> low deposit home loans</li>
              <li>Free valuations and credit reports</li>
              <li>First Home Owner Grant (FHOG) applicable if eligible</li>
            </ul>
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary-dark)' }}>Enquire about finance</button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ padding: '3rem', backgroundColor: '#e0f2fe', borderRadius: '24px' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>Keystart Tiny Home Loan</h3>
            <p style={{ color: 'var(--color-primary-dark)', opacity: 0.8, lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Keystart low deposit home loans can now be used to buy a Tiny Home, helping you achieve your homeownership dream.
            </p>
            <p style={{ color: 'var(--color-primary-dark)', opacity: 0.9, lineHeight: '1.7', fontWeight: 500, marginBottom: '2rem' }}>
              Enjoy low monthly payments during construction and potentially save thousands by avoiding lender's mortgage insurance.
            </p>
            <button className="btn btn-outline" style={{ borderColor: 'var(--color-primary-dark)', color: 'var(--color-primary-dark)' }}>Keystart Calculator</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What considerations should I make before proceeding?", a: "It is essential to conduct a Route Analysis to ensure confident site access. You will also need a Site Survey & site plan plotting setbacks, a Geotech soil test for footing determination, and checking Wind Rating specifications." },
  { q: "Are there additional hidden costs?", a: "Some potential auxiliary costs include Bushfire (BAL) upgrades, site preparation and clearing, connecting services (eater/sewer/power lines run to your home spot), Crane hire if access is tight, and finally transportation/installation based on block distance." },
  { q: "Can I alter the layout of Tiny Homes?", a: "Design layouts are fixed to our standard models to maintain rapid, fixed construction timeframes (16 weeks). However, you have full flexibility over standard colour schemes, fixtures, and interior/exterior finishings." },
  { q: "How long does construction take?", a: "Expect construction to finish within 16 weeks from council approval inside our factory, followed by transportation and onsite connection which usually takes an added 3-4 weeks." }
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Considerations & FAQs</h2>
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
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
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

const TinyHomesPage = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <TinyHero />
      <QuickGuides />
      <BenefitsSection />
      <TinyDesignsGrid />
      <FlexibleAccommodationInfo />
      <FinancingSection />
      <FAQSection />
    </div>
  );
};

export default TinyHomesPage;
