import styled from "styled-components";

const Button = styled.button`
  background: #fff;
  border-radius: 0.3rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 1em;
  outline: 0;
  padding: 1em;
  transition: box-shadow 0.1s ease, width 0.1s ease;
  white-space: normal;
  word-wrap: break-word;

  &:hover,
  &:focus {
    border-color: #96c8da;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  }
`;

export { Button };
