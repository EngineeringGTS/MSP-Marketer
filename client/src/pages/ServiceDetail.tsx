import { useRoute, Link } from "wouter";
import { useService } from "@/hooks/use-services";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: service, isLoading, error } = useService(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-20 space-y-8">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-[400px] w-full rounded-2xl" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h1>
            <Link href="/services">
              <Button>Back to Services</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <div className="relative h-[400px] w-full">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-primary rounded-lg text-white">
                <IconComponent className="h-8 w-8" />
              </div>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-sm font-medium backdrop-blur-sm">
                {service.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
          <div className="prose prose-lg text-slate-600 max-w-none mb-12">
            <p className="lead text-xl text-slate-900 font-medium">{service.description}</p>
            <div className="my-8 h-px bg-slate-100" />
            <p className="whitespace-pre-line">{service.fullDescription}</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "24/7 Monitoring & Alerts",
                "Monthly Performance Reports",
                "Dedicated Account Manager",
                "Priority Support Access",
                "Compliance Auditing",
                "Vendor Management"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Interested in this service?</h3>
            <p className="text-slate-600 mb-8">Speak with our experts to customize a solution for your business.</p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg shadow-lg shadow-primary/20">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
