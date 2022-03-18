import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const HeaderContainer = styled(Box)({
  backgroundColor: '#2b2b2b',
  minWidth: 500,
  padding: 8,
  borderRadius: 8,
  margin: '8px 0',
});

export const LevelButton = styled(Button)({
  backgroundColor: 'transparent',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: '#6a7173',
  },
});

export const RefreshButton = styled(Button)({
  color: '#fff',
  borderColor: '#8e8e8e',

  '&:hover': {
    borderColor: '#8e8e8e',
  },
});
