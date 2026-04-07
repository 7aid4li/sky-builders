import React, { useState } from 'react';
import { ArrowRight, Download, Search, MapPin, Building, Home, Users, BarChart3 } from 'lucide-react';
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

function DevelopmentsHero() {
  return (
    <section className="container" style={{ padding: '2rem 1.5rem' }}>
      <div 
        className="hero" 
        style={{ 
          borderRadius: '24px', 
          padding: '8rem 2rem',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600)',
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
            Property Developments: Maximise your land's potential
          </motion.h1>
          <motion.p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px' }} variants={fadeInUp}>
            We are Perth's property development experts with over 60 years of experience. Find the perfect property development for your block.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href="#consultation" className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Book a design consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const quickGuides = [
  { title: 'Enquire Now', desc: 'Contact us to explore your development opportunities and maximise your returns.', action: 'Enquire now', icon: Search, highlight: true },
  { title: 'Design Consultation', desc: 'Begin to bring your vision to life with an obligation free design consultation.', action: 'Book consultation', icon: Building },
  { title: 'Backyard Investments', desc: "Discover your backyard’s full potential with our beginners guide to investments.", action: 'Download guide', icon: Download },
];

function QuickGuides() {
  return (
    <section style={{ padding: '2rem 0 5rem 0' }}>
      <div className="container">
        <motion.div 
          className="guides-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
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

const developmentCategories = [
  { id: 'duplex', title: 'Duplex Development', desc: 'If your block is zoned at R20 to R60, a duplex home is a highly viable option.', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', buttonText: 'View duplexes' },
  { id: 'triplex', title: 'Triplex Development', desc: 'Triple the potential of your block with a smart triplex development layout.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', buttonText: 'View triplexes' },
  { id: 'strata', title: 'Rear & Front Strata', desc: 'See the exciting opportunities that subdividing your block can provide.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', buttonText: 'Explore strata' },
  { id: 'townhouse', title: 'Townhouse Development', desc: 'Create significant value by building a townhouse development on your block.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', buttonText: 'View townhouses' },
  { id: 'units', title: 'Units & Grouped', desc: 'Optimise large land parcels with our grouped housing and unit solutions.', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800', buttonText: 'View units' },
];

function DevelopmentsAccordion() {
  const [activeCard, setActiveCard] = useState(developmentCategories[0].id);

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
          Property Development Types
        </motion.h2>

        <motion.div 
          className="services-accordion-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="services-accordion-label">
            Development Options
          </div>
          <div className="services-accordion">
            {developmentCategories.map((srv) => {
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
                    <div className="accordion-title-vertical">
                      {srv.title}
                    </div>

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

function AboutSection() {
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Perth’s most experienced property developers</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            With over 60 years of collective experience in subdivision and strata developments, our team holds extensive knowledge, ready to be leveraged by your development project.
          </motion.p>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            Our senior development specialists have assisted clients from first-time investors to experienced developers achieve their property development goals.
          </motion.p>

          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>45k+</h3>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase' }}>Homes Built</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>60+</h3>
              <p style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase' }}>Years Experience</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
        >
          <img 
            src="https://images.unsplash.com/photo-1541888081-309bd49071fe?auto=format&fit=crop&q=80&w=1200" 
            alt="Development Team" 
            style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} 
          />
        </motion.div>
      </div>
    </section>
  );
}

const processSteps = [
  { step: '01', title: 'Obligation Free Consultation', desc: 'Starting with a free consultation, our team will work with you to find the best solution for your block.' },
  { step: '02', title: 'Feasibility & Costings', desc: 'We handle everything from initial feasibility studies to comprehensive and transparent cost breakdowns.' },
  { step: '03', title: 'Design & Engineering', desc: 'Our in-house design team crafts custom layouts that maximise both your space and return on investment.' },
  { step: '04', title: 'Planning Approvals', desc: 'We take the stress out of the process by managing all council planning and building approvals for you.' },
  { step: '05', title: 'Construction', desc: 'Our experienced construction teams build your development with uncompromising quality and efficiency.' },
  { step: '06', title: 'Handover & Beyond', desc: 'Once keys are handed over, you can enjoy a profitable return or proudly move in to your new development.' },
];

function ProcessSection() {
  return (
    <section style={{ backgroundColor: '#f8fafc', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={fadeInUp}
           style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">Our Property Development Process</h2>
          <p style={{ color: 'var(--color-gray-600)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            We handle everything, so you can enjoy a stress-free and profitable development journey.
          </p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {processSteps.map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
              className="hover-lift"
            >
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 800, 
                color: 'var(--color-primary-dark)',
                opacity: 0.1,
                lineHeight: 1
              }}>
                {item.step}
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{item.title}</h4>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  { location: 'Hilbert', type: 'Townhouses', details: '860sqm • 8 Months • Fully Framed', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { location: 'Dianella', type: 'Single-Story Duplex', details: '681sqm • R30 Zoning', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' },
  { location: 'West Perth', type: 'Townhouses', details: '2173sqm • Grouped Dwellings', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { location: 'Bayswater', type: 'Single Storey Strata', details: '4136sqm • R30 Zoning', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { location: 'Nedlands', type: 'Infill Townhouses', details: '1800sqm • R60 Zoning', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
  { location: 'Bicton', type: 'Rear Strata', details: '479sqm • R20 Zoning', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
];

function CaseStudies() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
           style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Development Case Studies</h2>
        </motion.div>

        <motion.div 
          className="client-stories-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {caseStudies.map((col, idx) => (
            <motion.div key={idx} className="story-card hover-lift" variants={fadeInUp} style={{ overflow: 'hidden', borderRadius: '16px', boxShadow: 'var(--shadow-md)', backgroundColor: 'white' }}>
              <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                <img src={col.image} alt={col.type} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={12} /> {col.location}
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>{col.type}</h3>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 500 }}>{col.details}</p>
                <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Read complete case study <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const DevelopmentsPage = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <DevelopmentsHero />
      <QuickGuides />
      <DevelopmentsAccordion />
      <AboutSection />
      <ProcessSection />
      <CaseStudies />
    </div>
  );
};

export default DevelopmentsPage;
