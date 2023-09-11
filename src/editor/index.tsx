import { Paper, ThemeProvider, Typography, createTheme, responsiveFontSizes, styled } from '@mui/material';
import { FC } from 'react';

const Container = styled(Paper)(({ theme }) => ({
  gridArea: 'aside',
  borderRadius: 0,
  padding: theme.spacing(1),
  overflow: 'auto',
}));

export const Editor: FC = () => (
  <ThemeProvider theme={responsiveFontSizes(createTheme({ palette: { mode: 'dark' }, spacing: 4 }))}>
    <Container>
      <Typography>Editor</Typography>
    </Container>
  </ThemeProvider>
)