// import { SwiperWrapper, SwiperSlideItem, ImageWrapper } from "./Slider.styled";
import {
	SwiperWrapper,
	SwiperSlideItem,
	ImageWrapper,
	VehicleInfo,
} from "./Slider.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "next-i18next";
import { Autoplay } from "swiper";
import { Navigation } from "swiper";
import Image from "next/legacy/image";
import { useState } from "react";

const Slider = () => {
	const [info, setInfo] = useState(null);
	const { t: translate } = useTranslation();
	return (
		<SwiperWrapper>
			<Swiper
				modules={[Autoplay, Navigation]}
				className="mySwiper"
				// autoplay={{ delay: 3500, disableOnInteraction: false }}
				loop={true}
				centeredSlides={true}
				initialSlide={1}
				slidesPerView={1}
				navigation={true}
				onSlideChange={(swiper) => setInfo(swiper.realIndex)}
			>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image
								src="/images/hyundai_van.png"
								width={591.5}
								height={252.7}
								priority
							/>
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image
								src="/images/ford_van.png"
								width={565.6}
								height={282.4}
								priority
							/>
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image
								src="/images/istana_van.png"
								width={591.5}
								height={273}
								priority
							/>
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperSlideItem>
						<ImageWrapper className="wrapper">
							<Image
								src="/images/bus.png"
								width={931.2}
								height={277.76}
                                quality={100}
								priority
							/>
						</ImageWrapper>
					</SwiperSlideItem>
				</SwiperSlide>
			</Swiper>
			{info === 0 && (
				<VehicleInfo>
					<h3>{translate("prices:vehicle_slider_title")}</h3>
					<ul>
						{translate("prices:hyundai_van", { returnObjects: true }).map(
							(item, index) => (
								<li key={index}>{item}</li>
							)
						)}
					</ul>
				</VehicleInfo>
			)}
			{info === 1 && (
				<VehicleInfo>
					<h3>{translate("prices:vehicle_slider_title")}</h3>
					<ul>
						{translate("prices:ford_van", { returnObjects: true }).map(
							(item, index) => (
								<li key={index}>{item}</li>
							)
						)}
					</ul>
				</VehicleInfo>
			)}
			{info === 2 && (
				<VehicleInfo>
					<h3>{translate("prices:vehicle_slider_title")}</h3>
					<ul>
						{translate("prices:istana_van", { returnObjects: true }).map(
							(item, index) => (
								<li key={index}>{item}</li>
							)
						)}
					</ul>
				</VehicleInfo>
			)}
			{info === 3 && (
				<VehicleInfo>
					<h3>{translate("prices:vehicle_slider_title")}</h3>
					<ul>
						{translate("prices:modern_bus", { returnObjects: true }).map(
							(item, index) => (
								<li key={index}>{item}</li>
							)
						)}
					</ul>
				</VehicleInfo>
			)}
			
		</SwiperWrapper>
	);
};

export default Slider;
