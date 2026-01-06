import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Trophy } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary-foreground hover:bg-primary/20 px-4 py-1.5 text-sm">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Securing the Future of Business</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            TechGuard MSP was founded with a simple mission: to make enterprise-grade technology accessible to businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              {/* Unsplash image: team collaborating on whiteboard */}
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We believe that technology should be an asset, not a liability. Our goal is to empower organizations with secure, reliable, and scalable IT infrastructure that drives growth and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Strategic Alignment</h3>
                    <p className="text-slate-600">We align IT strategy with your business objectives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Customer First</h3>
                    <p className="text-slate-600">We treat your business as if it were our own.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Team", desc: "Certified professionals dedicated to your success." },
              { icon: Trophy, title: "Award Winning", desc: "Recognized leader in managed IT services." },
              { icon: Shield, title: "Security First", desc: "We prioritize the safety of your data above all." },
              { icon: Cloud, title: "Cloud Native", desc: "Modern solutions for the distributed workforce." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
                <div className="mx-auto h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center text-primary mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Helper icon component for array map
const Shield = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
)
const Cloud = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" /><path d="M20 15c0-4.418-3.582-8-8-8s-8 3.582-8 8" /><path d="M12 7V4" /><path d="M12 20v-3" /></svg> // Placeholder path
)
