import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const InputPreEvol = ({ onPreEvolClick, evolButtonColor  }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIosNewIcon sx={{ color: evolButtonColor }} />}
        onClick={onPreEvolClick}
        sx={{
          border: 'none', 
        }}
      >
      </Button>
    </Stack>
  );
}
InputPreEvol.propTypes = {
    onPreEvolClick: PropTypes.func.isRequired,
    evolButtonColor: PropTypes.string.isRequired,
  };
  
  export default InputPreEvol;