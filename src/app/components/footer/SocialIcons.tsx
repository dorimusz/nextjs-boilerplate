import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';
import { LabeledLinkType, IconMap } from '@/app/types/global';

const iconMap: IconMap = {
  facebook: faFacebook,
  twitter: faTwitter,
  instagram: faInstagram,
  linkedin: faLinkedin,
  github: faGithub,
};

const SocialIcons: React.FC<{ socialLinks: LabeledLinkType[] }> = ({
  socialLinks,
}) => {
  return (
    <>
      <div className={styles.socialIcons}>
        {socialLinks.map((icon, index) => (
          <div key={index} className={styles.socialIcon}>
            <Link target="_blank" rel="noopener noreferrer" href={icon.href}>
              <FontAwesomeIcon
                icon={iconMap[icon.label.toLowerCase()]}
                size="2x"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
