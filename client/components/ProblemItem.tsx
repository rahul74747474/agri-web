import React from 'react';
import { X } from 'lucide-react';

interface ProblemItemProps {
  text: string;
}

export const ProblemItem: React.FC<ProblemItemProps> = ({ text }) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0">
      <X size={16} />
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);
