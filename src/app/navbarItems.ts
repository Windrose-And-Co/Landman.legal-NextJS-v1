
// File: src/app/navbarItems.ts
export interface NavbarItem {
    href: string;
    label: string;
  }
  
  export const navbarItems: NavbarItem[] = [
    { href: '/taxes', label: 'Taxes Made Easy' },
    { href: '/estate-planning', label: 'Estate Planning' },
    { href: '/estates', label: 'Estates' },
    { href: '/business-matters', label: 'Small Business Matters' },
    { href: '/contact', label: 'Get in touch' }
  ];