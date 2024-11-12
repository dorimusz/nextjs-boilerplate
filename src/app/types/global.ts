import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type LabeledLinkType = {
  href: string;
  label: string;
};

export type IconMap = {
  [key: string]: IconDefinition;
};
