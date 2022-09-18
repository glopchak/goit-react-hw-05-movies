import styled from '@emotion/styled';

export const ReviewTitle = styled.h3`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;