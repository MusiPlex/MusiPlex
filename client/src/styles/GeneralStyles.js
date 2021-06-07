import styled from 'styled-components';

const SixColumnLayout = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const AlbumView = styled.div`
display: flex;
flex-direction: column;
padding-left: 2%;
width: 200px;
`;

const AlbumTitle = styled.h1`
  font-size: 0.8em;
  text-align: center;
  text-overflow: ellipsis;
  color: grey;
  font-weight: 300;
`;

const AlbumThumbnailHolder = styled.div`
  height: 180px;
  width: 180px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 10px 10px 25px #ccc;
  `;

const AlbumThumbnailText = styled.div`
transition: transform 2s, filter 1.5s ease-in-out;
    position: absolute;
    top: 22%;
    bottom: 0;
    left: 22%;
    right: 0;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s, visibility .2s;
  `;

const AlbumThumbnail = styled.div`
  transition: transform 1s, filter 0.75s ease-in-out;
  transform-origin: center center;
  filter: brightness(100%);
  &:hover {
    filter: brightness(40%);
    transform: scale(1.1);
  };
  &:hover ${AlbumThumbnailText} {
    filter: brightness(100%);
    visibility: visible;
    opacity: 1;
  }
`;

const PaddedHeading = styled.div`
  padding-left: 2%;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const generalStyles = {
  SixColumnLayout,
  AlbumView,
  AlbumTitle,
  AlbumThumbnailHolder,
  AlbumThumbnail,
  AlbumThumbnailText,
  PaddedHeading
};

export default generalStyles;