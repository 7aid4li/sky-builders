import React, { useState } from 'react';
import { ArrowRight, Settings, Map, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const homeDesigns = [
  { name: 'Lumo', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000', description: '33 course ceilings through living, custom curved island bench', beds: 4, baths: 2, garage: 2 },
  { name: 'Sento', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000', description: 'Deluxe Master Suite with expansive front elevation and bar recess', beds: 4, baths: 2, garage: 2 },
  { name: 'Picco', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000', description: '15m Frontage design featuring dedicated Games Room and Activity area', beds: 4, baths: 2, garage: 2 }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function NewHomesHero() {
  return (
    <section className="container" style={{ padding: '2rem 1.5rem' }}>
      <div className="hero bg-gradient-hero" style={{ borderRadius: '24px', padding: '6rem 0' }}>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 style={{ fontSize: '3rem' }} variants={fadeInUp}>Building WA's best places to live</motion.h1>
          <motion.p style={{ maxWidth: '600px', margin: '0 auto 2rem' }} variants={fadeInUp}>
            We build affordable custom home designs with the finest inclusions, all without compromising on quality. The complete journey starts here.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const buildOptions = [
  { id: 'designs', title: 'Home Designs', desc: 'Browse our innovative range of single storey and two storey designs.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000', buttonText: 'View Designs', path: '/home-designs' },
  { id: 'display', title: 'Display Homes', desc: 'View our quality construction and design excellence for yourself.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000', buttonText: 'Find Displays', path: '/' },
  { id: 'land', title: 'House and Land', desc: 'Customise the perfect house and land package in top locations.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000', buttonText: 'View Packages', path: '/' },
  { id: 'demolish', title: 'Demolish and Build', desc: 'From old to new without having to move suburbs.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000', buttonText: 'Learn More', path: '/' },
];

function BuildOptionsGrid() {
  const [activeCard, setActiveCard] = useState(buildOptions[0].id);

  return (
    <section className="services-section" style={{ padding: '4rem 0' }}>
      <div className="container">
        <motion.h2 
          className="section-title" 
          style={{ fontSize: '2rem', marginBottom: '2rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          Build Your Dream Home
        </motion.h2>

        <motion.div 
          className="services-accordion-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="services-accordion-label">
            Select an option
          </div>
          <div className="services-accordion">
            {buildOptions.map((opt) => {
              const isActive = activeCard === opt.id;
              
              return (
                <div 
                  key={opt.id} 
                  className={`accordion-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCard(opt.id)}
                >
                  <div 
                    className="accordion-bg"
                    style={{ backgroundImage: `url(${opt.image})` }}
                  />
                  <div className="accordion-overlay" />
                  
                  <div className="accordion-content">
                    {/* Vertical Title (Inactive) */}
                    <div className="accordion-title-vertical">
                      {opt.title}
                    </div>

                    {/* Active Content */}
                    <div className="accordion-content-active">
                      <h3>{opt.title}</h3>
                      <p>{opt.desc}</p>
                      <Link to={opt.path} className="btn-accordion">
                        {opt.buttonText}
                      </Link>
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

function FeaturedDesigns() {
  return (
    <section className="why-section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          Discover Our Designs
        </motion.h2>
        <motion.div 
          className="why-grid" 
          style={{ gap: '2rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {homeDesigns.map((home, idx) => (
            <motion.div key={idx} className="service-card" style={{ padding: 0 }} variants={fadeInUp}>
              <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                <img src={home.image} alt={home.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="service-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0 }}>{home.name}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-gray-500)', fontWeight: '600' }}>
                    <span>{home.beds} Bed</span> • <span>{home.baths} Bath</span>
                  </div>
                </div>
                <p style={{ minHeight: '48px', fontSize: '0.95rem' }}>{home.description}</p>
                <Link to="/home-designs" className="service-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--color-primary-dark)', fontWeight: 700, textDecoration: 'none' }}>
                  View Home Design <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="text-center" 
          style={{ marginTop: '3rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Link to="/home-designs" className="btn btn-primary">View All Designs</Link>
        </motion.div>
      </div>
    </section>
  );
}

const NewHomesPage = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <NewHomesHero />
      <BuildOptionsGrid />
      <FeaturedDesigns />
    </div>
  );
}

export default NewHomesPage;
