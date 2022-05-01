import styled from '@emotion/styled';

type DarkModeColor = { color: string };

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px gray;
`;

export const StyledTitleDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.75rem;
  max-width: 5ch;
  margin: 0.25em 0.5em;
`;

export const StyledNinjaImg = styled.img`
  width: 2.5em;
  height: 2.5em;
  margin: 0 0 0 0.75em;
`;

export const StyledRightSideDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledDarkModeDiv = styled.div<DarkModeColor>`
  cursor: pointer;
  color: ${(props) => props.color};
  margin: 0.475em 0.75em 0 0;
`;

export const StyledHamburgerDiv = styled.div`
  border-left: solid 1px gray;
  padding: 0 0.5em;
`;
