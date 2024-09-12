import React, { useState } from 'react';
import { saveAs } from 'file-saver';

// Vendor-specific rates
const vendors = {
  'Vendor A': {
    hierarchy: 'Standard',
    categoryRates: {
      'Electronics': 0.1,
      'Clothing': 0.08,
      'Books': 0.05,
    },
    currentCommission: 0,
  },
  'Vendor B': {
    hierarchy: 'Premium',
    categoryRates: {
      'Electronics': 0.12,
      'Clothing': 0.09,
      'Books': 0.07,
    },
    currentCommission: 0,
  },
  'Vendor C': {
    hierarchy: 'Gold',
    categoryRates: {
      'Electronics': 0.15,
      'Clothing': 0.1,
      'Books': 0.08,
    },
    currentCommission: 0,
  }
};

const taxRates = {
  'Flat': 0.1,
  'Tiered': [
    { threshold: 1000, rate: 0.05 },
    { threshold: 5000, rate: 0.1 },
    { threshold: Infinity, rate: 0.15 }
  ]
};

const hierarchyRates = {
  'Standard': 0.05,
  'Premium': 0.1,
  'Gold': 0.15,
};

const CommissionCalculation = () => {
  const [selectedVendor, setSelectedVendor] = useState('Vendor A');
  const [orderValue, setOrderValue] = useState('');
  const [commissionType, setCommissionType] = useState('fixed');
  const [commissionAmount, setCommissionAmount] = useState('');
  const [taxType, setTaxType] = useState('Flat');
  const [category, setCategory] = useState('Electronics');
  const [totalCommission, setTotalCommission] = useState(null);
  const [taxAmount, setTaxAmount] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleCalculateCommission = () => {
    const vendor = vendors[selectedVendor];
    let commission = 0;

    // Commission based on type
    if (commissionType === 'fixed') {
      commission = parseFloat(commissionAmount) || 0;
    } else if (commissionType === 'percentage') {
      commission = (parseFloat(commissionAmount) || 0) * (parseFloat(orderValue) || 0) / 100;
    }

    // Add hierarchy-based commission
    const hierarchyCommission = hierarchyRates[vendor.hierarchy] * (parseFloat(orderValue) || 0);

    // Add category-based commission
    const categoryCommission = vendor.categoryRates[category] * (parseFloat(orderValue) || 0);

    commission += hierarchyCommission + categoryCommission;

    // Tax calculation
    let tax = 0;
    if (taxType === 'Flat') {
      tax = taxRates.Flat;
    } else if (taxType === 'Tiered') {
      tax = taxRates.Tiered.find(rule => commission <= rule.threshold)?.rate || 0;
    }

    const taxValue = commission * tax;
    const commissionWithTax = commission + taxValue;

    setTaxAmount(taxValue.toFixed(2));
    setTotalCommission(commissionWithTax.toFixed(2));
    setConfirmationMessage('');
  };

  const handleExportReport = () => {
    const csvContent = [
      ['Vendor', 'Order Value', 'Commission Type', 'Commission Amount', 'Tax Type', 'Tax Amount', 'Category', 'Total Commission'],
      [selectedVendor, orderValue, commissionType, commissionAmount, taxType, taxAmount, category, totalCommission]
    ]
      .map(e => e.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'commission_report.csv');
  };

  const handleUpdateVendorCommission = () => {
    vendors[selectedVendor].currentCommission = totalCommission;
    setConfirmationMessage(`Commission updated for ${selectedVendor}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6 flex items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Commission Calculation</h1>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Calculate Commission</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Select Vendor</label>
          <select
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}
            className="p-2 border rounded w-full"
          >
            {Object.keys(vendors).map((vendor) => (
              <option key={vendor} value={vendor}>{vendor}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Order Value (₹)</label>
          <input
            type="number"
            value={orderValue}
            onChange={(e) => setOrderValue(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Commission Type</label>
          <select
            value={commissionType}
            onChange={(e) => setCommissionType(e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="fixed">Fixed</option>
            <option value="percentage">Percentage</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">
            {commissionType === 'fixed' ? 'Fixed Commission Amount (₹)' : 'Commission Percentage (%)'}
          </label>
          <input
            type="number"
            value={commissionAmount}
            onChange={(e) => setCommissionAmount(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Product Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tax Type</label>
          <select
            value={taxType}
            onChange={(e) => setTaxType(e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="Flat">Flat Rate</option>
            <option value="Tiered">Tiered Rate</option>
          </select>
        </div>

        <button
          onClick={handleCalculateCommission}
          className="p-2 border rounded bg-blue-500 text-white"
        >
          Calculate Commission
        </button>

        {totalCommission !== null && (
          <div className="mt-4">
            <div className="text-xl font-semibold text-gray-800">Total Commission: ₹ {totalCommission}</div>
            <div className="text-lg text-gray-700">Tax Amount: ₹{taxAmount}</div>
          </div>
        )}

        <button
          onClick={handleExportReport}
          className="mt-4 p-2 border rounded bg-green-500 text-white"
        >
          Export Report
        </button>

        {totalCommission !== null && (
          <button
            onClick={handleUpdateVendorCommission}
            className="mt-4 p-2 border rounded bg-orange-500 text-white"
          >
            Update Vendor Commission
          </button>
        )}

        {confirmationMessage && (
          <div className="mt-4 text-green-600 font-semibold">
            {confirmationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommissionCalculation;
