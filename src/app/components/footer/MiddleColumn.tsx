import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

interface MiddleColumnProps {
  companyLogo: string;
  altText: string;
}

const MiddleColumn: React.FC<MiddleColumnProps> = ({
  companyLogo,
  altText,
}) => {
  return (
    <div className={styles.middleColumn}>
      <Image
        alt={altText}
        className={styles.image}
        src={companyLogo}
        width={150}
        height={206}
      />
    </div>
  );
};

export default MiddleColumn;
