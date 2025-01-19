import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

export type LabeledLinkType = {
  href: string;
  label: string;
};

export type IconMap = {
  [key: string]: IconDefinition;
};

export type NodeChildrenProps = {
  children: ReactNode;
};

export type HeadingProps = {
  text: string;
  type: 'h1' | 'h2' | 'h3' | 'h4';
};

export type SectionContainerProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};
