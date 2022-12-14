import styled from 'styled-components';
import '../styles/so-me.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const SoMeLinksStyle = styled.li`
    --so-me-li-margin: 0 20px;
    --so-me-li-text-color: ${(props) => props.color};
    --so-me-li-text-color_hover: ${(props) => props.colorHover};
`;

const SoMe = () => {
    return (
      <ul className="soMeLinks center">
        <SoMeLinksStyle color="#ffffff" colorHover="#ffa500">
          <a target="_blank" aria-label="Facebook page" rel="noopener noreferrer" href="https://facebook.com">
            <FontAwesomeIcon icon={brands('facebook')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#ffa500">
          <a target="_blank" aria-label="Twitter page" rel="noopener noreferrer" href="https://www.twitter.com/in/ivan-st/">
            <FontAwesomeIcon icon={brands('Twitter')} size="3x" />
          </a>
        </SoMeLinksStyle>
        <SoMeLinksStyle color="#ffffff" colorHover="#ffa500">
          <a target="_blank" aria-label="Email Address" rel="noopener noreferrer" href="mailto:example.email@gmail.com">
            <FontAwesomeIcon icon={solid('envelope-open-text')} size="3x" />
          </a>
        </SoMeLinksStyle>
      </ul>
    );
};

export default SoMe;