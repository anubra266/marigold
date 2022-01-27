import React from 'react';
import { SVG } from '@marigold/system';

export const Cancel = ({ className = '', ...props }) => (
  <SVG className={className} {...props}>
    <path d="M17.8869 16.2363L13.6505 12L17.8869 7.76362L16.2364 6.11309L12 10.3494L7.76365 6.11309L6.11313 7.76362L10.3495 12L6.11313 16.2363L7.76365 17.8869L12 13.6505L16.2364 17.8869L17.8869 16.2363ZM3.69234 3.74736C6.00309 1.43661 8.77228 0.28125 12 0.28125C15.2277 0.28125 17.9877 1.42744 20.2801 3.71985C22.5726 6.01226 23.7188 8.77228 23.7188 12C23.7188 15.2277 22.5726 17.9877 20.2801 20.2801C17.9877 22.5726 15.2277 23.7188 12 23.7188C8.77228 23.7188 6.01226 22.5726 3.71985 20.2801C1.42744 17.9877 0.28125 15.2277 0.28125 12C0.28125 8.77228 1.41827 6.02143 3.69234 3.74736Z" />
  </SVG>
);