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

const AlbumTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.25%;
  margin-bottom: 2%;
  font-size: 2.5em;
`;

const SongsListing = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

const SongListing = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2%;
  transition: transform 1s, filter 0.75s ease-in-out;
  transform-origin: center center;
  filter: brightness(40%);
  &:hover {
    filter: brightness(100%);
    transform: scale(1.1);
    cursor: pointer;
  };
`;

const SongIndex = styled.div`
  width: 5%;
`;

const SongInformation = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 20%;
`;


const SongDuration = styled.div`
  width: 5%;
`;


const albumStyles = {
  Container,
  Background,
  AlbumTitle,
  SongsListing,
  SongListing,
  SongIndex,
  SongInformation,
  SongDuration
};

export default albumStyles;