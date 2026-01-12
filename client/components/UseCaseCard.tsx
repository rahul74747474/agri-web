import React from 'react';
import { MessageCircle } from 'lucide-react';

interface UseCaseCardProps {
  query: string;
  category: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({ query, category }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start gap-4 group">
    <div className="bg-green-100 p-3 rounded-full text-green-700 mt-1">
      <MessageCircle size={20} />
    </div>
    <div>
      <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide bg-amber-50 px-2 py-0.5 rounded-full">
        {category}
      </span>
      <p className="text-gray-800 font-medium text-lg mt-1 group-hover:text-green-800 transition-colors">
        "{query}"
      </p>
    </div>
  </div>
);
