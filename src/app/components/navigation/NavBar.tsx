import React from 'react';
import { LabeledLinkType } from '@/app/types/global';
import NavItem from './NavItem';
import NavLogo from './NavLogo';
import styles from './navbar.module.css';

const NavBar: React.FC = () => {
  const leftLinks: LabeledLinkType[] = [
    { href: '/menu', label: 'Menu' },
    { href: '/contact', label: 'Contact' },
  ];

  const rightLinks: LabeledLinkType[] = [
    { href: '/about', label: 'About us' },
    { href: '/', label: 'Tüttürüü' },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.menuContainer}>
        <div className={styles.leftMenu}>
          {leftLinks.map((left, index) => (
            <NavItem href={left.href} label={left.label} key={index} />
          ))}
        </div>

        <div className={styles.centerMenu}>
          <NavLogo />
        </div>

        <div className={styles.rightMenu}>
          {rightLinks.map((right, index) => (
            <NavItem href={right.href} label={right.label} key={index} />
          ))}
        </div>
        {/* <div className={styles.closingItem}></div> */}
      </div>
    </div>
  );
};

export default NavBar;
