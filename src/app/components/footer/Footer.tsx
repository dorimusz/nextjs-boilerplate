import React from 'react';
import styles from './footer.module.css';
import MiddleColumn from './MiddleColumn';
import SocialIcons from './SocialIcons';
import { LabeledLinkType } from '@/app/types/global';

const companyLogo =
  'https://cdn.pixabay.com/photo/2021/02/03/02/48/skull-5976341_1280.png';

const socialLinks: LabeledLinkType[] = [
  { href: 'https://facebook.com', label: 'facebook' },
  { href: 'https://twitter.com', label: 'twitter' },
  { href: 'https://instagram.com', label: 'instagram' },
  { href: 'https://linkedin.com', label: 'linkedin' },
  { href: 'https://github.com', label: 'github' },
];
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columnContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.footerTitle}>This a catchy line to engage!</h2>
          <p className={styles.footerText}>
            Iusto corporis harum odit provident cupiditate, consequatur mollitia
            sequi veritatis perferendis dolore repellendus repellat error
            architecto doloremque aliquid blanditiis culpa quo facere.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.footerButton}>Click Me</button>{' '}
          </div>
        </div>

        <div className={styles.middleColumn}>
          <MiddleColumn
            companyLogo={companyLogo}
            altText={'Comapny name logo'}
          />
        </div>

        <div className={styles.rightColumn}>
          <h2 className={styles.footerTitle}>Social connection</h2>
          <p className={styles.footerText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <SocialIcons socialLinks={socialLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
