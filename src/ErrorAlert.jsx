import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function BasicAlerts() {
  return (
    <Stack
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2, 
        maxWidth: '300px',
        width: '100%',
      }}
      spacing={2}
    >
      <Alert severity="error">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ marginBottom: '10px' }}>
            <Typography variant="body1">Nombre de Pokemon incorrecto</Typography>
          </Box>
          <img
            src="https://i.postimg.cc/N06CXd9n/pikachu-Error.png"
            alt="PokeImagen"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>
      </Alert>
    </Stack>
  );
}
