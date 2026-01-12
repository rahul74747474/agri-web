import React from 'react';

interface CreativeCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  gradient: string;
  delay: string;
}

export const CreativeCard: React.FC<CreativeCardProps> = ({
  icon,
  title,
  desc,
  gradient,
  delay,
}) => (
  <div
    className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 animate-fade-in-up delay-${delay}`}
  >
    {/* Hover Gradient Background */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
    ></div>

    <div
      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
    >
      {icon}
    </div>

    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
      {title}
    </h3>
    <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>

    {/* Decorative Circle */}
    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors"></div>
  </div>
);
