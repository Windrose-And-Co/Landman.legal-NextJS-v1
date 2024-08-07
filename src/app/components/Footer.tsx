import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-dark-blue py-8 px-4 mt-auto">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <p className="text-center md:text-left mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Landman Legal is a trademark of the Law Office of Nathaniel Landman, LLC. All rights reserved.
      </p>
      <div className="text-center md:text-right">
      <h5 className="text-center md:text-right">The choice of a lawyer is an important decision and should not be based solely upon advertisements.</h5>
      </div>
      <nav className="flex flex-wrap justify-center md:justify-end">
        <Link href="/privacy-policy" className="text-white hover:text-light-blue-light mx-2 my-1">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="text-white hover:text-light-blue-light mx-2 my-1">
          Terms of Service
        </Link>
        <Link href="/contact" className="text-white hover:text-light-blue-light mx-2 my-1">
          Contact Us
        </Link>
      </nav>
    </div>
  </footer>
);

export default Footer;