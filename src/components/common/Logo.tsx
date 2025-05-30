import React from 'react';
import { Users } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'text-primary-600' }) => {
  return (
    <div className="flex items-center">
      {/* <Users className={`h-8 w-8 ${color}`} /> */}
      <span className={`font-bold text-xl ${color}`}>A Team Edventures</span>
    </div>
  );
};

export default Logo;