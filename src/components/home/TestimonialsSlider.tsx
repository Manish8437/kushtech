import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "KUSH INTEGRATED SYSTEMS installed our CCTV system across 3 floors in just 2 days. The neatness of their cabling and professionalism is unmatched in Kanpur.",
    author: "Rajesh Kumar",
    company: "Kanpur Textile Mills",
    initials: "RK"
  },
  {
    text: "Their networking team set up our entire office Wi-Fi infrastructure flawlessly. No dead zones, perfect speed. Highly recommended for corporate setups.",
    author: "Priya Sharma",
    company: "TechSoft Solutions",
    initials: "PS"
  },
  {
    text: "We use their AMC services. Quick response time, professional engineers every time. They really understand how critical uptime is for hospitals.",
    author: "Amit Verdi",
    company: "Green Valley Hospital",
    initials: "AV"
  },
  {
    text: "Data recovery from our crashed server was miraculous. Got everything back in 24 hours. They literally saved our business operations.",
    author: "Sunil Gupta",
    company: "Gupta Exports Pvt. Ltd.",
    initials: "SG"
  }
];

export function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Trusted by Local Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Hear what our clients have to say about our service quality.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-4 pl-4 py-4">
            {testimonials.map((item, idx) => (
              <div 
                key={idx} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="glass-panel p-8 rounded-3xl h-full flex flex-col relative group hover:shadow-xl transition-all duration-300 border-t border-l border-white/40 dark:border-white/5">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  
                  <div className="flex gap-1 mb-6 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  
                  <p className="text-foreground/80 mb-8 flex-1 text-lg italic">
                    "{item.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center text-lg">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">{item.author}</h4>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
