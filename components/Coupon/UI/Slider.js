import { SwiperWrapper, SwiperSlideItem, ImageWrapper } from "./Slider.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import Image from "next/legacy/image";

const Slider = () => {
	return (
		<SwiperWrapper>
			<Swiper
				modules={[Autoplay, Pagination]}
				className="mySwiper"
				autoplay={{ delay: 3500, disableOnInteraction: false }}
				loop={true}
				centeredSlides={true}
				initialSlide={1}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				breakpoints={{
					300: {
						slidesPerView: 1,
						centeredSlides: true,
					},
					770: {
						slidesPerView: 1.9,
						spaceBetween: 110,
					},
					870: {
						slidesPerView: 2.1,
						spaceBetween: 110,
					},
					970: {
						slidesPerView: 2.4,
						spaceBetween: 140,
					},
					1070: {
						slidesPerView: 2.6,
						spaceBetween: 180,
					},
					1170: {
						slidesPerView: 2.8,
						spaceBetween: 150,
					},
					1270: {
						slidesPerView: 3,
						spaceBetween: 130,
					},
				}}
			>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image src="/images/coupon_50.jpg" layout="fill" priority />
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image src="/images/coupon_100.jpg" layout="fill" priority />
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image src="/images/coupon_300.jpg" layout="fill" priority />
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image src="/images/coupon_700.jpg" layout="fill" priority />
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image src="/images/coupon_vip.jpg" layout="fill" priority />
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
			</Swiper>
		</SwiperWrapper>
	);
};

export default Slider;
