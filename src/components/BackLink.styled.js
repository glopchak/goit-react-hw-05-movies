import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const BackLink = styled(Link)`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accent};
`;
