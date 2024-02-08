import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stack from '@mui/material/Stack';

export default function InputEvol() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<ArrowForwardIosIcon />}>
      </Button>
    </Stack>
  );
}
