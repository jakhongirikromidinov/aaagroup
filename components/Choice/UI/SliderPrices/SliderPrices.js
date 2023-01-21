import {
	SwiperWrapper,
	SwiperSlideItem,
	ImageWrapper,
	VehicleInfo,
	Wrapper,
} from "./SliderPrices.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import { useTranslation } from "next-i18next";
import { Autoplay } from "swiper";
import Image from "next/legacy/image";
import { useState } from "react";

const SliderPrices = () => {
	const [info, setInfo] = useState(null);
	const { t: translate } = useTranslation();
	const carNames = ["Hyundai", "Ford", "Istana", "Buses"];
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + carNames[index] + `</span>`;
		},
	};
	return (
		<Wrapper>
			<SwiperWrapper>
				<Swiper
					modules={[Autoplay, Pagination]}
					className="mySwiper"
					loop={true}
					speed={400}
					autoplay={{ delay: 3500, disableOnInteraction: false }}
					centeredSlides={true}
					initialSlide={1}
					slidesPerView={1}
					pagination={pagination}
					onSlideChange={(swiper) => setInfo(swiper.realIndex)}
				>
					<SwiperSlide>
						<SwiperSlideItem>
							<ImageWrapper className="wrapper">
								<Image
									src="/images/hyundai_van.png"
									width={473.2}
									height={202.16}
									priority
									quality={100}
									alt="Hyundai Van"
								/>
							</ImageWrapper>
						</SwiperSlideItem>
					</SwiperSlide>
					<SwiperSlide>
						<SwiperSlideItem>
							<ImageWrapper className="wrapper">
								<Image
									src="/images/ford_van.png"
									width={452.48}
									height={225.92}
									priority
									quality={100}
									alt="Ford Van"
								/>
							</ImageWrapper>
						</SwiperSlideItem>
					</SwiperSlide>
					<SwiperSlide>
						<SwiperSlideItem>
							<ImageWrapper className="wrapper">
								<Image
									src="/images/istana_van.png"
									width={473.2}
									height={218.4}
									priority
									quality={100}
									alt="Istana Van"
								/>
							</ImageWrapper>
						</SwiperSlideItem>
					</SwiperSlide>
					<SwiperSlide>
						<SwiperSlideItem>
							<ImageWrapper className="wrapper">
								<Image
									src="/images/bus.png"
									width={744.96}
									height={222.208}
									priority
									quality={100}
									alt="Bus Van"
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
		</Wrapper>
	);
};

export default SliderPrices;
