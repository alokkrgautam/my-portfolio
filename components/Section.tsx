import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 transition-colors duration-300 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-12 relative inline-block transition-colors duration-300">
          {title}
          <span className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-accent rounded-full"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};