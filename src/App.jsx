import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import PokeStats from './Graph';
import InputSearch from './InputSearch';
import Box from '@mui/material/Box';
import BasicAlerts from './ErrorAlert';
import FetchPokemon from './Fetch';
import { typeColors } from './TypeColors';
import Welcome from "./Welcome";
import InputEvol from "./InputEvol";
import InputPreEvol from "./InputPreEvol";
import CircularIndeterminate from "./CircularIndeterminate"
import { EeveeEvolution, 
  EeveePreEvolution, 
  TyrogueEvolution, 
  TyroguePreEvolution } from './evolveUtils';

  

function App() {
  const { pokemonData, error, pokemonSearch } = FetchPokemon();
  const boxShadowColor = typeColors[pokemonData?.types[0]?.type?.name?.toLowerCase()] || '#68A090';
  const evolButtonColor = typeColors[pokemonData?.types[0]?.type?.name?.toLowerCase()] || '#68A090';
  const [firstLoad, setFirstLoad] = useState(true);
  const [evolutionData, setEvolutionData] = useState(null);
  const [preEvolutionData, setPreEvolutionData] = useState(null);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    if (!firstLoad) {
      setEvolutionData(null);
      setPreEvolutionData(null);
    }
  }, [pokemonData, firstLoad]);

  const handleWelcome = (pokeName) => {
    if (firstLoad) setFirstLoad(false);
    setLoading(true); 
    pokemonSearch(pokeName).finally(() => setLoading(false));
  };

  const EvolClick = async () => {
    try {
      if (pokemonData) {
        const pokemonSpeciesUrl = pokemonData.species.url;
        const speciesResponse = await fetch(pokemonSpeciesUrl);
        const speciesData = await speciesResponse.json();
  
        const evolutionChainUrl = speciesData.evolution_chain.url;
        const evolutionChainResponse = await fetch(evolutionChainUrl);
        const evolutionChainData = await evolutionChainResponse.json();
  
        const firstEvolutionName =
          evolutionChainData.chain.evolves_to[0]?.species.name;
        const secondEvolutionName =
          evolutionChainData.chain.evolves_to[0]?.evolves_to[0]?.species.name;
  
        if (pokemonData.name === 'eevee' ||
         pokemonData.name === 'vaporeon' || 
         pokemonData.name === 'jolteon' || 
         pokemonData.name === 'flareon' || 
         pokemonData.name === 'espeon'|| 
         pokemonData.name === 'umbreon' || 
         pokemonData.name === 'leafeon'|| 
         pokemonData.name === 'glaceon'|| 
         pokemonData.name === 'sylveon') {
          EeveeEvolution(pokemonData, pokemonSearch, setEvolutionData);
          return;
        }

        if (pokemonData.name === 'tyrogue' ||
        pokemonData.name === 'hitmonlee' || 
        pokemonData.name === 'hitmonchan' ) {
          TyrogueEvolution(pokemonData, pokemonSearch, setEvolutionData);
         return;
       }
  
        if (firstEvolutionName && secondEvolutionName === pokemonData.name) {
          return;
        }
  
        if (firstEvolutionName) {
          if (firstEvolutionName === pokemonData.name) {
            if (secondEvolutionName) {
              pokemonSearch(secondEvolutionName);
              setEvolutionData({
                evolutionName: secondEvolutionName,
              });
            }
          } else {
            pokemonSearch(firstEvolutionName);
            setEvolutionData({
              evolutionName: firstEvolutionName,
            });
          }
        }
      }
    } catch (error) {
      console.error('Error al obtener información de evolución:', error);
    } finally {
      setLoading(false); 
    }
  };

  const PreEvolClick = async () => {
    try {
      if (pokemonData) {
        const pokemonSpeciesUrl = pokemonData.species.url;
        const speciesResponse = await fetch(pokemonSpeciesUrl);
        const speciesData = await speciesResponse.json();
  
        const evolutionChainUrl = speciesData.evolution_chain.url;
        const evolutionChainResponse = await fetch(evolutionChainUrl);
        const evolutionChainData = await evolutionChainResponse.json();
  
        const firstPreEvolutionName =
          evolutionChainData.chain.species.name;
        const secondPreEvolutionName =
          evolutionChainData.chain.evolves_to[0]?.species.name;
        const secondEvolutionName =
          evolutionChainData.chain.evolves_to[0]?.evolves_to[0]?.species.name;

          if (pokemonData.name === 'jolteon' || 
          pokemonData.name === 'flareon' || 
          pokemonData.name === 'espeon'|| 
          pokemonData.name === 'umbreon' || 
          pokemonData.name === 'leafeon'|| 
          pokemonData.name === 'glaceon'|| 
          pokemonData.name === 'sylveon') {
            EeveePreEvolution(pokemonData, pokemonSearch, setPreEvolutionData);
           return;
         }

         if (pokemonData.name === 'hitmonlee' || 
         pokemonData.name === 'hitmonchan' || 
         pokemonData.name === 'hitmontop') {
          TyroguePreEvolution(pokemonData, pokemonSearch, setPreEvolutionData);
          return;
        }
  
        if (secondPreEvolutionName === pokemonData.name) {
          pokemonSearch(firstPreEvolutionName);
          setPreEvolutionData({
            preEvolutionName: firstPreEvolutionName,
          });
        } else if (secondEvolutionName === pokemonData.name) {
          pokemonSearch(secondPreEvolutionName);
          setPreEvolutionData({
            preEvolutionName: secondPreEvolutionName,
          });
        }
      }
    } catch (error) {
      console.error('Error al obtener información de pre-evolución:', error);
    } finally {
      setLoading(false); 
    }
  };
  
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
        boxShadow: `0 4px 12px rgba(0, 0, 0, 0.3), 
         0 0 8px rgba(255, 255, 255, 0.5),
         inset 0 0 10px rgba(255, 255, 255, 0.2), 
         inset 0 0 20px rgba(255, 255, 255, 0.1),
         0 0 10px ${boxShadowColor}`,
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <InputSearch onSearch={handleWelcome} />
      {loading && <CircularIndeterminate />}
      {firstLoad && <Welcome />}
      {error ? (
        <BasicAlerts />
      ) : (
        pokemonData && (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '20px',
              }}
            >
              {!firstLoad && <InputPreEvol onPreEvolClick={PreEvolClick} evolButtonColor={evolButtonColor} />}
              <PokemonCard
                pokeName={preEvolutionData?.preEvolutionName || evolutionData?.evolutionName || pokemonData.name}
                pokeType={pokemonData.types}
                image={pokemonData.sprites.other['official-artwork'].front_default}
              />
              {!firstLoad && <InputEvol onEvolClick={EvolClick} evolButtonColor={evolButtonColor} />}
            </Box>
            <PokeStats
              stats={[
                pokemonData.stats[0].base_stat,
                pokemonData.stats[1].base_stat,
                pokemonData.stats[2].base_stat,
                pokemonData.stats[3].base_stat,
                pokemonData.stats[4].base_stat,
                pokemonData.stats[5].base_stat,
              ]}
              pokeTypeColor={typeColors[pokemonData.types[0].type.name.toLowerCase()] || '#68A090'}
            />
          </Box>
        )
      )}
    </Box>
  );
}

export default App;
