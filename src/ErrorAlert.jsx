import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2, 
        maxWidth: '400px',
        width: '100%',
      }}
      spacing={2}
    >
      <Alert severity="error">Nombre de Pokemon incorrecto</Alert>
    </Stack>
  );
}
