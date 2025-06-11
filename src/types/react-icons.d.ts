import * as React from 'react';

declare module 'react-icons' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
    className?: string;
  }

  export type IconType = React.FC<IconBaseProps>;
}

declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  
  export const FaGithub: IconType;
  export const FaLinkedinIn: IconType;
  export const FaEnvelope: IconType;
  export const FaPhone: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaPaperPlane: IconType;
  export const FaBars: IconType;
  export const FaTimes: IconType;
  export const FaExternalLinkAlt: IconType;
}
