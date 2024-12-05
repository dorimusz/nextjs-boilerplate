import React from 'react';
import styles from './container.module.css';
import { NodeChildrenProps } from '../../types/global';

// Container for only one section, added to the component itself. Footer & navigation are not included in this container.
const SectionContainer: React.FC<NodeChildrenProps> = ({ children }) => {
  return <div className={styles.sectionContainer}>{children}</div>;
};

export default SectionContainer;
