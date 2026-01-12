import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  showDivider?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  showDivider = true,
}) => {
  const containerClass = centered ? 'text-center' : 'text-left';
  const alignClass = centered ? 'mx-auto' : '';

  return (
    <div className={`${containerClass} mb-16`}>
      {badge && (
        <span className="text-green-600 font-bold tracking-wider text-sm uppercase bg-green-100 px-3 py-1 rounded-full inline-block mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mt-4 mb-4">
        {title}
      </h2>
      {showDivider && (
        <div className={`w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full ${alignClass} mb-6`}></div>
      )}
      {subtitle && (
        <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl ${alignClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
