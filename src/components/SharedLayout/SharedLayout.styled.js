import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
  padding:${p => p.theme.space[4]}px ;
  
  box-shadow: ${p => p.theme.shadows.main};
`;

export const LinkStyled = styled(NavLink)`
  margin-left: 15px;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.red};
  transition: ${p => p.theme.transition.transform},
    ${p => p.theme.transition.boxShadow};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};}
`;