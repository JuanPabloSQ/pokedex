export const EeveeEvolution = (pokemonData, Search, setEvolutionData) => {
  if (pokemonData.name === 'eevee') {
    Search('vaporeon');
    setEvolutionData({
      evolutionName: 'vaporeon',
    });
  } else if (pokemonData.name === 'vaporeon') {
    Search('jolteon');
    setEvolutionData({
      evolutionName: 'jolteon',
    });
  } else if (pokemonData.name === 'jolteon') {
    Search('flareon');
    setEvolutionData({
      evolutionName: 'flareon',
    });
  } else if (pokemonData.name === 'flareon') {
    Search('espeon');
    setEvolutionData({
      evolutionName: 'espeon',
    });
  } else if (pokemonData.name === 'espeon') {
    Search('umbreon');
    setEvolutionData({
      evolutionName: 'umbreon',
    });
  } else if (pokemonData.name === 'umbreon') {
    Search('leafeon');
    setEvolutionData({
      evolutionName: 'leafeon',
    });
  } else if (pokemonData.name === 'leafeon') {
    Search('glaceon');
    setEvolutionData({
      evolutionName: 'glaceon',
    });
  } else if (pokemonData.name === 'glaceon') {
    Search('sylveon');
    setEvolutionData({
      evolutionName: 'sylveon',
    });
  } else if (pokemonData.name === 'sylveon') {
    Search('vaporeon');
    setEvolutionData({
      evolutionName: 'vaporeon',
    });
  }
};

export const EeveePreEvolution = (pokemonData, Search, setPreEvolutionData) => {
  if (pokemonData.name === 'jolteon') {
    Search('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'flareon') {
    Search('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'espeon') {
    Search('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'umbreon') {
    Search('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'leafeon') {
    Search('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'glaceon') {
    Search('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  } else if (pokemonData.name === 'sylveon') {
    Search('eevee');
    setPreEvolutionData({
      evolutionName: 'eevee',
    });
  }
};

export const TyrogueEvolution = (pokemonData, Search, setEvolutionData) => {
  if (pokemonData.name === 'tyrogue') {
    Search('hitmonlee');
    setEvolutionData({
      evolutionName: 'hitmonlee',
    });
  } else if (pokemonData.name === 'hitmonlee') {
    Search('hitmonchan');
    setEvolutionData({
      evolutionName: 'hitmonchan',
    });
  } else if (pokemonData.name === 'hitmonchan') {
    Search('hitmontop');
    setEvolutionData({
      evolutionName: 'hitmontop',
    });
  }
};

export const TyroguePreEvolution = (pokemonData, Search, setPreEvolutionData) => {
  if (pokemonData.name === 'hitmonlee') {
    Search('tyrogue');
    setPreEvolutionData({
      evolutionName: 'tyrogue',
    });
  } else if (pokemonData.name === 'hitmonchan') {
    Search('tyrogue');
    setPreEvolutionData({
      evolutionName: 'tyrogue',
    });
  } else if (pokemonData.name === 'hitmontop') {
    Search('tyrogue');
    setPreEvolutionData({
      evolutionName: 'tyrogue',
    });
  }
};