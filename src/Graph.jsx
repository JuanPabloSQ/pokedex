import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Registra todos los elementos necesarios para Chart.js una sola vez
Chart.register(...registerables);

const RadarChart = () => {
  const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
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
    <div style={{ background: '#333', padding: '10px', borderRadius: '10px', width: '100%', maxWidth: '400px', height: 'auto', minHeight: '500px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;