import styled from '@emotion/styled';

type DarkModeColor = { color: string };

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px gray;
`;

export const StyledTitle = styled.h1`
  font-size: 2.25rem;
  margin: 0.5em;
`;

export const StyledNinjaImg = styled.img`
  width: 3em;
  height: 3em;
  margin: 1em 0 0 1em;
`;

export const StyledTitleDiv = styled.div`
  display: flex;
`;

export const StyledDarkModeDiv = styled.div<DarkModeColor>`
  cursor: pointer;
  margin: 1em;
  color: ${(props) => props.color};
`;

export const StyledHamburgerDiv = styled.div`
  align-self: flex-end;
  margin: 1em;
  padding-left: 1em;
  border-left: solid 1px gray;
`;
