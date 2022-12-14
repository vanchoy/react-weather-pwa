import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import '../../styles/buttons.scss';

import checkExternal from '../../js/urlPathCheck';

const sharedButtonStyle = css`
  /* ====== BUTTONS SETTINGS ====== */
    /* ~  (Button Rectangle Style #1)  ~ */
      --btn-rec-s1-margin: ${(props) => props.btnmargin ? props.btnmargin : "0 auto"};
      --btn-rec-s1-padding: ${(props) => props.btnpadding ? props.btnpadding : "22px"};
      --btn-rec-s1-width: ${(props) => props.btnwidth ? props.btnwidth : "220px"};
      --btn-rec-s1-max-width: 100%;
      --btn-rec-s1-height: auto;
      --btn-rec-s1-bg: ${(props) => props.btncolor};
      --btn-rec-s1-text-color: ${(props) => props.btntextcolor};
      --btn-rec-s1-font-family: 'Calibri', sans-serif;
      --btn-rec-s1-font-size: 20px;
      --btn-rec-s1-text-align: center;
      --btn-rec-s1-text-shadow: none;
      font-weight: bold;
      --btn-rec-s1-position: relative; /* Edit only if you know what you are doing*/
      --btn-rec-s1-z-index: 0; /* Edit only if you know what you are doing */
      --btn-rec-s1-display: block; /* Edit only if you know what you are doing*/
      --btn-rec-s1-border: ${(props) => props.btnborder ? props.btnborder : "none"};
      --btn-rec-s1-border-radius: ${(props) => props.btnborderradius ? props.btnborderradius : "16px"};
      --btn-rec-s1-cursor: pointer;
      --btn-rec-s1-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
      --btn-rec-s1-transition: all .6s;
    /* ----------~(end)~---------- */

    /* Button Rectangle Style Hover */
      --btn-rec-s1-hov-bg: ${(props) => props.btnhover};
      --btn-rec-s1-hov-opacity: 1;
      --btn-rec-s1-hov-text-color: ${(props) => props.btntexthovercolor};
      --btn-rec-s1-hov-text-shadow: none;
      --btn-rec-s1-hov-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
    /* ----------~(end)~---------- */
  /* =================|END|================= */
`;

const TypeButton = styled.button`${sharedButtonStyle}`;

const TypeInputLabel = styled.label`${sharedButtonStyle}`;

const TypeRouterLink = styled(Link)`${sharedButtonStyle}`;

const ButtonRegular = (props) => {
  let button;
  
  if (!props.linkRef) {
    //console.log('no link')
    button =         
      <TypeButton 
        className={`btn-rec-s1 ${props.className}`} 
        btnmargin={props.btnMargin}
        btncolor={props.btnColor} 
        btnhover={props.btnHover}
        btntextcolor={props.btnTextColor}
        btntexthovercolor={props.btnTextHoverColor}
        onClick={props.onClick} 
        type={props.type}
        btnborderradius={props.btnBorderRadius}
        btnwidth={props.btnWidth}
        btnpadding={props.btnPadding}
        btnborder={props.btnBorder}
      >
        {props.btnText}
        {props.children}
      </TypeButton>
    ;
  }
  else if (checkExternal(props.linkRef)) {
    //console.log(props.linkRef)
    button = 
      <TypeButton 
        className={`btn-rec-s1 ${props.className}`} 
        btnmargin={props.btnMargin}
        btncolor={props.btnColor} 
        btnhover={props.btnHover}
        btntextcolor={props.btnTextColor}
        btntexthovercolor={props.btnTextHoverColor}
        btnborderradius={props.btnBorderRadius}
        btnwidth={props.btnWidth}
        btnpadding={props.btnPadding}
        btnborder={props.btnBorder}
        onClick={props.onClick}
        as="a"
        href={props.linkRef}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {props.btnText}
        {props.children}
      </TypeButton>
    ;
  }
  else {
    //console.log(props.linkRef)
    button = 
      <TypeRouterLink 
        type={props.type}
        to={props.linkRef} 
        className={`btn-rec-s1 ${props.className}`} 
        btnmargin={props.btnMargin}
        btncolor={props.btnColor} 
        btnhover={props.btnHover}
        btntextcolor={props.btnTextColor}
        btntexthovercolor={props.btnTextHoverColor}
        btnborderradius={props.btnBorderRadius}
        btnwidth={props.btnWidth}
        btnpadding={props.btnPadding}
        btnborder={props.btnBorder}
      >
        {props.btnText}
        {props.children}
      </TypeRouterLink>
    ;
  }

  return button;
};

const ButtonFileUpload = (props) => {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        onClick={props.onClick} 
        onChange={props.onChange} 
        hidden
      />
      <span className="fileNameText">{props.fileName.name}</span>
      <TypeInputLabel 
        className={`btn-rec-s1 ${props.className}`} 
        btnmargin={props.btnMargin}
        htmlFor={props.id}
        btncolor={props.btnColor} 
        btnhover={props.btnHover}
        btntextcolor={props.btnTextColor}
        btntexthovercolor={props.btnTextHoverColor}
        type={props.type}
        btnborderradius={props.btnBorderRadius}
        btnwidth={props.btnWidth}
        btnpadding={props.btnPadding}
        btnborder={props.btnBorder}
      >
        {props.btnText}
        {props.children}
      </TypeInputLabel>
    </>
  );
};

export { ButtonRegular, ButtonFileUpload };