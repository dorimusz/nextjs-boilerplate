import React from 'react';
import { NodeChildrenProps } from '../../types/global';
import { MainContainer } from './Container.styles';

// Container for all sections, added to layout.
const MainSectionContainer: React.FC<NodeChildrenProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainSectionContainer;
