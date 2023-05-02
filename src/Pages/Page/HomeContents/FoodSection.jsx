/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBeer, FaDollarSign } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomeContext.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


const FoodSection = () => {

  return (
    <div className="px-4 md:px-44 pb-5">
      <div className="text-center pt-8 pb-5 md:pt-24 md:pb-20">
        <p className="text-lg font-medium text-my-primary">Special Offer</p>
        <h3 className="text-4xl font-semibold mt-2">Best Specialties</h3>
      </div>

      <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
            <div><img
                style={{height: "380px"}}
             src="https://img.etimg.com/thumb/msid-70476197,width-1200,height-900,imgsize-696197,overlay-etrise/photo.jpg" alt="" /></div>
            <h4 className="my-4 text-4xl font-semibold">Biriyani</h4>
            <p className="mt-3">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</p>
            <p className="text-my-primary my-3 flex items-center font-semibold text-lg"><FaDollarSign/> 12</p>
            <button className="btn btn-outline border-my-primary text-my-primary hover:bg-my-primary">
            Have it now
          </button>
        </SwiperSlide>
        <SwiperSlide>
            <div><img 
            style={{height: "380px"}}
            src="https://indianfood.com.sg/wp-content/uploads/2021/03/punjab-channa-masala.jpg" alt="" /></div>
            <h4 className="my-4 text-4xl font-semibold">Chana Masala</h4>
            <p className="mt-3">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</p>
            <p className="text-my-primary my-3 flex items-center font-semibold text-lg"><FaDollarSign/> 12</p>
            <button className="btn btn-outline border-my-primary text-my-primary hover:bg-my-primary">
            Have it now
          </button>
        </SwiperSlide>
        <SwiperSlide>
            <div><img 
            style={{height: "380px"}}
            src="https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg" alt="" /></div>
            <h4 className="my-4 text-4xl font-semibold">Palak Paneer</h4>
            <p className="mt-3">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</p>
            <p className="text-my-primary my-3 flex items-center font-semibold text-lg"><FaDollarSign/> 12</p>
            <button className="btn btn-outline border-my-primary text-my-primary hover:bg-my-primary">
            Have it now
          </button>
        </SwiperSlide>
        <SwiperSlide>
            <div><img
            style={{height: "380px"}}
             src="https://cdn.shopify.com/s/files/1/1870/3765/articles/Aloo-Gobi-2.jpg?v=1649073476" alt="" /></div>
            <h4 className="my-4 text-4xl font-semibold">Aloo Gobi</h4>
            <p className="mt-3">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</p>
            <p className="text-my-primary my-3 flex items-center font-semibold text-lg"><FaDollarSign/> 12</p>
            <button className="btn btn-outline border-my-primary text-my-primary hover:bg-my-primary">
            Have it now
          </button>
        </SwiperSlide>
        <SwiperSlide>
            <div><img style={{height: "380px"}}
             src="https://www.hercircle.in/hcm/EngageImage/2AA9FE38-E252-44E4-AF00-AB08306A782D/D/F385D856-512D-4786-B33E-9B742E1B4DC3.jpg" alt="" /></div>
            <h4 className="my-4 text-4xl font-semibold">Vegetable Biryani</h4>
            <p className="mt-3">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</p>
            <p className="text-my-primary my-3 flex items-center font-semibold text-lg"><FaDollarSign/> 12</p>
            <button className="btn btn-outline border-my-primary text-my-primary hover:bg-my-primary">
            Have it now
          </button>
        </SwiperSlide>
        
      </Swiper>
    

    </div>
  );
};

export default FoodSection;
