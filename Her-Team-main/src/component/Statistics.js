import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Users',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: '#ff66a3',
      },
      {
        label: 'Employees',
        data: [7, 11, 5, 8, 3, 7, 4],
        backgroundColor: '#007bff',
      },
    ],
  };

  return (
    <div>
      <h2>Statistics</h2>
      <Bar data={data} />
    </div>
  );
};

export default Statistics;
