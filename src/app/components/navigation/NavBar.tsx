import React from 'react';
import { navigationLinkType } from '@/app/types/navigation';
import Link from 'next/link';
import NavBarLogo from './NavBarLogo';
import styles from './navbar.module.css';

const NavBar: React.FC = () => {
  const links: navigationLinkType[] = [
    { href: '/menu', label: 'Menu' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About us' },
    { href: '/', label: 'Tüttürüü' },
  ];

  return (
    <nav className={styles.navbar}>
      <NavBarLogo />

      <ul className={styles.navlist}>
        {links.map((link, index) => (
          <li key={index} className={styles.navitem}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className={styles.buttoncontainer}>
        <button className={styles.navbutton}>Test button</button>
      </div>
    </nav>
  );
};

export default NavBar;
