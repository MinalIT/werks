import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCheck, AiOutlineClose, AiOutlineLoading, AiOutlineDown } from 'react-icons/ai';


const RequestDetails = ({ request, onApprove, onReject, onClose, loading }) => (
  <div className="fixed inset-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 overflow-auto">
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Request Details</h3>
        <button
          onClick={onClose}
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition"
        >
          Close
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-4">
        <p><strong>Vendor:</strong> {request.name}</p>
        <p><strong>Product:</strong> {request.product}</p>
        <p><strong>Status:</strong> {request.status}</p>
        <p><strong>History:</strong> {request.history}</p>
        <p><strong>GST Number:</strong> {request.gstNumber}</p>
        <p><strong>Phone Number:</strong> {request.phoneNumber}</p>
        <p><strong>Aadhaar Card:</strong> {request.aadhaarCard}</p>
        <p><strong>Bank Details:</strong> {request.bankDetails}</p>
        <p><strong>Cancelled Cheque:</strong> {request.canceledCheque}</p>
        <p><strong>PAN Card:</strong> {request.panCard}</p>
        <p><strong>Logo:</strong> {request.logo}</p>
      </div>
    </div>
    <div className="flex justify-center space-x-4 p-4 bg-gray-100 border-t">
      <button
        onClick={() => onApprove(request)}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition flex items-center"
      >
        {loading ? <AiOutlineLoading className="animate-spin mr-2" /> : <AiOutlineCheck className="mr-2" />}
        Approve
      </button>
      <button
        onClick={() => onReject(request)}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition flex items-center"
      >
        {loading ? <AiOutlineLoading className="animate-spin mr-2" /> : <AiOutlineClose className="mr-2" />}
        Reject
      </button>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: 'Vendor A',
      product: 'Product X',
      status: 'Pending',
      history: 'Last updated on 2024-09-01',
      gstNumber: '123456789012345',
      phoneNumber: '9876543210',
      aadhaarCard: 'aadhaar_card.pdf',
      bankDetails: 'bank_details.pdf',
      canceledCheque: 'canceled_cheque.pdf',
      panCard: 'pan_card.pdf',
      logo: 'logo.png',
    },
    {
      id: 2,
      name: 'Vendor B',
      product: 'Product Y',
      status: 'Pending',
      history: 'Last updated on 2024-09-02',
      gstNumber: '543210987654321',
      phoneNumber: '0123456789',
      aadhaarCard: 'aadhaar_card_b.pdf',
      bankDetails: 'bank_details_b.pdf',
      canceledCheque: 'canceled_cheque_b.pdf',
      panCard: 'pan_card_b.pdf',
      logo: 'logo_b.png',
    },
  ]);

  const handleApprove = (request) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRequests(prevRequests =>
        prevRequests.map(req =>
          req.id === request.id ? { ...req, status: 'Approved' } : req
        )
      );
      setSelectedRequestId(null);
    }, 1000);
  };

  const handleReject = (request) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRequests(prevRequests =>
        prevRequests.map(req =>
          req.id === request.id ? { ...req, status: 'Denied' } : req
        )
      );
      setSelectedRequestId(null);
    }, 1000);
  };

  const selectedRequest = requests.find(request => request.id === selectedRequestId);

  return (
    <div className="bg-gray-100 min-h-screen p-0">
      <div className="w-screen h-screen bg-white p-6 rounded-lg shadow-lg relative">
        <h1 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>
        <p className="text-center mb-6">Manage vendor requests and approve or reject product uploads.</p>
       
        <Link to="/AdminDashboard">
        <button className="absolute bottom-5 right-5 bg-blue-700 text-white p-2 rounded-md">
          Sellers Management DashBoard
        </button>
      </Link>

      <Link to="CommissionCalculation">
        <button className="absolute bottom-5 left-5 bg-blue-700 text-white p-2 rounded-md">
          Seller Commission Calculation
        </button>
      </Link>
    
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left">Vendor Name</th>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">History</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b hover:bg-gray-50 relative">
                  <td className="p-4">{request.name}</td>
                  <td className="p-4">{request.product}</td>
                  <td className="p-4">{request.status}</td>
                  <td className="p-4">{request.history}</td>
                  <td className="p-4 relative">
                    {request.status === 'Pending' ? (
                      <button
                        onClick={() => setSelectedRequestId(request.id)}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition flex items-center"
                      >
                        <AiOutlineDown className="mr-2" />
                        Review
                      </button>
                    ) : (
                      <span className={`py-2 px-4 rounded ₹{request.status === 'Approved' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                        {request.status}
                      </span>
                    )}
                    {selectedRequestId === request.id && selectedRequest && (
                      <RequestDetails
                        request={selectedRequest}
                        onApprove={handleApprove}
                        onReject={handleReject}
                        onClose={() => setSelectedRequestId(null)}
                        loading={loading}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
