import Typography from '@mui/material/Typography';

const Welcome = () => {
  return (
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
  );
};

export default Welcome;
