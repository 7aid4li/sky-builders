import React, { useState } from 'react';
import { ArrowRight, Download, Calendar, ChevronRight } from 'lucide-react';
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

function RenovationsHero() {
  return (
    <section className="container" style={{ padding: '2rem 1.5rem' }}>
      <div 
        className="hero" 
        style={{ 
          borderRadius: '24px', 
          padding: '8rem 2rem',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%), url(https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600)',
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
            Home Renovations in Perth
          </motion.h1>
          <motion.p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px' }} variants={fadeInUp}>
            Experience Sky Builders Renovations, renowned for complete home renovations and extensions, from ground floor enhancements to expansive second storey additions.
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
  { title: 'Design Consultation', desc: 'Start your renovation journey with a complimentary design consultation.', action: 'Book a design consultation', icon: Calendar, highlight: true },
  { title: 'Second Storey Guide', desc: 'Move up with an onsite or modular second storey addition.', action: 'Download guide', icon: Download },
  { title: 'Ground Floor Extension Guide', desc: 'Expand your home to suit your lifestyle.', action: 'Download guide', icon: Download },
  { title: 'Major Renovation Guide', desc: 'Breathe new life into your home with a major renovation.', action: 'Download guide', icon: Download },
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

function IntroSection() {
  return (
    <section className="container" style={{ padding: '4rem 1.5rem 6rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.p 
          style={{ fontSize: '1.5rem', color: 'var(--color-gray-900)', lineHeight: '1.6', marginBottom: '2rem', fontWeight: 500 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          We become attached to few things more than the places we call home – consistent and stable when life is anything but. Yet families grow and times change, and those sturdy walls can start to feel restrictive.
        </motion.p>
        <motion.p 
          style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', lineHeight: '1.8' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          At Sky Builders, we understand that if you’re planning to renovate rather than start fresh, it’s because there’s no home like yours, but change is needed. As WA’s strongest builder, we’ve got construction covered, so our award-winning building and interior designers can focus on preserving your home’s soul, and transforming your space into something that suits your lifestyle.
        </motion.p>
      </div>
    </section>
  );
}

const serviceDetails = [
  { id: 'extensions', title: 'Home Extensions', desc: 'Add space, functionality and value with a ground-floor home extension. Prices start from $200k.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', buttonText: 'Learn More' },
  { id: 'second-storey', title: 'Second Storey Additions', desc: "Need more space but can't build out? Build up with a second storey addition!", image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', buttonText: 'Explore Options' },
  { id: 'major-renos', title: 'Major Renovations', desc: 'For when you need more than a bathroom renovation, laundry renovation, or kitchen renovation.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800', buttonText: 'View Services' },
  { id: 'character', title: 'Character Home Renovations', desc: 'Your dream home deserves a dream renovation.', image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80&w=800', buttonText: 'Find Out How' },
];

function ServicesAccordion() {
  const [activeCard, setActiveCard] = useState(serviceDetails[0].id);

  return (
    <section className="services-section" style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <motion.h2 
          className="section-title" 
          style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'left' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          Our Renovation Services
        </motion.h2>

        <motion.div 
          className="services-accordion-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="services-accordion-label">
            Renovations Guide
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

// 10 Step Process
const processSteps = [
  { step: '01', title: 'Initial Enquiry', desc: 'Arrange an appointment with one of our award-winning specialised Designers.' },
  { step: '02', title: 'In-Home Design Consultation', desc: 'We’ll come to you, walk around your home and discuss your ideas, wish list and budget.' },
  { step: '03', title: 'Site Measure', desc: 'Your Designer will photograph and take accurate measurements of your existing home, site features and boundaries.' },
  { step: '04', title: 'Design Meeting', desc: 'Your Designer will sit down and go over the proposed design plans with you. It’s a collaborative process.' },
  { step: '05', title: 'Contract Documentation', desc: 'You will receive and sign your design contract plans, full addenda of works and Building Contract.' },
  { step: '06', title: 'Colour Selection', desc: 'Meet with your Colour Consultant to finalise colours, fittings and fixtures at our Style Studio.' },
  { step: '07', title: 'Pre-Commencement', desc: 'Your Project Coordinator will meet you onsite to discuss the building process with you and finalise your paperwork.' },
  { step: '08', title: 'Construction', desc: 'We only employ quality tradespeople, so you can trust your renovation will be finished to the highest standard.' },
  { step: '09', title: 'Handover', desc: 'This is the start of your new everyday. Enjoy your new home and lifestyle for years to come.' },
  { step: '10', title: 'Warranty & Maintenance', desc: 'Our warranty and maintenance agreement means we’ll be there if anything needs our attention at the 6-month mark.' },
];

function ProcessSection() {
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Renovation Process
        </motion.h2>
        
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

function MeetExperts() {
  return (
    <section style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', padding: '6rem 0' }}>
      <div className="container">
        <motion.div 
          style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div style={{ flex: '1 1 400px' }} variants={fadeInUp}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Meet Perth’s Home Renovation Experts</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8, opacity: 0.9 }}>
              With a Sky Builders renovation, you’ll not only get the best quality build, but you’ll also get Perth’s most experienced design team. What separates us from the rest is that the team is made up solely of experienced, award-winning designers, not sales people.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.8, opacity: 0.9 }}>
              The team collectively have decades of industry experience and together have transformed thousands of homes to better suit people’s lifestyles.
            </p>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary-dark)' }}>Meet the renovations team</button>
          </motion.div>
          
          <motion.div style={{ flex: '1 1 400px' }} variants={fadeInUp}>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
              alt="Designers" 
              style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-xl)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const caseStudies = [
  { location: 'Wembley', type: 'Second Storey Addition', name: 'Andrew & Chatarina', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { location: 'Cottesloe', type: 'Ground Floor Extension', name: 'Natalie & Justin', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { location: 'Attadale', type: 'Ground Floor Extension', name: 'Lara & David', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
];

function CaseStudies() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <motion.div 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Before and After</h2>
            <p style={{ color: 'var(--color-gray-600)', marginTop: '1rem', fontSize: '1.1rem' }}>See the difference a Sky Builders renovation makes.</p>
          </div>
          <button className="btn btn-outline" style={{ display: 'none' /* hidden on small */ }}>All Case Studies</button>
        </motion.div>

        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {caseStudies.map((cs, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', cursor: 'pointer' }}
              className="hover-lift"
            >
              <div style={{ height: '260px', background: `url(${cs.image}) center/cover` }} />
              <div style={{ padding: '2rem' }}>
                <div style={{ color: 'var(--color-primary-dark)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                  {cs.location}
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 800 }}>{cs.type}</h4>
                <p style={{ color: 'var(--color-gray-600)', margin: 0 }}>{cs.name}</p>
                <div style={{ marginTop: '1.5rem', color: 'var(--color-primary-dark)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Read more <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const RenovationsPage = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <RenovationsHero />
      <QuickGuides />
      <IntroSection />
      <ServicesAccordion />
      <MeetExperts />
      <ProcessSection />
      <CaseStudies />
    </div>
  );
}

export default RenovationsPage;
