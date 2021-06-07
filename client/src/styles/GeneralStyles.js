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
`;


const generalStyles = {
  SixColumnLayout,
  AlbumView,
  AlbumTitle
};

export default generalStyles;