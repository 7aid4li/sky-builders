import React, { useState } from 'react';
import { ShieldCheck, Lightbulb, Brush, Users, Trophy, ArrowRight, Calendar, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

function HeroSection() {
  return (
    <section className="container" style={{ padding: '2rem 1.5rem' }}>
      <div className="hero bg-gradient-hero" style={{ borderRadius: '24px' }}>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} style={{ fontSize: '3.5rem', lineHeight: 1.2 }}>Get started on your home owner journey today.</motion.h1>
          <motion.p variants={fadeInUp}>Select an option below to begin exploring WA's best places to live.</motion.p>
          <motion.div className="flex justify-center gap-4" variants={fadeInUp}>
            <Link to="/home-designs" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary-dark)' }}>
              Discover Designs
            </Link>
            <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  { id: 'new-homes', title: 'New Homes', desc: 'The search for your new home starts here. View our extensive range.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000', path: '/home-designs', buttonText: 'Home Designs' },
  { id: 'renovations', title: 'Renovations', desc: 'Two storey additions, extensions, and character home renovations.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000', path: '/renovations', buttonText: 'View renovations' },
  { id: 'granny-flats', title: 'Granny Flats', desc: 'Granny flats, rental units, pool houses, teen hangouts - find them here.', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000', path: '/granny-flats', buttonText: 'Explore flats' },
  { id: 'developments', title: 'Developments', desc: 'Strata, townhouses, duplexes and more. Develop with confidence.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000', path: '/developments', buttonText: 'View developments' },
  { id: 'tiny-homes', title: 'Tiny Homes', desc: 'Where less is more. Innovative and functional tiny home designs.', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000', path: '/tiny-homes', buttonText: 'See tiny homes' },
  { id: 'modular', title: 'Modular Solutions', desc: 'Flexible building solutions that last and adapt to your needs.', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=1000', path: '/modular', buttonText: 'Modular options' },
];

function ServicesSection() {
  const [activeCard, setActiveCard] = useState(services[0].id);

  return (
    <section className="services-section">
      <div className="container">
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
            {services.map((service) => {
              const isActive = activeCard === service.id;
              
              return (
                <div 
                  key={service.id} 
                  className={`accordion-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCard(service.id)}
                >
                  <div 
                    className="accordion-bg"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="accordion-overlay" />
                  
                  <div className="accordion-content">
                    {/* Vertical Title (Inactive) */}
                    <div className="accordion-title-vertical">
                      {service.title}
                    </div>

                    {/* Active Content */}
                    <div className="accordion-content-active">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <Link to={service.path} className="btn-accordion">
                        {service.buttonText}
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

const whyReasons = [
  { title: 'Locally Owned & Operated', desc: 'We take pride in delivering high-quality homes built right here in Western Australia. We don’t outsource any work, ensuring every home meets our highest standards.', icon: ShieldCheck },
  { title: "Over 48 Years' Experience", desc: 'With over 48 years of expertise, we’ve helped more than 47,000 WA families turn their dream homes into reality.', icon: Calendar },
  { title: 'Innovators in Home Building', desc: 'We build versatile, forward-thinking homes designed to meet the needs of modern families, including those looking for multigenerational living solutions.', icon: Lightbulb },
  { title: 'Custom Home Designs', desc: 'Your home should be as unique as you are. Our expert designers work with you to create a home that maximises space, functionality, and style.', icon: Brush },
  { title: 'Experienced Team', desc: 'Guided by our ‘Built Around People’ philosophy, we recognise that our team is our greatest asset, bringing passion and expertise to every build.', icon: Users },
  { title: 'Award Winning', desc: 'We’ve been honoured with numerous industry awards, recognising our commitment to exceptional craftsmanship, innovation, and home-building excellence.', icon: Trophy },
];

function WhyUsSection() {
  return (
    <section className="why-section">
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
           style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', float: 'none', margin: '0 auto 1rem auto' }}>Why Sky Builders?</h2>
          <p style={{ color: 'var(--color-gray-600)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>For more than four decades we have been building WA’s best places to live and we are here to show why.</p>
        </motion.div>
        
        <motion.div 
          className="why-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {whyReasons.map((reason, idx) => (
            <motion.div key={idx} className="why-card hover-lift" variants={fadeInUp}>
              <reason.icon size={36} className="why-icon" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{reason.title}</h3>
              <p style={{ lineHeight: 1.6 }}>{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const discoverDesigns = [
  { name: 'Sento', beds: 4, baths: 2, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Picco', beds: 4, baths: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Cambric', beds: 5, baths: 3, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Boucle', beds: 4, baths: 2, image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80&w=1000' },
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
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', maxWidth: '600px' }}>Browse our innovative range of home designs complete with quality inclusions.</h2>
        </motion.div>

        <motion.div 
          className="designs-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {discoverDesigns.map((home, idx) => (
            <motion.div key={idx} className="design-card" variants={fadeInUp}>
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <img src={home.image} alt={home.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>{home.name}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-gray-500)', fontWeight: 600 }}>
                    <span>{home.beds} Bed</span> • <span>{home.baths} Bath</span>
                  </div>
                </div>
                <Link to="/home-designs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--color-primary-dark)', fontWeight: 700, textDecoration: 'none' }}>
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

const clientStories = [
  { names: 'Jasmine & Owen', location: 'Treeby', quote: 'As first time home-owners and first time builders the most important thing for us was building with someone we could trust and who we knew would support us along the way.', image: 'https://images.unsplash.com/photo-1542036710-53bc7c688b1b?auto=format&fit=crop&q=80&w=800' },
  { names: 'Elaine & Peter', location: 'Booragoon', quote: 'Elaine and Peter invited us into their recently built farmhouse style home... an entertainers delight.', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800' },
  { names: 'Angela & Tim', location: 'Myaree', quote: 'The growing family built a custom home with Sky Builders designed around space and entertaining.', image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
  { names: 'Debbie & Peter', location: 'Karrinyup', quote: 'Debbie and Peter take you through their first time building and the importance of achieving a timeless, classic look.', image: 'https://images.unsplash.com/photo-1600585154526-990dce029141?auto=format&fit=crop&q=80&w=800' },
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
           style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Client stories</h2>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '1.1rem', lineHeight: 1.6 }}>At Sky Builders, we’re built around people. We consider it a privilege to be part of your building journey, and so we want to document our partnership together.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontWeight: 700 }}>
            <Star size={20} fill="#f59e0b" /> 342 reviews
          </div>
        </motion.div>

        <motion.div 
          className="client-stories-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {clientStories.map((col, idx) => (
            <motion.div key={idx} className="story-card hover-lift" variants={fadeInUp}>
              <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                <img src={col.image} alt={col.names} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={12} /> {col.location}
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>{col.names}</h3>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.6, marginBottom: '1.5rem' }}>"{col.quote}"</p>
                <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                  Read full story
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HouseAndLand() {
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
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>House & Land Packages</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.9, marginBottom: '2rem' }}>
            We can help you find the perfect house and land package, designed with all the features and inclusions you’d want in your new home. Having been in the business for more than 48 years, we have great relationships with Western Australia’s largest and boutique land developers.
          </motion.p>
          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-gray-900)' }}>View packages</button>
            <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Customise your own</button>
          </motion.div>
        </motion.div>
      </div>
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', backgroundImage: 'url(https://images.unsplash.com/photo-1541888081-309bd49071fe?auto=format&fit=crop&q=80&w=1200)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8 }} className="hl-banner-img" />
    </section>
  );
}

function SouthWestBanner() {
  return (
    <section className="sw-banner">
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Build a life in the South West</motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            If you are looking to build in WA’s South West, the team at Sky Builders South West are here to guide you on your home building journey.
          </motion.p>
          <motion.button variants={fadeInUp} className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary-dark)' }}>
            Visit South West Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

const articles = [
  { category: 'Developments', title: 'Perth Property Development in 2026: Strategy Now Defines Success', excerpt: 'Perth’s property market in 2026 is no longer driven by momentum alone. It is shaped by structural supply constraints...' },
  { category: 'New Homes', title: 'Sky Builders Named Finalist in Two MBA Display Home Categories', excerpt: 'We are proud to announce that Sky Builders has been named a finalist in two categories at the 2025 Master Builders Awards...' },
  { category: 'Granny Flats', title: 'Why granny flat service connections matter more than you think', excerpt: 'If you’re thinking about a DIY or flat-pack granny flat option, the idea of a quick, affordable backyard build can...' }
];

function JournalSection() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeInUp}
           style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>A home builders journal</h2>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '1.1rem' }}>Check out our helpful tips to guide you through your building journey.</p>
          </div>
          <button className="btn btn-outline">View all</button>
        </motion.div>

        <motion.div 
          className="journal-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {articles.map((art, idx) => (
            <motion.div key={idx} variants={fadeInUp} style={{ borderBottom: '1px solid var(--color-gray-200)', paddingBottom: '2rem' }}>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                {art.category}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>{art.title}</h3>
              <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{art.excerpt}</p>
              <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gray-900)', fontWeight: 700, textDecoration: 'none' }}>
                Read more <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const HomePage = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <DiscoverDesigns />
      <ClientStories />
      <HouseAndLand />
      <SouthWestBanner />
      <JournalSection />
    </div>
  );
};

export default HomePage;
