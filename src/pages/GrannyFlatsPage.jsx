import React, { useState } from 'react';
import { ArrowRight, Download, Calendar, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation Variants
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

function GrannyFlatsHero() {
  return (
    <section className="container" style={{ padding: '2rem 1.5rem' }}>
      <div 
        className="hero" 
        style={{ 
          borderRadius: '24px', 
          padding: '8rem 2rem',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%), url(https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1600)',
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
            Granny Flats: Add value to your property and your life
          </motion.h1>
          <motion.p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px' }} variants={fadeInUp}>
            Delivering granny flat builds in just 6 months using our steel frame construction method. 1-bed starting from $167,018.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href="#consultation" className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Download Pricelist
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const quickGuides = [
  { title: 'Enquire Now', desc: 'Thinking about a granny flat? Explore your options today.', action: 'Speak to our team', icon: Search, highlight: true },
  { title: 'Design Consultation', desc: 'Explore your granny flat options with a design consultation.', action: 'Book consultation', icon: Calendar },
  { title: 'Guide to Granny Flats', desc: "Get an understanding of what's involved in building a granny flat.", action: 'Download guide', icon: Download },
  { title: 'Pricelist', desc: 'Discover our complete granny flat pricelist options.', action: 'Download pricelist', icon: Download },
];

function QuickGuides() {
  return (
    <section style={{ padding: '2rem 0 5rem 0' }}>
      <div className="container">
        <motion.div 
          className="guides-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}
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

const serviceDetails = [
  { id: 'granny-flat-designs', title: 'Granny Flat Designs', desc: 'Browse our complete floorplans ranging from 50sqm to 70sqm layouts.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', buttonText: 'View all designs' },
  { id: 'pool-house', title: 'Pool House', desc: "Get summer ready! Enhance your outdoor lifestyle with a custom poolside extension.", image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', buttonText: 'View pool houses' },
  { id: 'rental-unit', title: 'Rental Unit', desc: 'Turn your unused backyard space into an active income stream.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800', buttonText: 'View rental units' },
  { id: 'display-home', title: 'Display Home', desc: 'Visit our Astaire Display Home today to see the quality finishes in person.', image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80&w=800', buttonText: 'View display home' },
];

function ServicesAccordion() {
  const [activeCard, setActiveCard] = useState(serviceDetails[0].id);

  return (
    <section className="services-section" style={{ padding: '4rem 0 6rem 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <motion.h2 
          className="section-title" 
          style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'left' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          Explore Your Options
        </motion.h2>

        <motion.div 
          className="services-accordion-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="services-accordion-label">
            Property Categories
          </div>
          <div className="services-accordion">
            {serviceDetails.map((srv) => {
              const isActive = activeCard === srv.id;
              
              return (
                <div 
                  key={srv.id} 
                  className={`accordion-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCard(srv.id)}
                >
                  <div 
                    className="accordion-bg"
                    style={{ backgroundImage: `url(${srv.image})` }}
                  />
                  <div className="accordion-overlay" />
                  
                  <div className="accordion-content">
                    {/* Vertical Title (Inactive) */}
                    <div className="accordion-title-vertical">
                      {srv.title}
                    </div>

                    {/* Active Content */}
                    <div className="accordion-content-active">
                      <h3>{srv.title}</h3>
                      <p>{srv.desc}</p>
                      <button className="btn-accordion">
                        {srv.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 17 Floorplan Designs!
const allDesigns = [
  { name: 'Astaire Display', beds: 2, baths: 1, size: '70m²', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { name: 'Galtai', beds: 2, baths: 1, size: '70m²', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { name: 'Ellora', beds: 1, baths: 1, size: '50m²', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Astaire', beds: 2, baths: 1, size: '70m²', image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80&w=800' },
  { name: 'Verde', beds: 2, baths: 2, size: '70m²', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' },
  { name: 'Ninu', beds: 2, baths: 2, size: '70m²', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
  { name: 'Niah', beds: 2, baths: 1, size: '63m²', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
  { name: 'Lohani', beds: 2, baths: 1, size: '61m²', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
  { name: 'Kasar', beds: 3, baths: 1, size: '70m²', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { name: 'Gable', beds: 1, baths: 1, size: '50m²', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { name: 'Fingal', beds: 2, baths: 1, size: '62m²', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Allar (Detached Studio)', beds: 1, baths: 1, size: '70m²', image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80&w=800' },
  { name: 'Allar (Detached Bedroom)', beds: 2, baths: 2, size: '70m²', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' },
  { name: 'Tora', beds: 2, baths: 1, size: '70m²', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
  { name: 'Kebara', beds: 1, baths: 1, size: '50m²', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
  { name: 'Greco', beds: 2, baths: 2, size: '70m²', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
  { name: 'Callao', beds: 2, baths: 1, size: '70m²', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800' }
];

function DiscoverDesigns() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
           style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', maxWidth: '600px' }}>Our Granny Flat Designs</h2>
          <p style={{ color: 'var(--color-gray-600)', fontSize: '1.2rem'}}>We have an innovative range of granny flat designs complete with quality inclusions.</p>
        </motion.div>

        <motion.div 
          className="designs-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {allDesigns.map((home, idx) => (
            <motion.div key={idx} className="design-card" variants={fadeInUp}>
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <img src={home.image} alt={home.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>{home.name}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '1rem', color: 'var(--color-primary-dark)', fontWeight: 800 }}>
                    {home.size}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-600)', fontWeight: 600 }}>
                  <span>{home.beds} Bed</span> • <span>{home.baths} Bath</span>
                </div>

                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--color-primary-dark)', fontWeight: 700, textDecoration: 'none' }}>
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

function ReadyIn6Months() {
  return (
    <section className="hl-banner">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          style={{ maxWidth: '600px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Your Granny Flat Ready in Just 6 Months</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '1rem' }}>
            We’ve cut our granny flat build times in half, now completing projects in just 6 months instead of 12. By switching to a modern steel frame construction method, we can deliver a faster, more efficient building process.
          </motion.p>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '2rem' }}>
            The beauty of a shorter build time is simple – less waiting, more living. Instead of watching an empty space in your backyard for a full year, you’ll see your granny flat take shape.
          </motion.p>
          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-gray-900)' }}>Learn more</button>
            <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Speak to the team</button>
          </motion.div>
        </motion.div>
      </div>
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', backgroundImage: 'url(https://images.unsplash.com/photo-1541888081-309bd49071fe?auto=format&fit=crop&q=80&w=1200)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8 }} className="hl-banner-img" />
    </section>
  );
}

// 6 Step Process
const processSteps = [
  { step: '01', title: 'Consultation & Site Visit', desc: 'We take the time to understand your specific needs and help you choose a design that works perfectly for your block.' },
  { step: '02', title: 'Design & Planning', desc: 'Crafting the architectural layout that works within your council constraints.' },
  { step: '03', title: 'Council Approvals', desc: 'We handle the red tape, accelerating standard council approvals across Perth.' },
  { step: '04', title: 'Selection', desc: 'Meet with your Colour Consultant to finalise colours, fittings and fixtures.' },
  { step: '05', title: 'Construction', desc: 'Our steel frame construction method allows us to build efficiently in 6 months.' },
  { step: '06', title: 'Handover', desc: 'Keys in hand, rent it out or move your family members in!' },
];

function ProcessSection() {
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={fadeInUp}
        >
          <h2 className="section-title">Sky Builders' Six Step Granny Flat Process</h2>
          <p style={{ color: 'var(--color-gray-600)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            As one of Perth’s most awarded granny flat builders, we have perfected a streamlined six-step process that takes the complexity out of building. 
          </p>
        </motion.div>
        
        <div style={{ marginTop: '4rem' }}>
          {processSteps.map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '2rem',
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-sm)',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: 'var(--color-primary-dark)',
                opacity: 0.2,
                minWidth: '80px'
              }}>
                {item.step}
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>{item.title}</h4>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  { location: 'Cloverdale', name: 'Eddie and Jane', quote: 'Eddie and Jane have called Cloverdale home for more than four years, raising their two children in a neighbourhood...', image: 'https://images.unsplash.com/photo-1542036710-53bc7c688b1b?auto=format&fit=crop&q=80&w=800' },
  { location: 'Beaconsfield', name: 'Dom & Mia', quote: 'What was the most important thing that you wanted to achieve with your Granny Flat We wanted a build...', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800' },
  { location: 'Floreat', name: 'Multi-Generational Living', quote: 'When a Floreat couple set out to build a granny flat on their spacious block they had owned for years...', image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
  { location: 'Mullaloo', name: 'Warren', quote: 'After a recent health issue made living closer to family a priority, Warren and his wife were...', image: 'https://images.unsplash.com/photo-1600585154526-990dce029141?auto=format&fit=crop&q=80&w=800' },
  { location: 'Singleton', name: 'Katrin and Jean', quote: 'Homeowners Jean and Katrin recently added a Sky Builders Granny Flat to their property...', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { location: 'Wattle Grove', name: 'Owen', quote: 'Owen recently added a 100sqm Granny Flat to his semi-rural property...', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
];

function ClientStories() {
  return (
    <section style={{ backgroundColor: '#f8fafc', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
           style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Granny Flat Case Studies</h2>
        </motion.div>

        <motion.div 
          className="client-stories-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {caseStudies.map((col, idx) => (
            <motion.div key={idx} className="story-card hover-lift" variants={fadeInUp}>
              <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                <img src={col.image} alt={col.names} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={12} /> {col.location}
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>{col.name}</h3>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.6, marginBottom: '1.5rem' }}>"{col.quote}"</p>
                <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                  Read more
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const GrannyFlatsPage = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <GrannyFlatsHero />
      <QuickGuides />
      <ServicesAccordion />
      <DiscoverDesigns />
      <ReadyIn6Months />
      <ProcessSection />
      <ClientStories />
    </div>
  );
};

export default GrannyFlatsPage;
