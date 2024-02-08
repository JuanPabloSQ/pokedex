import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Stack from '@mui/material/Stack';

export default function InputPreEvol() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />}>
      </Button>
    </Stack>
  );
}
