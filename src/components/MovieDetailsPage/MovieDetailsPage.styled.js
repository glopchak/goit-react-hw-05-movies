import styled from '@emotion/styled';

export const TitleMovie = styled.h3`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.title};
`;

export const Title = styled.h3`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.title};
`;