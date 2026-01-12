import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="glass-card p-6 rounded-2xl text-center hover:bg-white/80 transition-colors bg-white/70 backdrop-blur-md border border-white/50">
    <div className="text-green-700 mb-3 flex justify-center">{icon}</div>
    <div className="text-3xl font-bold text-green-900 mb-1">{value}</div>
    <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">{label}</div>
  </div>
);
