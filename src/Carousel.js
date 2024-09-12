import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/autoplay';

// Import images
import img4 from '../src/Images/wheatgrinder.jpg';
import img5 from '../src/Images/Fishmeal.jpg';
import img6 from '../src/Images/Livestockfeed.jpg';
import img7 from '../src/Images/maizgrinding.jpg';
import img8 from '../src/Images/glasscutter.jpg';
import img9 from '../src/Images/feedextruder.jpg';

// Sample categories data
const categories = [
  { src: img4, alt: 'wheatgrinder', text: 'Wheat Grinder', to: '/Wheatgrinder' },
  { src: img5, alt: 'Fishmeal', text: 'Fish Meal', to: '/Fishmeal' },
  { src: img6, alt: 'Livestockfeed', text: 'Livestock Feed', to: '/Livestockfeed' },
  { src: img7, alt: 'maizgrinding', text: 'Maiz Grinding', to: '/Maizgrinding' },
  { src: img8, alt: 'glasscutter', text: 'Glass Cutter', to: '/Glasscutter' },
  { src: img9, alt: 'feedextruder', text: 'Feed Extruder', to: '/Feedextruder' },
];

function CategorySlider() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      loop={true} // Enable looping
      autoplay={{
        delay: 2000, // Delay in milliseconds
        disableOnInteraction: false, // Continue autoplay even if user interacts with the slider
      }}
      breakpoints={{
        650: {
          slidesPerView: 5,
        },
        400: {
          slidesPerView: 2,
        },
      }}
      modules={[Autoplay]} // Ensure Autoplay module is included
      className="swiper-container"
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <Link to={category.to} className="category-item flex flex-col items-center justify-center text-center mb-6">
            <img
              src={category.src}
              alt={category.alt}
              className="w-40 h-40 object-cover rounded-full shadow-md mt-6 mb-6 transition-transform transform hover:scale-110"
            />
            <h3 className="mt-2 text-lg font-bold mb-12">{category.text}</h3>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategorySlider;
