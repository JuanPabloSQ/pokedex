import PokemonCard from "./Card";
import PokeStats from "./Graph";
import InputSearch from "./InputSearch";
import Box from '@mui/material/Box';
import FetchPokemon from './Fetch';
import {typeColors} from "./TypeColors"


function App() {
  const { pokemonData, handleSearch } = FetchPokemon();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          width: '100vw',
          paddingTop: '20px',
        }}
      >
        <InputSearch onSearch={handleSearch} />
        {pokemonData && (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '100%', 
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
    </>
  );
}

export default App;