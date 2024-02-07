import PokemonCard from "./Card";
import PokeStats from "./Graph";
import InputSearch from "./InputSearch";
import Box from '@mui/material/Box';
import FetchPokemon from './Fetch';
import { typeColors } from "./TypeColors";

function App() {
  const { pokemonData, handleSearch } = FetchPokemon();

  const boxShadowColor = typeColors[pokemonData?.types[0]?.type?.name?.toLowerCase()] || '#68A090';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px', 
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '450px',
        margin: 'auto',
        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.3), 0 0 8px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 10px ${boxShadowColor}`,
        borderRadius: '12px',
        position: 'relative', // Agrega position relative
        zIndex: 1, // Asegura que el input esté en frente
      }}
    >
      <InputSearch onSearch={handleSearch} />
      {pokemonData && (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
        }}>
          <PokemonCard
            pokeName={pokemonData.name}
            pokeType={pokemonData.types[0].type.name}
            image={pokemonData.sprites.other["official-artwork"].front_default}
          />
          <PokeStats
            stats={[
              pokemonData.stats[0].base_stat,
              pokemonData.stats[1].base_stat,
              pokemonData.stats[2].base_stat,
              pokemonData.stats[3].base_stat,
              pokemonData.stats[4].base_stat,
              pokemonData.stats[5].base_stat
            ]}
            pokeTypeColor={typeColors[pokemonData.types[0].type.name.toLowerCase()] || '#68A090'}
          />
        </Box>
      )}
    </Box>
  );
}

export default App;
