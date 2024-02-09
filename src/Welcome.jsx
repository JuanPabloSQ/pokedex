import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"

const Welcome = () => {
  return (
    <Box sx={{ height: 650 }}>
      <Typography
        variant="body1"
        style={{
          marginTop: '20px',
          textAlign: 'center',
          fontSize: '18px',
          color: '#fff',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
        }}
      >
        Welcome to PokeDex! Embark on your Pokemon journey by searching for a Pokemon.
      </Typography>
      <img
        src="https://i.postimg.cc/0y7NRzy7/pikachu-Welcome.png"
        alt="Pikachu Welcome"
        style={{ display: 'block', margin: 'auto', marginTop: '20px', maxWidth: '100%' }}
      />
      <Typography
        variant="body2"
        style={{
          marginTop: '20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#fff',
          fontStyle: 'italic',
        }}
      >
        Created by Juan Pablo Sepulveda.
      </Typography>
    </Box>
  );
};

export default Welcome;