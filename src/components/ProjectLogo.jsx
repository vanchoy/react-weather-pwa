import styled from 'styled-components';

import defaultPhoto from '../assets/images/logo.png';

const ProjectLogoContainer = styled.div`
  width: 100%;
`;

const ProjectLogoImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 23px 60px 0 0;
  object-fit: cover;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.03);
`;

const ProjectLogo = (props) => {

  return (
    <ProjectLogoContainer className={props.className}>
      <ProjectLogoImg src={props.imgSrc || defaultPhoto} alt={props.title} />
      {props.children}
    </ProjectLogoContainer>
  );
}

export default ProjectLogo;