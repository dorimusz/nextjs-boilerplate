import React from 'react';
import { HeroContainer, HeroHeading } from './HeroSection.styles';

const HeroSection: React.FC = () => {
  return (
    <HeroContainer
      $fullWidth={true}
      $background="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17"
    >
      <HeroHeading>Hero Section</HeroHeading>
    </HeroContainer>
  );
};

export default HeroSection;
