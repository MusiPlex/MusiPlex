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

const SongsListing = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const albumStyles = {
  Container,
  Background,
  SongsListing
};

export default albumStyles;