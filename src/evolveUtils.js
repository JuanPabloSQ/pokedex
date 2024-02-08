export const handleEeveeEvolution = (pokemonData, handleSearch, setEvolutionData) => {
    if (pokemonData.name === 'eevee') {
      handleSearch('vaporeon');
      setEvolutionData({
        evolutionName: 'vaporeon',
      });
    } else if (pokemonData.name === 'vaporeon') {
      handleSearch('jolteon');
      setEvolutionData({
        evolutionName: 'jolteon',
      });
    } else if (pokemonData.name === 'jolteon') {
      handleSearch('flareon');
      setEvolutionData({
        evolutionName: 'flareon',
      });
    } else if (pokemonData.name === 'flareon') {
      handleSearch('espeon');
      setEvolutionData({
        evolutionName: 'espeon',
      });
    } else if (pokemonData.name === 'espeon') {
      handleSearch('umbreon');
      setEvolutionData({
        evolutionName: 'umbreon',
      });
    } else if (pokemonData.name === 'umbreon') {
      handleSearch('leafeon');
      setEvolutionData({
        evolutionName: 'leafeon',
      });
    } else if (pokemonData.name === 'leafeon') {
      handleSearch('glaceon');
      setEvolutionData({
        evolutionName: 'glaceon',
      });
    } else if (pokemonData.name === 'glaceon') {
      handleSearch('sylveon');
      setEvolutionData({
        evolutionName: 'sylveon',
      });
    }
  };