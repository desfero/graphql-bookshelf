import styled from "styled-components";

const InputError = styled.div`
  color: ${props => props.theme.failureColor};
  margin-top: 0.2em;
  font-size: 0.8em;
  text-align: right;
`;

export { InputError };
