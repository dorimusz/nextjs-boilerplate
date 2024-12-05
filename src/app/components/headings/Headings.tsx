import React from 'react';
import { HeadingProps } from '@/app/types/global';
import styles from './headings.module.css';

const Heading: React.FC<HeadingProps> = ({ text, type }) => {
  switch (type) {
    case 'h1':
      return <h1 className={styles.h1}>{text}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{text}</h2>;
    case 'h3':
      return <h3 className={styles.h3}>{text}</h3>;
    case 'h4':
      return <h4 className={styles.h4}>{text}</h4>;
    default:
      return <h2 className={styles.h2}>{text}</h2>; // Default to h1 if no type is provided
  }
};

export default Heading;
