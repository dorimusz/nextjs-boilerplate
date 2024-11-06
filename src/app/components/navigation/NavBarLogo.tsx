import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';
/*
React.FC: This indicates that NavBarLogo is a functional React component, which provides additional type checks and props like children if needed.

Return type (JSX.Element): Ensures TypeScript expects a JSX element as the output of this function.
*/

const NavBarLogo: React.FC = (): JSX.Element => {
  return (
    <Link href="/" className={styles.navLogo}>
      <Image
        className="companyLogo"
        src="https://cdn.pixabay.com/photo/2023/03/06/13/58/brand-7833518_1280.png"
        alt="CompanyLogo"
        width={100}
        height={50}
        // priority
      />
    </Link>
  );
};

/*
To maintain the aspect ratio of the image, we can calculate the height of the image using the aspect ratio formula.
aspect ratio = width / height (640/1280 = 0.5)
new height = 0.5 * new width
*/

export default NavBarLogo;
