import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { CookieBanner } from '@/components/layout/CookieBanner';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Solutions from '@/pages/Solutions';
import Industries from '@/pages/Industries';
import Projects from '@/pages/Projects';
import Gallery from '@/pages/Gallery';
import Brands from '@/pages/Brands';
import Products from '@/pages/Products';
import Testimonials from '@/pages/Testimonials';
import FAQ from '@/pages/FAQ';
import Blog from '@/pages/Blog';
import Career from '@/pages/Career';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function AppShell({ children }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <LoadingScreen />
      <Header />
      <main className="flex-1 flex flex-col pt-[80px]">{children}</main>
      <Footer />
      <FloatingButtons />
      <CookieBanner />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/industries" component={Industries} />
      <Route path="/projects" component={Projects} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/products" component={Products} />
      <Route path="/brands" component={Brands} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/faq" component={FAQ} />
      <Route path="/blog" component={Blog} />
      <Route path="/career" component={Career} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="kush-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
              <ScrollToTop />
              <AppShell>
                <Router />
              </AppShell>
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
