import PokemonCard from "./card";
import RadarChart from "./Graph";
import InputSearch from "./InputSearch";
import Box from '@mui/material/Box';
import test from "./content"; // Asegúrate de que la estructura de 'test' coincida con lo esperado

function App() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Alinea los elementos en una columna
          justifyContent: 'center', // Centra los elementos verticalmente en el contenedor
          alignItems: 'center', // Centra los elementos horizontalmente
          minHeight: '100vh', // Asegura que el Box ocupe al menos el alto de la ventana
          width: '100vw', // Asegura que el Box ocupe el ancho completo de la ventana
          marginTop: '20px',
        }}
      >
        <InputSearch />
        {test.map((pokemon, index) => (
          <Box
            key={index} // Considera usar un identificador único si está disponible
            sx={{
              margin: '20px',
            }}
          >
            <PokemonCard
              pokeName={pokemon.name}
              pokeType={pokemon.types[0].type.name} // Corrección aquí
              image={pokemon.sprites.other["official-artwork"].front_default}
            />
          </Box>
        ))}
        <Box
          sx={{
            margin: '20px',
          }}
        >
          <RadarChart />
        </Box>
      </Box>
    </>
  );
}

export default App;