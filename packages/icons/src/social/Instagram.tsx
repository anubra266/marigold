import React from 'react';
import { SVG } from '../SVG';

export const Instagram = ({ className = '', ...props }) => (
  <SVG className={className} {...props}>
    <path d="M12 4.62225C14.403 4.62225 14.688 4.63125 15.6375 4.67475C18.0765 4.78575 19.2157 5.943 19.3267 8.364C19.3702 9.31275 19.3785 9.59775 19.3785 12.0008C19.3785 14.4045 19.3695 14.6888 19.3267 15.6375C19.215 18.0563 18.0788 19.2157 15.6375 19.3267C14.688 19.3702 14.4045 19.3792 12 19.3792C9.597 19.3792 9.312 19.3702 8.36325 19.3267C5.91825 19.215 4.785 18.0525 4.674 15.6368C4.6305 14.688 4.6215 14.4037 4.6215 12C4.6215 9.597 4.63125 9.31275 4.674 8.36325C4.78575 5.943 5.922 4.785 8.36325 4.674C9.31275 4.63125 9.597 4.62225 12 4.62225ZM12 3C9.55575 3 9.24975 3.0105 8.28975 3.054C5.02125 3.204 3.20475 5.0175 3.05475 8.289C3.0105 9.24975 3 9.55575 3 12C3 14.4443 3.0105 14.751 3.054 15.711C3.204 18.9795 5.0175 20.796 8.289 20.946C9.24975 20.9895 9.55575 21 12 21C14.4443 21 14.751 20.9895 15.711 20.946C18.9765 20.796 20.7975 18.9825 20.9452 15.711C20.9895 14.751 21 14.4443 21 12C21 9.55575 20.9895 9.24975 20.946 8.28975C20.799 5.02425 18.9832 3.20475 15.7118 3.05475C14.751 3.0105 14.4443 3 12 3V3ZM12 7.3785C9.44775 7.3785 7.3785 9.44775 7.3785 12C7.3785 14.5522 9.44775 16.6222 12 16.6222C14.5522 16.6222 16.6215 14.553 16.6215 12C16.6215 9.44775 14.5522 7.3785 12 7.3785ZM12 15C10.3432 15 9 13.6575 9 12C9 10.3432 10.3432 9 12 9C13.6567 9 15 10.3432 15 12C15 13.6575 13.6567 15 12 15ZM16.8045 6.11625C16.2075 6.11625 15.7238 6.6 15.7238 7.19625C15.7238 7.7925 16.2075 8.27625 16.8045 8.27625C17.4008 8.27625 17.8837 7.7925 17.8837 7.19625C17.8837 6.6 17.4008 6.11625 16.8045 6.11625Z" />
  </SVG>
);
