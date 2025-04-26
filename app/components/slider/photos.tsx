import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./photos.css"
import Image from 'next/image';


const images = [
  {
    id: 1,
    // image: "/45631.jpg",
    image:"/ayushi-removebg-preview (2) (1)-modified.png",
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 2,
    image: "/1287.jpg",
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 3,
    image: "/18155.jpg",
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 4,
    image: "/27767.jpg",
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 5,
    image: "/6837.jpg",
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 6,
    image: "/2148767055.jpg",
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 7,
    image: "/21959.jpg",
    imageWidth: 200,
    imageHeight: 200,
  },
];

const Photos = () => {
  return (
    <div className="w-full flex justify-center items-center py-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {/* {images.map((img)=>{
            return <SwiperSlide>
                <img src={img.image} alt="" />
            </SwiperSlide>;
        })} */}

        {images.map((img) => (
          <SwiperSlide
            key={img.id}
            className="w-64 h-64 flex items-center justify-center"
          >
            <Image
              src={img.image}
              width={img.imageWidth}
              height={img.imageHeight}
              alt={`Image ${img.id}`}
              className="object-cover rounded-lg w-full h-full border-2 outline outline-2 border-[#7049EECC]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Photos;