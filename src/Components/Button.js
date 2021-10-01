import styled from 'styled-components';

export const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-family: 'IBM Plex Mono', monospace;
  :hover {
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
  }
`;

export default Button;
