import React from 'react';
import { SectionContainerProps } from '../../types/global';
import { Container } from './Container.styles';

// Container for only one section, added to the component itself. Footer & navigation are not included in this container.
// In case of using styled-components, the style could be added directly to the component.
const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  $fullWidth,
}) => {
  return <Container $fullWidth={$fullWidth}>{children}</Container>;
};

export default SectionContainer;
