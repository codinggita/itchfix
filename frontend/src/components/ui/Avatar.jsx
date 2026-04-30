import React from 'react';

/**
 * Avatar - A circular profile image or initials component.
 * 
 * @param {string} src - Image source URL
 * @param {string} name - User name (for initials)
 * @param {string} size - 'sm' (24px), 'md' (36px), 'lg' (48px), 'xl' (64px)
 * @param {boolean} isVerified - Shows a teal border if verified
 * @param {string} status - 'online', 'offline', 'none'
 */
const Avatar = ({ 
  src, 
  name = "User", 
  size = 'md', 
  isVerified = false,
  status = 'none'
}) => {
  const sizes = {
    sm: 'w-6 h-6 text-[10px]',
    md: 'w-9 h-9 text-[12px]',
    lg: 'w-12 h-12 text-[14px]',
    xl: 'w-16 h-16 text-[18px]'
  };

  const statusColors = {
    online: 'bg-trust-teal',
    offline: 'bg-text-ghost',
    none: 'transparent'
  };

  const getInitials = (n) => {
    return n.split(' ').map(part => part[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <div className="relative inline-block">
      <div className={`
        rounded-full flex items-center justify-center overflow-hidden border-2 transition-all duration-200
        ${sizes[size]}
        ${isVerified ? 'border-trust-teal' : 'border-border-main'}
        ${!src ? 'bg-trust-purple/20 text-trust-purple font-bold' : 'bg-input-bg'}
      `}>
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
      
      {status !== 'none' && (
        <div className={`
          absolute bottom-0 right-0 rounded-full border-2 border-page-bg
          ${size === 'sm' ? 'w-2 h-2' : 'w-3 h-3'}
          ${statusColors[status]}
        `}></div>
      )}
    </div>
  );
};

export default Avatar;
