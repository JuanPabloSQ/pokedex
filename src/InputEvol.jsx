import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const InputEvol = ({ onEvolClick }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<ArrowForwardIosIcon />}
        onClick={onEvolClick}
        sx={{
          border: 'none', // Elimina el borde
        }}
      >
      </Button>
    </Stack>
  );
};

InputEvol.propTypes = {
  onEvolClick: PropTypes.func.isRequired,
};

export default InputEvol;