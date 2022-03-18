import { TStatus } from './interface';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Cell = styled(Box)(({ status }: { status: TStatus }) => ({
  width: 30,
  height: 30,
  border: `${
    status === 'success' ? '1px solid #C0C0C0 !important' : '1px solid'
  }`,
  borderTopColor: '#ffffff',
  borderRightColor: '#7B7B7B',
  borderBottomColor: '#7B7B7B',
  borderLeftColor: '#ffffff',
  borderRadius: 4,
  margin: 0.5,
  backgroundColor:
    status === 'failed'
      ? '#ff0000'
      : status === 'success'
      ? '#ffffff'
      : '#C0C0C0',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: '#ffffff',
  },
}));
