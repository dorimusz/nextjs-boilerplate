import React from 'react';
import styles from './container.module.css';
import { NodeChildrenProps } from '../../types/global';

// Container for all sections, added to layout.
const AllSectionsContainer: React.FC<NodeChildrenProps> = ({ children }) => {
  return <main className={styles.allSectionsContainer}>{children}</main>;
};

export default AllSectionsContainer;
