import React, { useState ,useRef ,useEffect} from 'react';
import agrim1 from '../src/Images/agrim1.jpg';
import agrim2 from '../src/Images/agrim2.jpg';
import videoSource from '../src/Images/agri.mp4';
import Chat from './Chat';

import { useNavigate } from 'react-router-dom';

function ProductDetails() {
    const [activeTab, setActiveTab] = useState('description');
    const [currentMedia, setCurrentMedia] = useState(videoSource);
    const [isVideo, setIsVideo] = useState(true);

    const videoRef = useRef(null);
    const companyProfileRef = useRef(null);
    const productCapacityRef = useRef(null);
    const companyShowRef = useRef(null);
    const tradeCapacityRef = useRef(null);
    const navigate = useNavigate();

    // Scroll to the corresponding section when a tab is clicked
    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 50,
            behavior: 'smooth',
        });
    };

    const handleThumbnailClick = (media, isVideo) => {
        setCurrentMedia(media);
        setIsVideo(isVideo);
    };

   
    useEffect(() => {
        if (isVideo && videoRef.current) {
            videoRef.current.play();
        }
    }, [isVideo]);

    const handleClick = () => {
        navigate('/Animalfeedsuplier');
      };
    return (
        <div className="bg-gray-100 p-8">
            <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Left side - Product Image */}
                <div className="lg:w-1/2 p-6 flex justify-center">
                <div className="relative w-full">
                    {isVideo ? (
                        <video
                            ref={videoRef}
                            src={currentMedia}
                            controls
                            className="w-full h-auto mb-4"
                            poster={agrim1}
                        />
                    ) : (
                        <img src={currentMedia} alt="Selected" className="w-full h-auto mb-4" />
                    )}
                </div>
                <div className="flex space-x-2 mt-4">
                    <img
                        src={agrim1}
                        alt="Thumbnail 1"
                        className="w-12 h-16 border-2 border-gray-200 rounded-md cursor-pointer"
                        onClick={() => handleThumbnailClick(agrim1, false)}
                    />
                    <img
                        src={agrim2}
                        alt="Thumbnail 2"
                        className="w-12 h-16 border-2 border-gray-200 rounded-md cursor-pointer"
                        onClick={() => handleThumbnailClick(agrim2, false)}
                    />
                    <img
                        src={agrim1}
                        alt="Thumbnail 3"
                        className="w-12 h-16 border-2 border-gray-200 rounded-md cursor-pointer"
                        onClick={() => handleThumbnailClick(videoSource, true)}
                    />
                </div>
            </div>


                {/* Right side - Product Details */}
                <div className="lg:w-1/2 p-6">
                    <h1 className="text-3xl font-semibold mb-2">Factory Multifunctional Animal Feed Corn Wheat Grain Grinder Crusher Machine</h1>
                    <p className="text-xl text-blue-600 mb-4">US$165.00 / Piece</p>
                    <p className="text-gray-500 mb-4">100 Pieces (MOQ)</p>

                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-sm bg-yellow-200 text-yellow-800 rounded-full">Top5 in Most Popular Universal cylindrical grinding machine</span>
                    </div>

                    <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Customization:</span>
                            <span className="text-gray-900">Available</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Type:</span>
                            <span className="text-gray-900">Multi-Use Grinding Machine</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Processing Object:</span>
                            <span className="text-gray-900">Gear</span>
                        </div>
                    </div>

                    <button
      className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all mb-2"
      onClick={handleClick}
    >
      Contact Supplier
    </button>
                   

            {/* Chat component with slide-up animation */}
            <div
                className={`fixed bottom-0 left-0 right-0  transition-transform duration-300 ease-in-out`}
            >
                <Chat />
            </div>
                </div>
            </div>
    
            <div className="bg-gray-100 p-8">
                <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left side - Product Information */}
                        <div className="lg:w-3/4 p-6">
                            <div className="border-b border-gray-200 mb-4">
                                <nav className="flex">
                                    <button 
                                        className={`text-lg pb-2 border-b-2 ${activeTab === 'description' ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-transparent'} focus:outline-none`} 
                                        onClick={() => setActiveTab('description')}
                                    >
                                        Product Description
                                    </button>
                                    <button 
                                        className={`ml-6 text-lg pb-2 border-b-2 ${activeTab === 'info' ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-transparent'} hover:text-blue-600 hover:border-blue-600 focus:outline-none`} 
                                        onClick={() => setActiveTab('info')}
                                    >
                                        Company Info.
                                    </button>
                                </nav>
                            </div>
                            
                            {activeTab === 'description' && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Product Description</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Model NO.</span>
                                            <span>WSCC</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Bulking Machine Type</span>
                                            <span>Single Screw Bulking Machine</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Expanding Method</span>
                                            <span>Dry Expansion</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Condition</span>
                                            <span>New</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Applicable Materials Shape</span>
                                            <span>Powder</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Warranty</span>
                                            <span>2 Years</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Abrasives</span>
                                            <span>Grinding Wheel</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Controlling Mode</span>
                                            <span>Artificial</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Automatic Grade</span>
                                            <span>Semiautomatic</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Cylindrical Grinder Type</span>
                                            <span>Universal Cylindrical Grinder</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Precision</span>
                                            <span>Normal Precision</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Certification</span>
                                            <span>ISO 9001, Co</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Capacity</span>
                                            <span>1000 Sets Per Month</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Material</span>
                                            <span>Carton Steel</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Key Word</span>
                                            <span>Grain Grinder Machine</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Cubic</span>
                                            <span>0.2-5 Cubic According to Different Models</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Transport Package</span>
                                            <span>Wooden Cases</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>Specification</span>
                                            <span>ISO, CE, CO, CCC</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-700">
                                            <span>HS Code</span>
                                            <span>8479820090</span>
                                        </div>
                                        </div>
                                       
                                    <p className="text-gray-700">
                                        Mini Multifunctional Animal Feed Corn Wheat Grain Grinder Crusher Machine description goes here...
                                    </p>
                                </div>
                            )}

                            {activeTab === 'info' && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Basic Info.</h2>
                                    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left side - Product Information */}
                    <div className="lg:w-3/4 p-6">
                        {/* Tabs */}
                        <div className="border-b border-gray-200 mb-4">
                            <nav className="flex">
                                <button onClick={() => scrollToSection(companyProfileRef)} className="text-lg text-blue-600 pb-2 border-b-2 border-blue-600 focus:outline-none">
                                    Company Profile
                                </button>
                                <button onClick={() => scrollToSection(productCapacityRef)} className="ml-6 text-lg text-gray-600 pb-2 border-b-2 border-transparent hover:text-blue-600 hover:border-purplr-600 focus:outline-none">
                                    Product Capacity
                                </button>
                                <button onClick={() => scrollToSection(companyShowRef)} className="ml-6 text-lg text-gray-600 pb-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 focus:outline-none">
                                    Company Show
                                </button>
                                <button onClick={() => scrollToSection(tradeCapacityRef)} className="ml-6 text-lg text-gray-600 pb-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 focus:outline-none">
                                    Trade Capacity
                                </button>
                            </nav>
                        </div>

                        {/* Company Profile Section */}
                        <div ref={companyProfileRef} className="mb-10">
                            <h2 className="text-xl font-semibold mb-4">Company Profile</h2>
                            <p className="text-gray-700 text-justify">
                            Established in 2012, Zhengzhou Runxiang Machinery Equipment Co., Ltd(Golden Machinery Equipment Co., Limited) is one professional manufacturer integrating R&D, manufacturing and trading, we are committed to farm agriculture machine line from sheller machine, grinder machine, feed pellet machine, drying machine and packing machine for years, We have 80 staff members and 16 technicians of research team. So we have more competitive strength, advanced processing technology and scientific management. And we are located in Zhengzhou city, Henan province, which is the business and economy center with easy transportation. Our international airport name is Zhengzhou Xinzheng International Airport.

Our main product:

1. Briquette machinery: Coal and charcoal briquette machine, sawdust briquette machine, biomass briquette machine, carbonization machine and so on.

2. Food fruit vegetable processing machinery: Harvester, washer, roaster, peeler, cutter machines, kitchen machine, juicer machine, dryer machine

3. Construction machine: Brick making machine, concrete mixer, stone and cement crusher, conveyor, colour machine, automatic wall remending machine and so on.

4, crusher and grinder: Coal and charcoal crusher, straw crusher, fruit crusher, wood crusher, grain crusher and combined machine, wood chipper, wood shredder, multifunctional stainless steel crusher, grain grinder, coffee grinder, corn grinder and so on.

5, woodworking machine: Wood peeling machine, wood chipper, wood crusher, wood grinder, wood shaving, and so on.

6, feed pellet machine: Pellet mill, pellet machine, feed pellet machine, fish feed machine, animal feed machine, fertilizer pellet machine and so on.

7, packing machine: Grain packing machine, snack packing machine, vacuum packing machine, automatic pillow packing machine, shream packing machine and so on.

8, recycling machine: Plastic crusher, plastic granulator, metal crusher, cloth cutter, radiator separator machine and so on.

The notable quality and outstanding performance endow these products enjoying great popularity among our customers.

Should you have interest of items mentioned above? Kindly let us know by return mail. Meanwhile if you require the other merchandises made in China, pls feel free to contact me.

Looking forward to hearing from you soon.

Taking "Sincerity makes trust, Quality wins market"as our business philosophy, Our company always put quality in the first place and meet our customers′ needs by ensuring high quality products and the most professional services, Therefore, our products have been exported to almost the whole world and enjoyed a good reputation from our customer for years.

We welcome new and old customers from all walks of life to contact us for future business relationships and achieving mutual success.

Welcome everyone!
                            </p>
                            {/* Additional company profile details here */}
                        </div>

                        {/* Product Capacity Section */}
                        <div ref={productCapacityRef} className="mb-10">
                            <h2 className="text-xl font-semibold mb-4">Product Capacity</h2>
                            <p className="text-gray-700">
                            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Trade Capacity</h2>
            
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">International Commercial Terms (Incoterms):</h3>
                <p className="text-gray-700">FOB, CFR, CIF, FAS, DDP, FCA, EXW</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Terms of Payment:</h3>
                <p className="text-gray-700">LC, T/T, Western Union, Small-amount payment, Money Gram, cash</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Average Lead Time:</h3>
                <p className="text-gray-700">Peak Season Lead Time: within 15 workdays</p>
                <p className="text-gray-700">Off Season Lead Time: within 15 workdays</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Number of Foreign Trading Staff:</h3>
                <p className="text-gray-700">11~20 People</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Export Year:</h3>
                <p className="text-gray-700">2006-01-01</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Export Percentage:</h3>
                <p className="text-gray-700">51%~70%</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Main Markets:</h3>
                <p className="text-gray-700">
                    North America, South America, Eastern Europe, Southeast Asia, Africa, Oceania, Mid East, Eastern Asia, Western Europe
                </p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Nearest Ports:</h3>
                <p className="text-gray-700">
                    Qingdao port, Ningbo port, Shanghai port, Tianjin port, any main port of China, Guangzhou port
                </p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Import & Export Mode:</h3>
                <p className="text-gray-700">Exportation via agency</p>
            </div></div>
                            </p>
                            {/* Additional product capacity details here */}
                        </div>

                        {/* Company Show Section */}
                        <div ref={companyShowRef} className="mb-10">
                            <h2 className="text-xl font-semibold mb-4">Company Show</h2>
                            <p className="text-gray-700">
                            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Production Capacity</h2>
            
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Factory Address:</h3>
                <p className="text-gray-700">NO 99, GUOJI ROAD, JINSHUI ZONE, ZHENGZHOU CITY, HENAN PROVINCE</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">R&D Capacity:</h3>
                <p className="text-gray-700">OEM, ODM, Own Brand (GMEC brand)</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">No. of R&D Staff:</h3>
                <p className="text-gray-700">21-30 People</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">No. of Production Lines:</h3>
                <p className="text-gray-700">10</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Annual Output Value:</h3>
                <p className="text-gray-700">US$5 Million - US$10 Million</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Ever Annual Output of Main Products:</h3>
                <table className="w-full text-left table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Product Name</th>
                            <th className="px-4 py-2 border">Units Produced (Previous Year)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">Feed pellet machine</td>
                            <td className="px-4 py-2 border">1000 Pieces</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Briquette machine</td>
                            <td className="px-4 py-2 border">1000 Pieces</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Food machine</td>
                            <td className="px-4 py-2 border">1000 Pieces</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Vegetable processing machine</td>
                            <td className="px-4 py-2 border">1000 Pieces</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Grinder machine</td>
                            <td className="px-4 py-2 border">1000 Pieces</td>
                        </tr>
                    </tbody>
                </table>
            </div></div>
                            </p>
                            {/* Additional company show details or images here */}
                        </div>

                        {/* Trade Capacity Section */}
                        <div ref={tradeCapacityRef} className="mb-10">
                            <h2 className="text-xl font-semibold mb-4">Trade Capacity</h2>
                            <p className="text-gray-700">
                                International Commercial Terms (Incoterms): FOB, CFR, CIF, FAS, DDP, FCA, EXW...
                            </p>
                            {/* Additional trade capacity details here */}
                        </div>
                    </div>

                    {/* Right side - Contact Info */}
                    <div className="lg:w-1/4 p-6 bg-gray-50">
                        <div className="border border-gray-300 rounded-lg p-4 text-center">
                            <img src="https://via.placeholder.com/100" alt="Supplier" className="w-24 h-24 mx-auto rounded-full mb-4"/>
                            <h3 className="text-xl font-semibold">Zhengzhou Runxiang Machinery Equipment Co., Ltd.</h3>
                            <p className="text-gray-600">4.0 <span className="text-yellow-400">★</span></p>
                            <p className="text-sm text-gray-500 mb-4">Sales Manager</p>
                            <button
      className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all mb-2"
      onClick={handleClick}
    >
      Contact Supplier
    </button>
                       

            {/* Chat component with slide-up animation */}
            <div
                className={`fixed bottom-0 left-0 right-0  transition-transform duration-300 ease-in-out`}
            >
                <Chat />
            </div>
                        </div>
                    </div>
                </div>
            </div>

                                    
                                </div>
                            )}
                        </div>

                        {/* Right side - Company Info */}
                        <div className="lg:w-1/4 p-6 border-l border-gray-200">
                            <h2 className="text-xl font-semibold mb-4">Company Info.</h2>
                            <p className="text-gray-700 mb-4">Company introduction and contact information here...</p>
                            <button className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all">Visit Website</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
