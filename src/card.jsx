import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function PokemonCard({ image, pokeName, pokeType }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#242424", }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image} // Usa la prop image aquí
          alt={pokeName} // Usa pokeName como alt text
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            sx={{
              textAlign: 'center', // Centra el texto horizontalmente
              color: 'white',
            }}
          >
            {pokeName}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{
              backgroundColor: 'yellow', // Fondo amarillo
              borderRadius: '10px', // Bordes redondeados
              padding: '2px', // Añade un poco de espacio alrededor del texto
              display: 'inline-block', // Ajusta el fondo solo alrededor del texto
              textAlign: 'center', // Centra el texto horizontalmente
              width: '100%', // Asegura que el contenedor tome todo el ancho para centrar el texto correctamente
            }}
          >
            {pokeType}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// Definición de PropTypes fuera del cuerpo del componente
PokemonCard.propTypes = {
  image: PropTypes.string.isRequired,
  pokeName: PropTypes.string.isRequired,
  pokeType: PropTypes.string.isRequired,
};

export default PokemonCard;