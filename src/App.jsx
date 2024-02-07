import PokemonCard from "./card";
import RadarChart from "./Graph";
import InputSearch from "./InputSearch";
import Box from '@mui/material/Box';

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
        <Box
          sx={{
            margin: '20px', // Añade un poco de espacio alrededor de cada componente
          }}
        >
          <PokemonCard />
        </Box>
        <Box
          sx={{
            margin: '20px', // Añade un poco de espacio alrededor de cada componente
          }}
        >
          <RadarChart />
        </Box>
      </Box>
    </>
  );
}

export default App;