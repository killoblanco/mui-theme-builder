import { Container as MuiContainer, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const Container = styled(MuiContainer)(({ theme }) => ({
  gridArea: 'content',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  margin: theme.spacing(0, 'auto'),
}));

export const Preview: FC<PropsWithChildren> = ({ children }) => (
  <Container maxWidth="lg">
    {children}
  </Container>
)