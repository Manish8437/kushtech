import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { company, formatPhone, telLink } from '@/lib/company';

export function Footer() {
  return (
    <footer className="bg-[#0B1220] text-[#E5E7EB] pt-20 pb-10 mt-auto border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="KUSH Integrated Systems"
                className="h-12 w-12 object-contain shrink-0"
              />
              <span className="flex flex-col">
                <span className="font-heading font-bold text-2xl tracking-tight text-white leading-none">
                  KUSH
                </span>
                <span className="text-[0.6rem] font-bold tracking-widest text-[#9CA3AF] leading-none mt-1">
                  INTEGRATED SYSTEMS
                </span>
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
              {company.description}
            </p>
            <p className="text-primary text-sm font-medium italic mb-6">{company.tagline}</p>
            <div className="flex gap-4">
              <a href={company.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={company.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={company.social.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
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
              <li><Link href="/products" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Our Products</Link></li>
              <li><Link href="/brands" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Brands We Install</Link></li>
              <li><Link href="/testimonials" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="/career" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/faq" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {company.coreServices.map((service) => (
                <li key={service.title}>
                  <Link href="/services" className="text-[#9CA3AF] hover:text-primary transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-[#9CA3AF] text-sm">
                  {company.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  {company.contact.phones.map((phone) => (
                    <a key={phone} href={telLink(phone)} className="text-[#9CA3AF] hover:text-white transition-colors text-sm">
                      {formatPhone(phone)}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-[#25D366] shrink-0" />
                <a href={`https://wa.me/${company.contact.whatsapp}`} target="_blank" rel="noreferrer" className="text-[#9CA3AF] hover:text-white transition-colors text-sm">
                  {formatPhone(company.contact.primaryPhone)}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${company.contact.email}`} className="text-[#9CA3AF] hover:text-white transition-colors text-sm break-all">
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-[#9CA3AF] text-sm">
                  {company.hours.weekdays}<br/>
                  <span className="text-destructive/80 text-xs">{company.hours.emergency}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-sm">
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
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
