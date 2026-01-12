import React from 'react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  fullWidth = false,
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 sm:px-5 py-2 text-xs sm:text-sm',
    md: 'px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white',
    secondary:
      'bg-green-700 hover:bg-green-800 text-white',
    white:
      'bg-white hover:bg-gray-50 text-green-900 border border-gray-200',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={cn(
        'group relative rounded-full font-bold shadow-lg transition-all hover:-translate-y-1 active:scale-95 overflow-hidden flex items-center justify-center gap-2',
        sizeClasses[size],
        variantClasses[variant],
        widthClass,
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
      <span className="relative flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </span>
    </button>
  );
};
