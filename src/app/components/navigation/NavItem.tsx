import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
interface NavItemProps {
  href: string;
  label: string;
  index?: number;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  return (
    <div className={styles.navItem}>
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default NavItem;
