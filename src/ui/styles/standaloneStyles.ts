import styled from 'styled-components';
import { smallScreen } from './media';

const FullScreenPage = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-flow: column;
  overflow: hidden;
  align-content: flex-start;
  align-items: flex-start;
`;

export const SOBase = styled(FullScreenPage)`
  > h1,
  h2,
  > p {
    white-space: pre-wrap;
    font-size: 1.2rem;
  }
  h1,
  h2 {
    font-weight: normal;
    font-size: 2rem;
    flex-basis: 100%;
    margin: 0;
  }
`;

export const SOBR = styled.div`
  height: 0.5rem;
  width: 0.5rem;
`;

export const SOB = styled.div`
  font-size: 1.4em;
  font-weight: bold;
`;

export const SOP = styled.div`
  margin-bottom: 1rem;
`;

export const SOCenter = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: auto;
  margin-right: auto;
  @media ${smallScreen} {
    width: calc(100% - 2rem);
  }
`;

export const SOA = styled.a`
  width: fit-content;
  color: rgb(125, 171, 255);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &[data-inline='true'] {
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
  }
  &[data-inline='false'] {
    display: flex;
    margin: auto;
  }
`;
