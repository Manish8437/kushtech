import React, { useState } from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Top 5 CCTV Camera Positions for Maximum Coverage",
    cat: "Security",
    date: "Oct 15, 2025",
    excerpt: "Placing a camera in the wrong spot renders it useless. Learn the critical zones every business must monitor to ensure a secure perimeter.",
    content: "When installing a CCTV system, the most expensive camera won't help if it's pointing at a blind spot. \n\n1. Entry and Exit Points: Capture every person entering or leaving.\n2. Point of Sale (POS): Essential for retail to monitor transactions and prevent shrinkage.\n3. Server Rooms: Restrict access visually to your most sensitive data.\n4. Loading Docks: Monitor inventory coming in and out.\n5. Blind Corridors: Eliminate hiding spots in long hallways.\n\nAlways ensure the camera lens is protected from direct glare from the sun or bright artificial lights."
  },
  {
    id: 2,
    title: "Why Your Business Needs Enterprise Wi-Fi (Not a Home Router)",
    cat: "Networking",
    date: "Oct 02, 2025",
    excerpt: "Using a consumer router for an office of 30 people? Here is why your internet keeps dropping and how an access point system fixes it.",
    content: "Consumer routers are designed for 5-10 devices. When you put 30 employees, each with a laptop and a phone, on a consumer router, the processor bottlenecks and drops connections.\n\nEnterprise Wi-Fi uses Access Points (APs) managed by a central controller. This provides:\n- High Client Density: Support for 100+ devices per AP.\n- Seamless Roaming: Walk across the office without your video call dropping.\n- VLANs: Separate guest traffic from the secure internal employee network.\n- Security: Advanced WPA3 enterprise encryption."
  },
  {
    id: 3,
    title: "How to Choose the Right Biometric System for Your Office",
    cat: "Access Control",
    date: "Sep 28, 2025",
    excerpt: "Fingerprint, facial recognition, or RFID cards? A guide to selecting the appropriate access control technology for your workforce.",
    content: "Biometrics have evolved. \n\nFingerprint: The standard. Cost-effective, reliable, but not ideal for manufacturing environments where workers' hands get dirty or oily.\n\nFacial Recognition: The modern choice. Completely contactless (great post-pandemic) and incredibly fast. It works well even in low light with infrared sensors.\n\nRFID/Smart Cards: Good for guests or temporary access, but they can be lost or shared ('buddy punching').\n\nFor most modern offices, we recommend a hybrid device supporting both Facial Recognition and RFID."
  },
  {
    id: 4,
    title: "CCTV vs IP Camera: Which is Right for Your Business?",
    cat: "Comparison",
    date: "Sep 14, 2025",
    excerpt: "Demystifying the technical jargon to help you decide between traditional analog HD setups and modern networked IP surveillance.",
    content: "Analog HD: Uses coaxial cables. It's cheaper upfront, reliable, and great for upgrading old systems where coax is already run in the walls. However, resolution maxes out earlier and features are basic.\n\nIP Cameras: Uses standard CAT6 network cables. They are essentially mini-computers. They offer higher resolutions (4K+), advanced analytics (like line-crossing or face detection), and use PoE (Power over Ethernet) so one cable provides both data and power.\n\nVerdict: For new installations, always go IP. The slight increase in hardware cost is offset by easier cabling and future-proofing."
  },
  {
    id: 5,
    title: "The Importance of Structured Cabling in Modern Offices",
    cat: "IT Support",
    date: "Sep 05, 2025",
    excerpt: "A look inside the server rack. Why professional cable management prevents downtime and saves money in the long run.",
    content: "A rat's nest of cables in your server room is a ticking time bomb. \n\nStructured cabling means organizing, labeling, and securing every network and power cable. \n\nWhy it matters:\n1. Faster Troubleshooting: If a port dies, the IT team knows exactly which cable to trace.\n2. Airflow: Tangled cables trap heat, causing expensive server equipment to overheat and fail.\n3. Scalability: Adding a new switch or patch panel is impossible if the rack is a mess.\n4. Aesthetics: A neat rack reflects the professionalism of the business."
  },
  {
    id: 6,
    title: "Data Recovery 101: What to Do When Your Drive Fails",
    cat: "IT Support",
    date: "Aug 22, 2025",
    excerpt: "Clicking noises? Blue screen? Stop what you are doing. The immediate steps you must take to prevent permanent data loss.",
    content: "When a hard drive starts failing, every second it spins reduces the chance of data recovery. \n\n1. TURN IT OFF: Immediately cut the power. Do not restart. Do not run 'chkdsk' or diagnostic tools.\n2. DO NOT OPEN IT: Hard drives must be opened in a cleanroom. Opening it in a dusty office will destroy the platters instantly.\n3. Note the symptoms: Was it clicking? Beeping? Did it smell like burnt plastic?\n\nBring the drive to professional recovery experts. Software tools can recover deleted files, but physical damage requires specialized hardware extraction."
  }
];

const categories = ["All", "Security", "Networking", "Access Control", "Comparison", "IT Support"];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activePost, setActivePost] = useState<typeof posts[0] | null>(null);

  const filtered = activeFilter === "All" ? posts : posts.filter(p => p.cat === activeFilter);

  return (
    <>
      <SEO title="Blog & Insights" description="Security and technology insights from KUSH INTEGRATED SYSTEMS." />
      
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            Security & Tech Insights
          </motion.h1>
          
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((post, idx) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="glass-panel p-8 rounded-3xl border flex flex-col hover:border-primary/30 transition-colors group cursor-pointer"
                  onClick={() => setActivePost(post)}
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                      {post.cat}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">{post.date}</span>
                  </div>
                  
                  <h2 className="font-heading font-bold text-xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-border mt-auto flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Post Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full max-w-3xl rounded-[2rem] shadow-2xl border overflow-hidden my-8 relative"
            >
              <button 
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center text-foreground transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-8 md:p-12">
                <div className="flex gap-3 items-center mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                    {activePost.cat}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">{activePost.date}</span>
                </div>
                
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                  {activePost.title}
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {activePost.content.split('\n').map((paragraph, i) => (
                    paragraph ? <p key={i} className="mb-4 text-muted-foreground leading-relaxed">{paragraph}</p> : <br key={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
