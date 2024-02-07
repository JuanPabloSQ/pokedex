import { useState } from 'react';
import PokemonCard from "./card";
import RadarChart from "./Graph";
import InputSearch from "./InputSearch";
import Box from '@mui/material/Box';

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = async (searchTerm) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Pokemon not found');
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error(error);
      setPokemonData(null); 
    }
  };

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
            <RadarChart 
              stats={[
                pokemonData.stats[0].base_stat,
                pokemonData.stats[1].base_stat,
                pokemonData.stats[2].base_stat,
                pokemonData.stats[3].base_stat,
                pokemonData.stats[4].base_stat,
                pokemonData.stats[5].base_stat
              ]} 
            />
          </Box>
        )}
      </Box>
    </>
  );
}

export default App;