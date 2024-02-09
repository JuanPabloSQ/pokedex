import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import PropTypes from 'prop-types';

Chart.register(...registerables);

const PokeStats = ({ stats, pokeTypeColor }) => {
  const transparentPokeTypeColor = hexToRgba(pokeTypeColor, 0.5); 

  const data = {
    labels: ['HP', 'Attack', 'Defense', 'Special-Attack', 'Special-Defense', 'Speed'],
    datasets: [{
      label: 'PokeStats',
      data: stats,
      fill: true,
      backgroundColor: transparentPokeTypeColor, 
      borderColor: 'rgba(255, 255, 255, 0.8)',
      pointBackgroundColor: 'rgb(255, 255, 255)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 255, 255)',
    }]
  };

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.5)'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.5)'
        },
        pointLabels: {
          color: '#FFF'
        },
        ticks: {
          color: '#FFF',
          backdropColor: 'transparent'
        }
      }
    },
    elements: {
      line: {
        borderWidth: 3
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFF'
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div style={{ background: '#333', padding: '10px', borderRadius: '10px', width: '400px', height: '300px', minHeight: '300px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

PokeStats.propTypes = {
  stats: PropTypes.array.isRequired, 
  pokeTypeColor: PropTypes.string.isRequired, 
};

export default PokeStats;