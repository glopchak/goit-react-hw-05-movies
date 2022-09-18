import styled from '@emotion/styled';

export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin:20px 20px;

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;
  
  color: ${p => p.theme.colors.secondary};
`;
export const Button = styled.button`
  width: 100px;
  height: 35px;
  margin-left: 20px;
  
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;

  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.title};  
`;