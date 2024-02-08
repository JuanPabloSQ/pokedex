import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const InputPreEvol = ({ onPreEvolClick }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIosNewIcon />}
        sx={{
          border: 'none', // Elimina el borde
        }}
      >
      </Button>
    </Stack>
  );
}
InputPreEvol.propTypes = {
    onPreEvolClick: PropTypes.func.isRequired,
  };
  
  export default InputPreEvol;