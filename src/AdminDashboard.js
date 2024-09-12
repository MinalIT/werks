

import React, { useState, useEffect } from 'react';
import { FaChartLine, FaDollarSign, FaBoxOpen, FaUserTie, FaDownload, FaBell, FaCalendarAlt, FaStar, FaInfoCircle, FaCalculator, FaChartPie } from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, ArcElement, PointElement } from 'chart.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { saveAs } from 'file-saver';

// Register Chart.js components
ChartJS.register(
  Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, ArcElement, PointElement
);

const allSellersData = {
  labels: ['Seller A', 'Seller B', 'Seller C', 'Seller D'],
  datasets: [
    {
      label: 'Sales by Seller',
      data: [2000, 3000, 2500, 4000],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
    {
      label: 'Revenue by Seller',
      data: [5000, 7000, 6000, 8000],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    },
    {
      label: 'Average Order Value',
      data: [100, 150, 120, 180],
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    },
    {
      label: 'Total Orders',
      data: [150, 200, 180, 220],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
    {
      label: 'Customer Ratings',
      data: [4.5, 4.2, 4.7, 4.0],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    }
  ],
};

const sellerDetailsData = {
  'Seller A': {
    sales: [2000],
    revenue: [5000],
    avgOrderValue: [100],
    totalOrders: [150],
    ratings: [4.5],
    commission: [500],
    payouts: [4500],
    traffic: [1200]
  },
  'Seller B': {
    sales: [3000],
    revenue: [7000],
    avgOrderValue: [150],
    totalOrders: [200],
    ratings: [4.2],
    commission: [700],
    payouts: [6300],
    traffic: [1500]
  },
  'Seller C': {
    sales: [2500],
    revenue: [6000],
    avgOrderValue: [120],
    totalOrders: [180],
    ratings: [4.7],
    commission: [600],
    payouts: [5400],
    traffic: [1400]
  },
  'Seller D': {
    sales: [4000],
    revenue: [8000],
    avgOrderValue: [180],
    totalOrders: [220],
    ratings: [4.0],
    commission: [800],
    payouts: [7200],
    traffic: [1700]
  }
  
};

const AdminDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []); 
  const [selectedSeller, setSelectedSeller] = useState('All');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSellerChange = (event) => {
    setSelectedSeller(event.target.value);
  };

  const handleDownloadReport = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Seller,Sales,Revenue,Avg Order Value,Total Orders,Ratings,Commission,Payouts,Traffic\n';

    if (selectedSeller === 'All') {
      allSellersData.labels.forEach((seller, index) => {
        const row = [
          seller,
          allSellersData.datasets[0].data[index] || '',
          allSellersData.datasets[1].data[index] || '',
          allSellersData.datasets[2].data[index] || '',
          allSellersData.datasets[3].data[index] || '',
          allSellersData.datasets[4].data[index] || '',
          sellerDetailsData[seller]?.commission[0] || '',
          sellerDetailsData[seller]?.payouts[0] || '',
          sellerDetailsData[seller]?.traffic[0] || ''
        ].join(',');
        csvContent += row + '\n';
      });
    } else {
      const sellerData = sellerDetailsData[selectedSeller];
      const row = [
        selectedSeller,
        sellerData.sales[0] || '',
        sellerData.revenue[0] || '',
        sellerData.avgOrderValue[0] || '',
        sellerData.totalOrders[0] || '',
        sellerData.ratings[0] || '',
        sellerData.commission[0] || '',
        sellerData.payouts[0] || '',
        sellerData.traffic[0] || ''
      ].join(',');
      csvContent += row + '\n';
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'report.csv');
  };

  const filteredData = selectedSeller === 'All' ? allSellersData : sellerDetailsData[selectedSeller];

  const chartData = {
    labels: selectedSeller === 'All' ? allSellersData.labels : [selectedSeller],
    datasets: [
      {
        label: 'Sales',
        data: filteredData.sales,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Revenue',
        data: filteredData.revenue,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Average Order Value',
        data: filteredData.avgOrderValue,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Total Orders',
        data: filteredData.totalOrders,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Customer Ratings',
        data: filteredData.ratings,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }
    ]
  };

  const commissionData = {
    labels: selectedSeller === 'All' ? allSellersData.labels : [selectedSeller],
    datasets: [
      {
        label: 'Commission',
        data: selectedSeller === 'All' ? allSellersData.labels.map((seller) => sellerDetailsData[seller]?.commission[0]) : filteredData.commission,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Payouts',
        data: selectedSeller === 'All' ? allSellersData.labels.map((seller) => sellerDetailsData[seller]?.payouts[0]) : filteredData.payouts,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  const trafficData = {
    labels: selectedSeller === 'All' ? allSellersData.labels : [selectedSeller],
    datasets: [
      {
        label: 'Traffic',
        data: selectedSeller === 'All' ? allSellersData.labels.map((seller) => sellerDetailsData[seller]?.traffic[0]) : filteredData.traffic,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Sellers Management Dashboard</h1>
        <button onClick={handleDownloadReport} className="flex items-center p-2 border rounded bg-blue-500 text-white">
          <FaDownload className="mr-2" /> Download Report
        </button>
      </header>

      <div className="mb-6 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <label htmlFor="seller-select" className="block text-lg font-semibold text-gray-700">Select Seller</label>
          <select id="seller-select" value={selectedSeller} onChange={handleSellerChange} className="p-2 border rounded">
            <option value="All">All Sellers</option>
            <option value="Seller A">Seller A</option>
            <option value="Seller B">Seller B</option>
            <option value="Seller C">Seller C</option>
            <option value="Seller D">Seller D</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label className="block text-lg font-semibold text-gray-700">Date Range</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="p-2 border rounded"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="p-2 border rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales, Revenue & Ratings</h2>
          <Bar data={chartData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Commission & Payouts</h2>
          <Bar data={commissionData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Traffic</h2>
          <Bar data={trafficData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Analysis</h2>
        <Line data={trafficData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
      </div>
       
      </div>

    

      <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Insights</h2>
          <ul className="text-gray-700">
            <li><FaStar className="inline mr-2 text-yellow-500" /> Seller with highest rating: {selectedSeller === 'All' ? 'Seller C (4.7)' : selectedSeller}</li>
            <li><FaDollarSign className="inline mr-2 text-green-500" /> Seller with highest revenue: {selectedSeller === 'All' ? 'Seller D (₹8000)' : selectedSeller}</li>
            <li><FaBoxOpen className="inline mr-2 text-blue-500" /> Seller with most orders: {selectedSeller === 'All' ? 'Seller D (220 orders)' : selectedSeller}</li>
            <li><FaCalculator className="inline mr-2 text-purple-500" /> Total Commission: ₹{selectedSeller === 'All' ? allSellersData.datasets.reduce((total, data) => total + data.data.reduce((sum, value) => sum + value, 0), 0) : filteredData.commission}</li>
            <li><FaCalendarAlt className="inline mr-2 text-red-500" /> Total Payouts: ₹{selectedSeller === 'All' ? allSellersData.datasets.reduce((total, data) => total + data.data.reduce((sum, value) => sum + value, 0), 0) : filteredData.payouts}</li>
          </ul>
        </div>
    </div>
  );
};

export default AdminDashboard;
