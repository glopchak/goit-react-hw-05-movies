import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const DetailsLink = styled(Link)`
  margin-right: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  
  color: ${p => p.theme.colors.title};
  transition: ${p => p.theme.transition.transform},
    ${p => p.theme.transition.boxShadow};
  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: ${p => p.theme.shadows.cardHover};
    color: ${p => p.theme.colors.accent};}
  
`;