
import React from 'react';
import { motion } from "framer-motion";
import { Trophy, Users, BarChart, Building } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { value: '30+', label: 'Years of Experience', icon: <Trophy className="text-luxury-gold h-8 w-8" /> },
    { value: '5000+', label: 'Employees Trained & Mentored', icon: <Users className="text-luxury-gold h-8 w-8" /> },
    { value: '25%+', label: 'Average RevPAR Increase', icon: <BarChart className="text-luxury-gold h-8 w-8" /> },
    { value: '$8.5M+', label: 'Managed in Renovation Budgets', icon: <Building className="text-luxury-gold h-8 w-8" /> }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-luxury-gold flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              {stat.icon}
              <h3 className="text-3xl font-bold text-luxury-navy mt-4">{stat.value}</h3>
              <p className="text-luxury-gray mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
