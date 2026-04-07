import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Building2, Phone, ChevronDown } from 'lucide-react';
import HomePage from './pages/HomePage';
import './App.css';
import NewHomesPage from './pages/NewHomesPage';
import RenovationsPage from './pages/RenovationsPage';
import GrannyFlatsPage from './pages/GrannyFlatsPage';
import DevelopmentsPage from './pages/DevelopmentsPage';
import ModularHomesPage from './pages/ModularHomesPage';
import TinyHomesPage from './pages/TinyHomesPage';
import HomeDesignsPage from './pages/HomeDesignsPage';
import myLogo from './assets/my-logo.jpeg';

function Layout({ children }) {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <img src={myLogo} alt="Sky Builders" style={{ height: '40px' }} />
            <span>SKY BUILDERS</span>
          </Link>
          <nav style={{ height: '100%' }}>
            <ul className="nav-links" style={{ height: '100%', alignItems: 'center' }}>
              <li className="nav-item">
                <Link to="/new-homes" className="nav-item-link">
                  New Homes <ChevronDown size={14} />
                </Link>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-col">
                      <h4>Home Designs</h4>
                      <ul>
                        <li><Link to="/new-homes">Single Storey Designs</Link></li>
                        <li><Link to="/new-homes">Multi-generational designs</Link></li>
                        <li><Link to="/new-homes">Courtyard home designs</Link></li>
                        <li><Link to="/new-homes">Find your floorplan</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h4>Display Homes</h4>
                      <ul>
                        <li><Link to="/new-homes">N.O.R Display Homes</Link></li>
                        <li><Link to="/new-homes">S.O.R Display Homes</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h4>House and Land Packages</h4>
                      <ul>
                        <li><Link to="/new-homes">Customise your own</Link></li>
                        <li><Link to="/new-homes">N.O.R House and Land</Link></li>
                        <li><Link to="/new-homes">S.O.R House and Land</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h4>Guide Library</h4>
                      <ul>
                        <li><Link to="/new-homes">Demolish and Rebuild Guide</Link></li>
                        <li><Link to="/new-homes">Multi-gen designs explained</Link></li>
                        <li><Link to="/new-homes">Homes designed for kids</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/renovations" className="nav-item-link">
                  Renovations <ChevronDown size={14} />
                </Link>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-col">
                      <h4>Services</h4>
                      <ul>
                        <li><Link to="/renovations">Second Storey Additions</Link></li>
                        <li><Link to="/renovations">Ground Floor Extensions</Link></li>
                        <li><Link to="/renovations">Major Renovations</Link></li>
                        <li><Link to="/renovations">Character Homes</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h4>Our Process</h4>
                      <ul>
                        <li><Link to="/renovations">The ABCs of Renovating</Link></li>
                        <li><Link to="/renovations">Council Approvals</Link></li>
                        <li><Link to="/renovations">3D Modelling</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h4>Meet the Team</h4>
                      <ul>
                        <li><Link to="/renovations">Renovations Team</Link></li>
                        <li><Link to="/renovations">Case Studies</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h4>Inspiration</h4>
                      <ul>
                        <li><Link to="/renovations">Wembley Project</Link></li>
                        <li><Link to="/renovations">Inspiration Board</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/granny-flats" className="nav-item-link">
                  Granny Flats <ChevronDown size={14} />
                </Link>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/granny-flats">Granny Flat Designs</Link></li>
                        <li><Link to="/granny-flats">Rental Units</Link></li>
                        <li><Link to="/granny-flats">Case Studies</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/granny-flats">6 Month Build Time</Link></li>
                        <li><Link to="/granny-flats">Guide to Granny Flats</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/granny-flats">Display Home</Link></li>
                        <li><Link to="/granny-flats">Granny Flat Process</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/granny-flats">Pool House Designs</Link></li>
                        <li><Link to="/granny-flats">Granny Flats Team</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/developments" className="nav-item-link">
                  Developments <ChevronDown size={14} />
                </Link>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/developments">Subdivide and Build</Link></li>
                        <li><Link to="/developments">Townhouses</Link></li>
                        <li><Link to="/developments">Case Studies</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/developments">Rear & Front Strata</Link></li>
                        <li><Link to="/developments">Units & Grouped Housing</Link></li>
                        <li><Link to="/developments">DINE by Summit</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/developments">Duplex</Link></li>
                        <li><Link to="/developments">Development Process</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/developments">Triplex</Link></li>
                        <li><Link to="/developments">Developments Team</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/modular" className="nav-item-link">
                  Modular <ChevronDown size={14} />
                </Link>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/modular">About Modular Homes</Link></li>
                        <li><Link to="/modular">Modular Home Finance</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/modular">Modular Home Designs</Link></li>
                        <li><Link to="/modular">Commercial Solutions</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/modular">Construction Process</Link></li>
                        <li><Link to="/modular">Site and Delivery Costs</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/modular">Case Studies</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/tiny-homes" className="nav-item-link">
                  Tiny Homes <ChevronDown size={14} />
                </Link>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/tiny-homes">About Summit Tiny Homes</Link></li>
                        <li><Link to="/tiny-homes">Display Village</Link></li>
                        <li><Link to="/tiny-homes">Site and Delivery Costs</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/tiny-homes">Tiny Home Designs</Link></li>
                        <li><Link to="/tiny-homes">Commercial Solutions</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/tiny-homes">Workers' Accommodation</Link></li>
                        <li><Link to="/tiny-homes">Case Studies</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <ul style={{ marginTop: '2rem' }}>
                        <li><Link to="/tiny-homes">Construction Process</Link></li>
                        <li><Link to="/tiny-homes">Financing</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div>
            <a href="#contact" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Phone size={18} />
              08 9317 0141
            </a>
          </div>
        </div>
      </header>
      
      <main>
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-logo">
                <img src={myLogo} alt="Sky Builders Footer" style={{ height: '32px' }} />
                <span>SKY BUILDERS</span>
              </div>
              <p style={{ color: 'var(--color-gray-500)', marginTop: '1rem', maxWidth: '300px' }}>
                Building WA's best places to live. Trust us to build your dream home.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/new-homes">Home Designs</Link></li>
                <li><Link to="/renovations">Renovations</Link></li>
                <li><Link to="/granny-flats">Granny Flats</Link></li>
                <li><Link to="/developments">Developments</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Careers</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Sky Builders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-homes" element={<NewHomesPage />} />
          <Route path="/renovations" element={<RenovationsPage />} />
          <Route path="/granny-flats" element={<GrannyFlatsPage />} />
          <Route path="/developments" element={<DevelopmentsPage />} />
          <Route path="/modular" element={<ModularHomesPage />} />
          <Route path="/tiny-homes" element={<TinyHomesPage />} />
          <Route path="/home-designs" element={<HomeDesignsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
