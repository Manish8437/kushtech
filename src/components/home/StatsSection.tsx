import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // Easing out function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function StatsSection() {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Delivered", desc: "Across Uttar Pradesh" },
    { value: 200, suffix: "+", label: "CCTV Systems", desc: "Installed & Maintained" },
    { value: 50, suffix: "+", label: "Enterprise Networks", desc: "Designed & Deployed" },
    { value: 100, suffix: "%", label: "Client Satisfaction", desc: "Our ultimate metric" },
  ];

  return (
    <section className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-baseline gap-1 mb-2">
                  <h3 className="font-heading font-bold text-5xl text-foreground tracking-tight">
                    <Counter from={0} to={stat.value} />
                  </h3>
                  <span className="font-heading font-bold text-3xl text-primary">{stat.suffix}</span>
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-1">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
