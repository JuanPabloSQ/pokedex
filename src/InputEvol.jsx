import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const InputEvol = ({ onEvolClick, evolButtonColor }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<ArrowForwardIosIcon sx={{ color: evolButtonColor }} />}
        onClick={onEvolClick}
        sx={{
          border: 'none',
        }}
      />
    </Stack>
  );
};

InputEvol.propTypes = {
  onEvolClick: PropTypes.func.isRequired,
  evolButtonColor: PropTypes.string.isRequired,
};

export default InputEvol;
