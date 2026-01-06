import { Link } from "wouter";
import * as LucideIcons from "lucide-react";
import { type Service } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  // Dynamically render icon
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;

  return (
    <Card className="group h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-slate-100 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <IconComponent className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            {service.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        <Link href={`/services/${service.id}`}>
          <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:bg-transparent group/btn">
            Learn More 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
