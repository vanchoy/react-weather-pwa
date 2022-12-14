import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p><FontAwesomeIcon className="footer-container_icon" icon={solid('copyright')} size="1x" /> React PWA Weather Tool 2022 / <FontAwesomeIcon className="footer-container_icon" icon={brands('github')} size="1x" /> <a href="https://github.com/vanchoy/react-weather-pwa" target="_blank" rel="noopener noreferrer">OpenSource</a></p>
    </footer>
  );
}

export default Footer;
