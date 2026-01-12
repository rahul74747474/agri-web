import React from 'react';

interface BackgroundDecorProps {
  type: 'blob' | 'gradient-blur' | 'wave' | 'grid';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  color?: string;
  opacity?: number;
  animated?: boolean;
  className?: string;
}

export const BackgroundDecor: React.FC<BackgroundDecorProps> = ({
  type,
  position,
  color = 'green',
  opacity = 0.7,
  animated = true,
  className = '',
}) => {
  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const colorClasses = {
    green: 'bg-green-100',
    amber: 'bg-amber-100',
    emerald: 'bg-emerald-100',
    white: 'bg-white',
  };

  const animationClass = animated ? 'animate-float-delayed' : '';

  const baseClasses = `absolute pointer-events-none z-0 ${positionClasses[position]} ${animationClass} ${className}`;

  switch (type) {
    case 'blob':
      return (
        <div
          className={`${baseClasses} w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-${Math.round(opacity * 100)}`}
          style={{
            backgroundColor: `var(--color-${color}-100)`,
            opacity: opacity,
          }}
        />
      );

    case 'gradient-blur':
      return (
        <div
          className={`${baseClasses} w-96 h-96 rounded-full blur-3xl`}
          style={{
            background: `radial-gradient(circle, var(--color-${color}-100), transparent)`,
            opacity: opacity,
          }}
        />
      );

    case 'wave':
      return (
        <svg
          className={`${baseClasses} w-full h-auto`}
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L1440 120L1440 60C1440 60 1120 0 720 0C320 0 0 60 0 60L0 120Z"
            fill="currentColor"
          />
        </svg>
      );

    case 'grid':
      return (
        <div
          className={`${baseClasses} inset-0 opacity-10`}
          style={{
            backgroundImage: 'linear-gradient(#166534 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      );

    default:
      return null;
  }
};
