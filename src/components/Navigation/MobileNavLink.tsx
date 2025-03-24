import { ReactNode } from 'react';

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: ReactNode;
}

export function MobileNavLink({ href, onClick, children }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-current hover:bg-current/5 rounded-md"
    >
      {children}
    </a>
  );
}