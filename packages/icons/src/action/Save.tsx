import React, { forwardRef } from 'react';

import { SVG, SVGProps } from '@marigold/system';

export const Save = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <SVG {...props} viewBox="0 0 24 24" ref={ref}>
    <path d="M15 9V5.01562H5.01562V9H15ZM9.89062 18.0938C10.4844 18.6875 11.1875 18.9844 12 18.9844C12.8125 18.9844 13.5156 18.6875 14.1094 18.0938C14.7031 17.5 15 16.7969 15 15.9844C15 15.1719 14.7031 14.4688 14.1094 13.875C13.5156 13.2812 12.8125 12.9844 12 12.9844C11.1875 12.9844 10.4844 13.2812 9.89062 13.875C9.29687 14.4688 9 15.1719 9 15.9844C9 16.7969 9.29687 17.5 9.89062 18.0938ZM17.0156 3L21 6.98438V18.9844C21 19.5156 20.7969 19.9844 20.3906 20.3906C19.9844 20.7969 19.5156 21 18.9844 21H5.01562C4.45312 21 3.97656 20.7969 3.58594 20.3906C3.19531 19.9844 3 19.5156 3 18.9844V5.01562C3 4.48437 3.19531 4.01563 3.58594 3.60938C3.97656 3.20312 4.45312 3 5.01562 3H17.0156Z" />
  </SVG>
));
