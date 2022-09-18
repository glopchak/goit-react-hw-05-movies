import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  row-gap: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 1280px) {
    column-gap: ${p => p.theme.space[4]}px;
  }
`;

export const ListItem = styled.li`
border-radius: ${p => p.theme.radii.md};
transition: ${p => p.theme.transition.transform},
    ${p => p.theme.transition.boxShadow};
  &:hover,
  &:focus {
    transform: scale(1.03);
    box-shadow: ${p => p.theme.shadows.cardHover};}
`;

export const ImgTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;
  color: ${p => p.theme.colors.title};
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  `