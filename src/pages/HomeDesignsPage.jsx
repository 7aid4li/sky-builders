import React, { useState } from 'react';
import { ArrowRight, HelpCircle, MapPin, Users, Lightbulb, Search, BedDouble, Bath, Car, ChevronDown } from 'lucide-react';
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

function DesignsHero() {
  return (
    <section className="container" style={{ padding: '2rem 1.5rem' }}>
      <div 
        className="hero" 
        style={{ 
          borderRadius: '24px', 
          padding: '8rem 2rem',
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600)',
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
            New Home Designs in Perth
          </motion.h1>
          <motion.p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, color: '#f8fafc', maxWidth: '600px' }} variants={fadeInUp}>
            The search for your new home starts here. Explore our range of award-winning home designs, completely tailored for the Western Australian lifestyle.
          </motion.p>
          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#designs" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary-dark)', border: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              View Catalog
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



const DualRangeSlider = ({ min, max, value, onChange, step = 1 }) => {
  const [isDragging, setIsDragging] = React.useState(null);
  const sliderRef = React.useRef(null);

  const handleMove = React.useCallback((clientX) => {
    if (!isDragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const rawValue = min + percent * (max - min);
    const newValue = Math.round(rawValue / step) * step;
    
    if (isDragging === 'min') {
      onChange([Math.min(newValue, value[1]), value[1]]);
    } else {
      onChange([value[0], Math.max(newValue, value[0])]);
    }
  }, [isDragging, min, max, value, onChange, step]);

  React.useEffect(() => {
    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
    const handleUp = () => setIsDragging(null);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('mouseup', handleUp);
      document.addEventListener('touchend', handleUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('touchend', handleUp);
    };
  }, [isDragging, handleMove]);

  const minPercent = ((value[0] - min) / (max - min)) * 100;
  const maxPercent = ((value[1] - min) / (max - min)) * 100;

  return (
    <div style={{ position: 'relative', height: '24px', display: 'flex', alignItems: 'center', userSelect: 'none' }} ref={sliderRef}>
      <div style={{ position: 'absolute', width: '100%', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px' }}></div>
      <div style={{ position: 'absolute', left: `${minPercent}%`, width: `${maxPercent - minPercent}%`, height: '4px', backgroundColor: 'var(--color-primary)', borderRadius: '2px' }}></div>
      
      <div 
        onMouseDown={(e) => { e.preventDefault(); setIsDragging('min'); }}
        onTouchStart={(e) => { e.preventDefault(); setIsDragging('min'); }}
        style={{ position: 'absolute', left: `${minPercent}%`, transform: 'translate(-50%, 0)', width: '20px', height: '20px', borderRadius: '50%', border: '4px solid var(--color-primary)', backgroundColor: 'white', cursor: 'grab', zIndex: isDragging === 'min' ? 10 : 1 }}
      ></div>
      <div 
        onMouseDown={(e) => { e.preventDefault(); setIsDragging('max'); }}
        onTouchStart={(e) => { e.preventDefault(); setIsDragging('max'); }}
        style={{ position: 'absolute', left: `${maxPercent}%`, transform: 'translate(-50%, 0)', width: '20px', height: '20px', borderRadius: '50%', border: '4px solid var(--color-primary)', backgroundColor: 'white', cursor: 'grab', zIndex: isDragging === 'max' ? 10 : 1 }}
      ></div>
    </div>
  );
};

function HomeDesignsGrid() {
  const [homeDesigns, setHomeDesigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewType, setViewType] = useState('floorplan');
  const [showDisplayHomes, setShowDisplayHomes] = useState(false);
  
  const [priceRange, setPriceRange] = useState([370, 540]);
  const [lotRange, setLotRange] = useState([9, 17]);
  const [bedroomId, setBedroomId] = useState('1+');
  const [designType, setDesignType] = useState('Show: All');
  const [featureOpt, setFeatureOpt] = useState('Show: All');

  React.useEffect(() => {
    fetch('http://localhost:3000/api/designs')
      .then(res => res.json())
      .then(data => {
        setHomeDesigns(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch designs", err);
        setIsLoading(false);
      });
  }, []);

  const filteredDesigns = homeDesigns.filter(home => {
    if (showDisplayHomes && !home.displayHome) return false;
    
    // Convert slider k to full numbers bounds
    if (home.price < priceRange[0] * 1000 || home.price > priceRange[1] * 1000) return false;
    if (home.minLotWidth < lotRange[0] || home.minLotWidth > lotRange[1]) return false;
    
    const minBeds = parseInt(bedroomId);
    if (!isNaN(minBeds) && home.beds < minBeds) return false;
    
    if (designType !== 'Show: All' && home.designType !== designType) return false;
    if (featureOpt !== 'Show: All' && !home.features.includes(featureOpt)) return false;
    if (searchTerm && !home.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    return true;
  });

  return (
    <section id="designs" style={{ padding: '0 0 6rem 0', backgroundColor: '#ffffff', marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Filter Box */}
        <div style={{ backgroundColor: '#f4f4f5', borderRadius: '16px', padding: '2.5rem', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {/* Price Range */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="filter-label" style={{ margin: 0 }}>Price</span>
                <span style={{ fontSize: '0.8rem', color: '#666' }}>${priceRange[0]}k to ${priceRange[1]}k</span>
              </div>
              <DualRangeSlider min={350} max={600} value={priceRange} onChange={setPriceRange} step={5} />
            </div>
            
            {/* Lot Width Range */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="filter-label" style={{ margin: 0 }}>Lot Width</span>
                <span style={{ fontSize: '0.8rem', color: '#666' }}>{lotRange[0]}m to {lotRange[1]}m</span>
              </div>
              <DualRangeSlider min={8} max={20} value={lotRange} onChange={setLotRange} step={0.5} />
            </div>
            
            {/* Bedroom Dropdown */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="filter-label">Bedroom</label>
              <div style={{ position: 'relative' }}>
                <select className="filter-select" value={bedroomId} onChange={e => setBedroomId(e.target.value)}>
                  <option value="1+">1+</option>
                  <option value="2+">2+</option>
                  <option value="3+">3+</option>
                  <option value="4+">4+</option>
                  <option value="5+">5+</option>
                </select>
                <ChevronDown size={16} color="var(--color-primary)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', strokeWidth: 3 }} />
              </div>
            </div>
            
            {/* Design Type Dropdown */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="filter-label">Design Type</label>
              <div style={{ position: 'relative' }}>
                <select className="filter-select" value={designType} onChange={e => setDesignType(e.target.value)}>
                  <option value="Show: All">Show: All</option>
                  <option value="Single Storey">Single Storey</option>
                  <option value="Two Storey">Two Storey</option>
                  <option value="Courtyard">Courtyard</option>
                </select>
                <ChevronDown size={16} color="var(--color-primary)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', strokeWidth: 3 }} />
              </div>
            </div>
            
            {/* Features Dropdown */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="filter-label">Features</label>
              <div style={{ position: 'relative' }}>
                <select className="filter-select" value={featureOpt} onChange={e => setFeatureOpt(e.target.value)}>
                  <option value="Show: All">Show: All</option>
                  <option value="Alfresco">Alfresco</option>
                  <option value="Theatre">Theatre</option>
                </select>
                <ChevronDown size={16} color="var(--color-primary)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', strokeWidth: 3 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>{filteredDesigns.length} homes match your selection</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.85rem', fontWeight: 800 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', userSelect: 'none' }}>
              <input 
                type="checkbox" 
                checked={showDisplayHomes}
                onChange={(e) => setShowDisplayHomes(e.target.checked)}
                style={{ accentColor: 'var(--color-primary)', width: '16px', height: '16px', cursor: 'pointer' }} 
              />
              Show only display homes
            </label>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', userSelect: 'none' }}>
                <input 
                  type="radio" 
                  name="viewType" 
                  value="elevation" 
                  checked={viewType === 'elevation'} 
                  onChange={() => setViewType('elevation')} 
                  style={{ accentColor: 'var(--color-primary)', width: '16px', height: '16px', cursor: 'pointer' }}
                />
                Elevation
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', userSelect: 'none' }}>
                <input 
                  type="radio" 
                  name="viewType" 
                  value="floorplan" 
                  checked={viewType === 'floorplan'} 
                  onChange={() => setViewType('floorplan')} 
                  style={{ accentColor: 'var(--color-primary)', width: '16px', height: '16px', cursor: 'pointer' }}
                />
                Floorplan
              </label>
            </div>
          </div>
        </div>

        {/* Designs Grid */}
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-gray-500)' }}>
            Loading home designs...
          </div>
        ) : (
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {filteredDesigns.map((home, idx) => (
              <motion.div key={idx} className="home-card group" variants={fadeInUp} style={{ backgroundColor: '#fdfdfd', borderRadius: '16px', overflow: 'hidden', border: '1px solid #eef2f6', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: '300px', backgroundColor: 'white', padding: viewType === 'floorplan' ? '1rem' : '0' }}>
                  {home.displayHome && (
                    <div style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 10, backgroundColor: 'var(--color-primary)', color: 'white', padding: '0.4rem 1rem', fontSize: '0.75rem', fontWeight: 800 }}>
                      New display home
                    </div>
                  )}
                  <img src={viewType === 'elevation' ? home.image : home.floorplan} alt={home.name} style={{ width: '100%', height: '100%', objectFit: viewType === 'elevation' ? 'cover' : 'contain' }} />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f8f8f8' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', color: '#666' }}>{home.tags}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800, color: '#111' }}>{home.name}</h3>
                    {home.series && <span style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '0.65rem', letterSpacing: '1.5px' }}>{home.series}</span>}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1.25rem', color: '#111', fontWeight: 800, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><BedDouble size={20} color="var(--color-primary)" strokeWidth={2.5} /> {home.beds}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Bath size={20} color="var(--color-primary)" strokeWidth={2.5} /> {home.baths}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Car size={20} color="var(--color-primary)" strokeWidth={2.5} /> {home.cars}</div>
                  </div>
                  
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Min Lot Width {home.minLotWidth}m</span>
                    <Link to="/" className="view-home-text" style={{ opacity: 0, transform: 'translateX(-10px)', transition: 'all 0.3s ease', color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 800, backgroundColor: 'var(--color-primary)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                      View home
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            {filteredDesigns.length === 0 && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--color-gray-500)' }}>
                No designs found matching your visual selection.
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function FamilyHomeGuide() {
  return (
    <section style={{ padding: '5rem 0', backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Homes Designed for Families</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.9, marginBottom: '2rem' }}>
              Planning on a family in the future? Or maybe you’re already playing host to a growing family, you’ll want this aspect of life to be at the forefront of driving your home design.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.9, marginBottom: '2rem' }}>
              Our award-winning New Home Consultants specialize in working with clients to find a floorplan that includes all of the necessities to function well for a family and for children specifically.
            </p>
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-gray-900)' }}>View Family Guide</button>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '50%' }}>
              <Users size={120} strokeWidth={1} style={{ color: '#bae6fd' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What types of home designs does Sky Builders offer?", a: "We create thoughtfully designed homes to suit a variety of lifestyles, block sizes, and family needs. Our range includes single-storey designs, narrow-lot home designs, multigenerational living layouts, courtyard homes, and modern sweeping country homes." },
  { q: "Can I customise or modify my home design?", a: "Yes, customisation is heavily available. Our 'Built Around You' approach means we can adjust layouts, room sizes or key features to better suit your lifestyle ensuring a smoother and more cost-efficient build." },
  { q: "What's included in the home designs?", a: "Inclusions vary depending on your chosen tiers: Benchmark, Select, and Signature. All designs include double brick or brick veneer construction. Signature inclusions offer premium features like tapware, flooring options, and an Interior Design Consultation." },
  { q: "How much does a new home design cost?", a: "Sky Builders home designs start from approximately $350,000, with pricing varying based on design size, style, inclusions, and site-factors like earthworks. We provide transparent, detailed pricing breakdowns during consultations." },
  { q: "Does Sky Builders offer display homes I can visit?", a: "Yes, we have a range of display homes throughout Perth, located both north and south of the river. Visiting lets you experience layouts firsthand and see premium inclusions like 30 course ceilings." },
  { q: "Can I use a design for a knockdown rebuild project?", a: "Absolutely. Our complete range of home designs is available for knockdown rebuild projects, allowing you to replace your existing home with a modern design that maximises your block’s potential." }
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
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

const HomeDesignsPage = () => {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <DesignsHero />
      <HomeDesignsGrid />
      <FamilyHomeGuide />
      <FAQSection />
    </div>
  );
};

export default HomeDesignsPage;
