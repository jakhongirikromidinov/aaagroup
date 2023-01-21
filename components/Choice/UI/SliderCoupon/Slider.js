import { SwiperWrapper, SwiperSlideItem, ImageWrapper } from "./Slider.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import Image from "next/legacy/image";

const SliderCoupon = () => {
	return (
		<SwiperWrapper>
			<Swiper
				modules={[Autoplay, Pagination]}
				className="mySwiper"
				direction={"horizontal"}
				autoplay={{ delay: 3500, disableOnInteraction: false }}
				speed={400}
				loop={true}
				initialSlide={1}
				slidesPerView={1}
				spaceBetween={15}
				breakpoints={{
					999: {
						slidesPerView: 2,
						direction: "vertical",
					},
				}}
			>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image
								src="/images/coupon_50.jpg"
								layout="fill"
								priority
								quality={100}
								alt="$50 coupon"
							/>
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image
								src="/images/coupon_100.jpg"
								layout="fill"
								priority
								quality={100}
								alt="$100 coupon"
							/>
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image
								src="/images/coupon_300.jpg"
								layout="fill"
								priority
								quality={100}
								alt="$300 coupon"
							/>
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image
								src="/images/coupon_700.jpg"
								layout="fill"
								priority
								quality={100}
								alt="$700 coupon"
							/>
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image
								src="/images/coupon_vip.jpg"
								layout="fill"
								priority
								quality={100}
								alt="$VIP coupon"
							/>
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
			</Swiper>
		</SwiperWrapper>
	);
};

export default SliderCoupon;
