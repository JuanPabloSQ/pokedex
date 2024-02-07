import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PokeStats = ({ stats }) => { 

  const data = {
    labels: ['HP', 'Attack', 'Defense', 'Special-Attack', 'Special-Defense', 'Speed'],
    datasets: [{
      label: 'PokeStats',
      data: stats, 
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

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
    <div style={{ background: '#333', padding: '10px', borderRadius: '10px', width: '400px', height: '400px', minHeight: '300px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default PokeStats;