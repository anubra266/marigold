import React from 'react';
import { SVG } from '../SVG';

export const Lock = ({ className = '', ...props }) => (
  <SVG className={className} {...props}>
    <path d="M17.1562 8.15625H16.2991V6.44196C16.2991 4.07625 14.3791 2.15625 12.0134 2.15625C9.64768 2.15625 7.72768 4.07625 7.72768 6.44196V8.15625H6.87054C5.92768 8.15625 5.15625 8.92768 5.15625 9.87054V18.442C5.15625 19.3848 5.92768 20.1562 6.87054 20.1562H17.1562C18.0991 20.1562 18.8705 19.3848 18.8705 18.442V9.87054C18.8705 8.92768 18.0991 8.15625 17.1562 8.15625ZM14.6705 8.15629H9.35625V6.44201C9.35625 4.97629 10.5477 3.78486 12.0134 3.78486C13.4791 3.78486 14.6705 4.97629 14.6705 6.44201V8.15629Z" />
  </SVG>
);
