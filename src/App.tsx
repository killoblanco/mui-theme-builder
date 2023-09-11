import { Box, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { Editor } from './editor';
import { Preview } from './preview';
import { AppTabs } from './tabs';

const Container = styled(Box)(({ theme }) => ({
  width: '100dvw',
  height: '100dvh',
  display: 'grid',
  gridTemplate: `auto 1fr / 1fr ${theme.spacing(50)}`,
  gridTemplateAreas: `"navbar navbar" "content aside"`,
  gap: theme.spacing(2),
}));

export const App: FC = () => (
  <Container>
    <AppTabs />
    <Preview>
      <Typography variant="h1">Hello, world!</Typography>
    </Preview>
    <Editor />
  </Container>
)