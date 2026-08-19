import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Menu, X, ChevronDown, Phone, ShieldCheck, Wifi, Server, Cpu, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesGroups = [
  {
    title: "Security & Surveillance",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    items: [
      { name: "CCTV Installation", path: "/services" },
      { name: "IP Camera Systems", path: "/services" },
      { name: "PTZ & ANPR Cameras", path: "/services" },
      { name: "Video Door Phone", path: "/services" },
      { name: "Biometric & Access Control", path: "/services" },
      { name: "Fire & Intrusion Alarm", path: "/services" },
    ]
  },
  {
    title: "Networking & IT",
    icon: <Wifi className="w-5 h-5 text-primary" />,
    items: [
      { name: "Networking Solutions", path: "/services" },
      { name: "Enterprise Wi-Fi", path: "/services" },
      { name: "Structured Cabling", path: "/services" },
      { name: "Fiber Optic Installation", path: "/services" },
      { name: "Rack & Server Setup", path: "/services" },
      { name: "NAS Storage", path: "/services" },
    ]
  },
  {
    title: "Support & Automation",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    items: [
      { name: "Data Recovery", path: "/services" },
      { name: "Computer & Laptop Repair", path: "/services" },
      { name: "Printer Setup", path: "/services" },
      { name: "AMC Services", path: "/services" },
      { name: "Smart Home Automation", path: "/services" },
    ]
  }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel border-b py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 relative z-50">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="KUSH Integrated Systems"
              className="h-11 w-11 md:h-12 md:w-12 object-contain shrink-0"
            />
            <span className="flex flex-col">
              <span className="font-heading font-bold text-2xl tracking-tight text-primary leading-none">
                KUSH
              </span>
              <span className="text-[0.6rem] font-bold tracking-widest text-foreground opacity-80 leading-none mt-1">
                INTEGRATED SYSTEMS
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" active={location === '/'}>Home</NavLink>
            <NavLink href="/about" active={location === '/about'}>About</NavLink>
            
            {/* Mega Menu Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-1 ${
                  location.startsWith('/services') ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                Services <ChevronDown className="w-4 h-4 opacity-50" />
              </button>
              
              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] pt-4"
                  >
                    <div className="glass-panel p-6 rounded-2xl border flex gap-8">
                      {servicesGroups.map((group, idx) => (
                        <div key={idx} className="flex-1">
                          <div className="flex items-center gap-2 mb-4">
                            {group.icon}
                            <h4 className="font-heading font-semibold text-sm">{group.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {group.items.map((item, i) => (
                              <li key={i}>
                                <Link 
                                  href={item.path} 
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <NavLink href="/solutions" active={location === '/solutions'}>Solutions</NavLink>
            <NavLink href="/industries" active={location === '/industries'}>Industries</NavLink>
            <NavLink href="/projects" active={location === '/projects'}>Projects</NavLink>
            <NavLink href="/gallery" active={location === '/gallery'}>Gallery</NavLink>
            <NavLink href="/contact" active={location === '/contact'}>Contact</NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 relative z-50">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <Link href="/contact" className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(0,86,214,0.3)]">
              <span>Get Free Quote</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 top-[60px] bg-background z-40 lg:hidden overflow-y-auto pb-20"
          >
            <div className="p-6 flex flex-col gap-4">
              <MobileNavLink href="/" active={location === '/'}>Home</MobileNavLink>
              <MobileNavLink href="/about" active={location === '/about'}>About</MobileNavLink>
              <div className="py-3 border-b">
                <span className="text-lg font-heading font-medium text-foreground mb-3 block">Services</span>
                <div className="pl-4 flex flex-col gap-3 border-l-2 border-primary/20">
                  <MobileNavLink href="/services" active={location === '/services'} isSub>All Services</MobileNavLink>
                  {servicesGroups.flatMap(g => g.items).slice(0, 6).map((item, i) => (
                     <MobileNavLink key={i} href={item.path} isSub>{item.name}</MobileNavLink>
                  ))}
                </div>
              </div>
              <MobileNavLink href="/solutions" active={location === '/solutions'}>Solutions</MobileNavLink>
              <MobileNavLink href="/industries" active={location === '/industries'}>Industries</MobileNavLink>
              <MobileNavLink href="/projects" active={location === '/projects'}>Projects</MobileNavLink>
              <MobileNavLink href="/gallery" active={location === '/gallery'}>Gallery</MobileNavLink>
              <MobileNavLink href="/brands" active={location === '/brands'}>Brands</MobileNavLink>
              <MobileNavLink href="/contact" active={location === '/contact'}>Contact</MobileNavLink>
              
              <div className="mt-8">
                <Link href="/contact" className="w-full flex justify-center items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-base font-medium">
                  <Phone className="w-4 h-4" /> Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children, active }: { href: string, children: React.ReactNode, active: boolean }) {
  return (
    <Link 
      href={href} 
      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
        active 
          ? 'bg-primary/10 text-primary' 
          : 'text-foreground/80 hover:text-primary hover:bg-secondary/50'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, active, isSub }: { href: string, children: React.ReactNode, active?: boolean, isSub?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`block w-full transition-colors ${
        isSub ? 'text-base py-1.5' : 'text-lg py-3 border-b font-heading font-medium'
      } ${
        active ? 'text-primary' : 'text-foreground/80 hover:text-primary'
      }`}
    >
      {children}
    </Link>
  );
}
