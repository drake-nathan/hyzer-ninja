import styled from '@emotion/styled';

type DarkModeColor = { color: string };
type IsMobileType = { isMobile: boolean };

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px gray;
  min-height: 78px;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1<IsMobileType>`
  font-family: 'Roboto Mono', monospace;
  font-size: ${(props) => (props.isMobile ? '1.75rem' : '2.5rem')};
  max-width: ${(props) => (props.isMobile ? '5ch' : '100%')};
  margin: 0.25em 0.5em;
`;

export const NinjaImg = styled.img`
  width: 2.5em;
  height: 2.5em;
  margin: 0 0 0 0.75em;
`;

export const RightSideDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const DarkModeDiv = styled.div<DarkModeColor>`
  cursor: pointer;
  color: ${(props) => props.color};
  margin: 0.475em 0.75em 0 0;
`;

export const HamburgerDiv = styled.div`
  border-left: solid 1px gray;
  padding: 0 0.5em;
`;
