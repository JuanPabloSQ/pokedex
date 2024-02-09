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
  } else if (pokemonData.name === 'sylveon') {
    handleSearch('vaporeon');
    setEvolutionData({
      evolutionName: 'vaporeon',
    });
  }
};

export const handleEeveePreEvolution = (pokemonData, handleSearch, setPreEvolutionData) => {
  if (pokemonData.name === 'jolteon') {
    handleSearch('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'flareon') {
    handleSearch('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'espeon') {
    handleSearch('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'umbreon') {
    handleSearch('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'leafeon') {
    handleSearch('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'glaceon') {
    handleSearch('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'sylveon') {
    handleSearch('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  }
};

export const handleTyrogueEvolution = (pokemonData, handleSearch, setEvolutionData) => {
  if (pokemonData.name === 'tyrogue') {
    handleSearch('hitmonlee');
    setEvolutionData({
      evolutionName: 'hitmonlee',
    });
  } else if (pokemonData.name === 'hitmonlee') {
    handleSearch('hitmonchan');
    setEvolutionData({
      evolutionName: 'hitmonchan',
    });
  } else if (pokemonData.name === 'hitmonchan') {
    handleSearch('hitmontop');
    setEvolutionData({
      evolutionName: 'hitmontop',
    });
  }
};

export const handleTyroguePreEvolution = (pokemonData, handleSearch, setPreEvolutionData) => {
  if (pokemonData.name === 'hitmonlee') {
    handleSearch('tyrogue');
    setPreEvolutionData({
      evolutionName: 'tyrogue',
    });
  } else if (pokemonData.name === 'hitmonchan') {
    handleSearch('tyrogue');
    setPreEvolutionData({
      evolutionName: 'tyrogue',
    });
  } else if (pokemonData.name === 'hitmontop') {
    handleSearch('tyrogue');
    setPreEvolutionData({
      evolutionName: 'tyrogue',
    });
  }
};