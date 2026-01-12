import React from 'react';

interface LanguageBadgeProps {
  code: string;
  label: string;
}

export const LanguageBadge: React.FC<LanguageBadgeProps> = ({ code, label }) => (
  <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-green-200 hover:border-green-400 hover:shadow-md transition-all cursor-default">
    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs border border-amber-200">
      {code}
    </div>
    <span className="font-semibold text-gray-700">{label}</span>
  </div>
);
