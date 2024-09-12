import React, { useState } from 'react';

function InquiryForm() {
    const [formData, setFormData] = useState({
        quantity: '',
        units: 'Pieces',
        content: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        setIsSubmitted(true);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Send Inquiry</h2>
            <div className="mb-4">
                <label className="block font-medium mb-2">
                    Zhengzhou Runxiang Machinery Equipment Co., Ltd.
                </label>
                <p className="text-gray-700">Factory Multifunctional Animal Feed Corn Wheat Grain Grinder Crusher Machine</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        className="w-1/2 p-2 border rounded-lg mr-2"
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                    <select
                        name="units"
                        className="w-1/2 p-2 border rounded-lg"
                        value={formData.units}
                        onChange={handleChange}
                    >
                        <option value="Pieces">Pieces</option>
                        <option value="Kilograms">Kilograms</option>
                        <option value="Liters">Liters</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Content</label>
                    <textarea
                        name="content"
                        placeholder="Please enter details such as material, size, application, specifications, and other requirements to receive an accurate quote."
                        className="w-full p-2 border rounded-lg h-32"
                        value={formData.content}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full p-2 border rounded-lg"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition-all"
                >
                    Send Inquiry Now
                </button>
            </form>

            {isSubmitted && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <p>Thank you for your inquiry! The supplier will contact you soon at the provided email address to resolve your query.</p>
                </div>
            )}
        </div>
    );
}

export default InquiryForm;
