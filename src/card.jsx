import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    fighting: '#C03028',
    water: '#6890F0',
    flying: '#A890F0',
    grass: '#78C850',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    psychic: '#F85888',
    rock: '#B8A038',
    ice: '#98D8D8',
    bug: '#A8B820',
    dragon: '#7038F8',
    ghost: '#705898',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
};

function PokemonCard({ image, pokeName, pokeType }) {
    const backgroundColor = typeColors[pokeType.toLowerCase()] || '#68A090';

    const upperCasePokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

    return (
        <Card sx={{ maxWidth: 500, backgroundColor: "#242424" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200" 
                    image={image}
                    alt={upperCasePokeName}
                />
                <CardContent>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        sx={{
                            textAlign: 'center', 
                            color: 'white',
                        }}
                    >
                        {upperCasePokeName}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{
                            backgroundColor: backgroundColor, 
                            borderRadius: '10px',
                            padding: '2px',
                            display: 'inline-block',
                            textAlign: 'center',
                            width: '100%',
                            fontWeight: 'bold',  // Negrita
                            textShadow: '0px 0px 5px white',  // Sombreado blanco
                        }}
                    >
                        {pokeType}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

PokemonCard.propTypes = {
    image: PropTypes.string.isRequired,
    pokeName: PropTypes.string.isRequired,
    pokeType: PropTypes.string.isRequired,
};

export default PokemonCard;