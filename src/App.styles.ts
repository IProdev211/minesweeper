import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AppContainer = styled(Box)({
  margin: 'auto',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const BoardContainer = styled(Box)({
  maxWidth: 'calc(100vw - 80px)',
  overflow: 'auto',
  position: 'relative',
});

export const Message = styled(Box)(({ status }: { status: number }) => ({
  width: 240,
  position: 'absolute',
  top: 20,
  left: 'calc(50% - 120px)',
  textAlign: 'center',
  color: status === 0 ? '#ff0000' : '#00ff00',
  fontSize: 42,
  fontWeight: 'bold',
}));
