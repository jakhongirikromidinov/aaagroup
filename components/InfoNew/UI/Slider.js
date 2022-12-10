import {
	SliderItem,
	SwiperWrapper,
	ImageWrapper,
	Suptitle,
	Title,
	DayTitle,
} from "./Slider.styled";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Image from "next/legacy/image";

export default function Slider({ getData }) {
	return (
		<SwiperWrapper getData={getData}>
			<Swiper
				className="mySwiper swiper-v"
				spaceBetween={0}
				direction={"vertical"}
				slidesPerView={3}
				initialSlide={1}
				centeredSlides={true}
				slideToClickedSlide={true}
				rewind={true}
				onSlideChange={(swiper) => getData(swiper.realIndex)}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
			>
				<SwiperSlide>
					<ImageWrapper className="image_wrapper">
						<Image
							src="/images/slider_city_4.png"
							layout="fill"
							quality={100}
						/>
					</ImageWrapper>
				</SwiperSlide>
				<SwiperSlide>
					<ImageWrapper className="image_wrapper">
						<Image
							src="/images/slider_city_2.png"
							layout="fill"
							quality={100}
						/>
					</ImageWrapper>
				</SwiperSlide>
				<SwiperSlide>
					<ImageWrapper className="image_wrapper">
						<Image
							src="/images/slider_city_3.png"
							layout="fill"
							quality={100}
						/>
					</ImageWrapper>
				</SwiperSlide>
			</Swiper>
		</SwiperWrapper>
	);
}
