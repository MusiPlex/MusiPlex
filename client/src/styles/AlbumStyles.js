import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  height: 100vh;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(500px);
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const generalStyles = {
  Container,
  Background
};

export default generalStyles;