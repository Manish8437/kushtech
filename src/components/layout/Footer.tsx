import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, MessageCircle, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1220] text-[#E5E7EB] pt-20 pb-10 mt-auto border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-heading font-bold text-2xl tracking-tight text-white leading-none">
                KUSH
              </span>
              <span className="text-[0.6rem] font-bold tracking-widest text-[#9CA3AF] leading-none mt-1">
                INTEGRATED SYSTEMS
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
              Kanpur's most trusted partner for enterprise-grade security, surveillance, and IT infrastructure. We protect your business so you can focus on growing it.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kis_systems" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/182JDSqGHW/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@kushintegratedsystems" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/projects" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Our Projects</Link></li>
              <li><Link href="/solutions" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Solutions</Link></li>
              <li><Link href="/brands" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Brands We Install</Link></li>
              <li><Link href="/testimonials" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="/career" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/faq" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Top Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">CCTV Installation</Link></li>
              <li><Link href="/services" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Enterprise Networking</Link></li>
              <li><Link href="/services" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Biometric & Access Control</Link></li>
              <li><Link href="/services" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Fire Alarm Systems</Link></li>
              <li><Link href="/services" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Server & Rack Setup</Link></li>
              <li><Link href="/services" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Data Recovery</Link></li>
              <li><Link href="/services" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Smart Home Automation</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-[#9CA3AF] text-sm">
                  84/18 Fazalganj, Near MSME Technology Centre, Kanpur, Uttar Pradesh – 208012
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917275442374" className="text-[#9CA3AF] hover:text-white transition-colors text-sm">+91 7275442374</a>
                  <a href="tel:+918005354413" className="text-[#9CA3AF] hover:text-white transition-colors text-sm">+91 8005354413</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <a href="https://wa.me/917275442374" target="_blank" rel="noreferrer" className="text-[#9CA3AF] hover:text-white transition-colors text-sm">+91 7275442374</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:kushintegratedsystems@gmail.com" className="text-[#9CA3AF] hover:text-white transition-colors text-sm break-all">
                  kushintegratedsystems@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-[#9CA3AF] text-sm">
                  Mon-Sat: 9:00 AM - 7:00 PM<br/>
                  <span className="text-destructive/80 text-xs">24/7 Emergency Support Available</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-sm">
            © {new Date().getFullYear()} KUSH INTEGRATED SYSTEMS. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
