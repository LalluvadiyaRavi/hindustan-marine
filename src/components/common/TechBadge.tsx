import React from 'react';

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'blue' | 'slate' | 'green' | 'dark';
  className?: string;
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  children,
  variant = 'slate',
  className = '',
  size = 'sm',
}) => {
  const variantStyles = {
    amber: 'bg-amber-50 text-amber-900 border-amber-300',
    blue: 'bg-marine-50 text-marine-800 border-marine-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-300',
    green: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    dark: 'bg-marine-900 text-slate-200 border-marine-700',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase font-medium rounded border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
      {children}
    </span>
  );
};
