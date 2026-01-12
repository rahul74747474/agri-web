import React from 'react';

interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  gradient: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  icon,
  title,
  desc,
  gradient,
}) => (
  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 z-10 border border-green-50">
    <div
      className={`absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br ${gradient} text-white flex items-center justify-center font-bold text-xl shadow-md`}
    >
      {number}
    </div>
    <div className="mt-6 mb-4 text-green-800 flex justify-center">
      <div className={`p-4 rounded-full bg-green-50 text-green-700`}>{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed text-sm">{desc}</p>
  </div>
);
