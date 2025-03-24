import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-current transition-colors duration-200"
    >
      {children}
    </a>
  );
}