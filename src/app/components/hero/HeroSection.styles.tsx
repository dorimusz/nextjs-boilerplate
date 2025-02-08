'use client';
import styled from 'styled-components';
import { SectionContainer } from '../container/Container.styles';
import { MainHeading } from '../headings/Headings.styles';

const HeroContainer = styled(SectionContainer)`
  background-image: url(${(props) => props.$background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const HeroHeading = styled(MainHeading)`
  font-size: 7rem;
  color: #676464;
  font-family: var(--ralewayFont);
  display: flex;
  align-items: center;
`;

export { HeroContainer, HeroHeading };
