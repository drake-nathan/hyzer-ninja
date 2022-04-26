import styled from '@emotion/styled';

export const StyledBrandListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBrandListUl = styled.ul`
  padding: 0;
  margin: 0;
`;

export const StyledBrandListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;

  list-style-type: none;
  margin: 0 auto;
  padding: 0.5em;
  border-top: solid 1px gray;
  max-width: 70%;
  cursor: pointer;

  :hover {
    background-color: gray;
  }
`;

export const StyledBrandImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBrandListImg = styled.img`
  height: 2em;
  width: auto;
`;

export const StyledBrandText = styled.h4`
  margin: 0;
  text-align: center;
  font-size: 1.25em;
`;
