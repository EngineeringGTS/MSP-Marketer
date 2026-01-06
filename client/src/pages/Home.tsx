import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { useServices } from "@/hooks/use-services";
import { ArrowRight, CheckCircle2, Shield, Cloud, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: services, isLoading } = useServices();

  const features = [
    "24/7 Network Monitoring & Support",
    "Enterprise-Grade Security Protocols",
    "99.9% Uptime Guaranteed",
    "Proactive Maintenance Plans",
    "Certified IT Professionals",
    "Scalable Cloud Infrastructure"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash image: modern server room / data center technology */}
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
            alt="Data Center Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <span className="text-sm font-semibold tracking-wide uppercase">Your Technology Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Secure IT Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Modern Business</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We manage your technology so you can manage your business. Enterprise-grade security, cloud solutions, and 24/7 support tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" className="text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-slate-600 text-white hover:bg-white/10 hover:text-white">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 mt-16 lg:mt-0 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-30 blur-2xl rounded-full"></div>
              {/* Unsplash image: dashboard/analytics screen or IT professional working */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                alt="IT Dashboard"
                className="relative rounded-2xl shadow-2xl border border-slate-700/50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Comprehensive IT Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              End-to-end technology solutions designed to help your business scale securely and efficiently.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-96 bg-slate-200 rounded-2xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.slice(0, 3).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 group">
                View All Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Trust TechGuard?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just fix computers; we align technology with your business goals. Our proactive approach prevents downtime before it happens, keeping your team productive and your data secure.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-3 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-slate-900">10+</h4>
                  <p className="text-sm text-slate-500 mt-1">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900">500+</h4>
                  <p className="text-sm text-slate-500 mt-1">Clients Protected</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900">24/7</h4>
                  <p className="text-sm text-slate-500 mt-1">Support Available</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3"></div>
              {/* Unsplash image: team meeting in modern office */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a comprehensive IT audit and discover how we can optimize your infrastructure for growth and security.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-16 px-10 text-xl font-semibold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
              Schedule Free Audit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
