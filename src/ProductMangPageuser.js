import React, { useState } from 'react';
import { FaDownload, FaUpload } from 'react-icons/fa'; // Import FaUpload
import Papa from 'papaparse'; // CSV parsing library

const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
    image: null,
    discountTiers: [{ minQuantity: '', discountType: 'none', discountValue: '' }],
  });
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [productPreview, setProductPreview] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [csvFile, setCsvFile] = useState(null);

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || isNaN(Number(newProduct.price)) || isNaN(Number(newProduct.quantity))) {
      setError('Please provide valid product details.');
      return;
    }

    // Validate discount tiers
    for (const tier of newProduct.discountTiers) {
      if (tier.discountType !== 'none' && (isNaN(Number(tier.discountValue)) || Number(tier.discountValue) <= 0)) {
        setError('Please provide valid discount values for all tiers.');
        return;
      }
    }

    const productWithTiers = {
      ...newProduct,
      price: Number(newProduct.price),
      quantity: Number(newProduct.quantity),
      discountTiers: newProduct.discountTiers.map(tier => ({
        minQuantity: Number(tier.minQuantity),
        discountType: tier.discountType,
        discountValue: tier.discountValue ? Number(tier.discountValue) : '',
      })),
    };

    if (editingIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = productWithTiers;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      setProducts([...products, productWithTiers]);
    }

    setNewProduct({
      name: '',
      price: '',
      quantity: '',
      description: '',
      image: null,
      discountTiers: [{ minQuantity: '', discountType: 'none', discountValue: '' }],
    });
    setProductPreview(null);
    setError('');
    alert('Product saved successfully!');
  };

  const handleEditProduct = (index) => {
    const productToEdit = products[index];
    setNewProduct({
      name: productToEdit.name,
      price: productToEdit.price,
      quantity: productToEdit.quantity,
      description: productToEdit.description,
      image: productToEdit.image,
      discountTiers: productToEdit.discountTiers,
    });
    setProductPreview(productToEdit.image ? URL.createObjectURL(productToEdit.image) : null);
    setEditingIndex(index);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(products.map(product => ({
      ...product,
      discountTiers: JSON.stringify(product.discountTiers),
    })), {
      headers: ['name', 'price', 'quantity', 'description', 'image', 'discountTiers'],
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'products.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBulkUpload = () => {
    if (csvFile) {
      Papa.parse(csvFile, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const productsData = result.data.map(product => ({
            ...product,
            price: Number(product.price),
            quantity: Number(product.quantity),
            discountTiers: product.discountTiers ? JSON.parse(product.discountTiers) : [],
          }));
          setProducts([...products, ...productsData]);
        },
        error: (error) => {
          setError('Failed to parse CSV file.');
        },
      });
    }
  };

  const handleCSVChange = (event) => {
    setCsvFile(event.target.files[0]);
  };

  const handleAddDiscountTier = () => {
    setNewProduct({
      ...newProduct,
      discountTiers: [...newProduct.discountTiers, { minQuantity: '', discountType: 'none', discountValue: '' }],
    });
  };

  const handleDiscountTierChange = (index, field, value) => {
    const updatedTiers = [...newProduct.discountTiers];
    updatedTiers[index][field] = value;
    setNewProduct({ ...newProduct, discountTiers: updatedTiers });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriceRange =
      (!priceRange.min || Number(product.price) >= Number(priceRange.min)) &&
      (!priceRange.max || Number(product.price) <= Number(priceRange.max));
    return matchesSearch && matchesPriceRange;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Product Management Seller Portal</h1>

        {error && <div className="bg-red-500 text-white p-4 rounded-md mb-4">{error}</div>}

        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add / Edit Product</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className={`w-full px-4 py-2 border rounded-md ${!newProduct.name && error ? 'border-red-500' : ''}`}
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className={`w-full px-4 py-2 border rounded-md ${!newProduct.price && error ? 'border-red-500' : ''}`}
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newProduct.quantity}
              onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
              className={`w-full px-4 py-2 border rounded-md ${!newProduct.quantity && error ? 'border-red-500' : ''}`}
            />
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setNewProduct({ ...newProduct, image: e.target.files[0] });
                  setProductPreview(URL.createObjectURL(e.target.files[0]));
                }
              }}
              className="w-full border rounded-md py-2"
            />
            {productPreview && <img src={productPreview} alt="Product Preview" className="w-32 h-32 object-cover mt-2" />}

            <div>
              <h3 className="text-lg font-semibold mb-2">Discount Tiers</h3>
              {newProduct.discountTiers.map((tier, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="number"
                    placeholder="Min Quantity"
                    value={tier.minQuantity}
                    onChange={(e) => handleDiscountTierChange(index, 'minQuantity', e.target.value)}
                    className="px-4 py-2 border rounded-md w-1/4"
                  />
                  <select
                    value={tier.discountType}
                    onChange={(e) => handleDiscountTierChange(index, 'discountType', e.target.value)}
                    className="px-4 py-2 border rounded-md w-1/4"
                  >
                    <option value="none">None</option>
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed Amount</option>
                  </select>
                  {tier.discountType !== 'none' && (
                    <input
                      type="number"
                      placeholder="Discount Value"
                      value={tier.discountValue}
                      onChange={(e) => handleDiscountTierChange(index, 'discountValue', e.target.value)}
                      className="px-4 py-2 border rounded-md w-1/4"
                    />
                  )}
                </div>
              ))}
              <button
                onClick={handleAddDiscountTier}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
              >
                Add Discount Tier
              </button>
            </div>

            <button
              onClick={handleAddProduct}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              {editingIndex !== null ? 'Save Changes' : 'Add Product'}
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Upload Products in Bulk</h2>
          <input
            type="file"
            accept=".csv"
            onChange={handleCSVChange}
            className="w-full mb-4"
          />
          <button
            onClick={handleBulkUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            <FaUpload className="inline-block mr-2" />
            Upload CSV
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4"
          />
          <div className="flex gap-4 mb-4">
            <input
              type="number"
              placeholder="Min Price"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              className="px-4 py-2 border rounded-md"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              className="px-4 py-2 border rounded-md"
            />
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">${product.price}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                  <td className="border px-4 py-2">{product.description}</td>
                  <td className="border px-4 py-2">
                    {product.image && <img src={URL.createObjectURL(product.image)} alt="Product" className="w-16 h-16 object-cover" />}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEditProduct(index)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
    onClick={() => alert('Product Published!')} // Replace with your publish logic
    className="bg-blue-500 text-white px-4 py-2 rounded-md"
  >
    Publish Product
  </button>
        </div>

        <div className="mt-6">
          <button
            onClick={exportToCSV}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            <FaDownload className="inline-block mr-2" />
            Export to CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementPage;
