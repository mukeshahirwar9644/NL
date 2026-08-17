import React from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'call' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'whatsapp' | 'phone' | 'none';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  children,
  className,
  asAnchor = false,
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-heading font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-3 gap-2',
    lg: 'text-base px-7 py-4 gap-3 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-terracotta-600 text-white hover:bg-terracotta-700 shadow-sm hover:shadow-md active:translate-y-0.5 border border-terracotta-500',
    secondary: 'bg-earth-900 text-earth-100 hover:bg-earth-950 shadow-sm hover:shadow-md border border-earth-700 active:translate-y-0.5',
    outline: 'bg-transparent text-earth-900 border border-earth-700 hover:bg-earth-900 hover:text-earth-50 active:translate-y-0.5',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm hover:shadow-md active:translate-y-0.5 border border-[#1eb757]',
    call: 'bg-earth-800 text-earth-50 hover:bg-earth-900 shadow-sm hover:shadow-md border border-earth-700',
    dark: 'bg-earth-950 text-sand-100 hover:bg-earth-900 border border-earth-800 hover:border-terracotta-600',
  };

  const renderIcon = () => {
    switch (icon) {
      case 'arrow':
        return <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />;
      case 'whatsapp':
        return <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />;
      case 'phone':
        return <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />;
      default:
        return null;
    }
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (asAnchor && href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel}>
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};
