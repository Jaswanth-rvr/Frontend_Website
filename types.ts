
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface ClientLogo {
  name: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Service {
  icon: React.FC<{className?: string}>;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  category: string;
  title:string;
}
