import parse from "html-react-parser";

import { useTranslation } from "next-i18next";

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

export default function Slider() {
	const { t } = useTranslation("slider");
	const parsedSamarkand = t("samarkand");
	const parsedTashkent = t("tashkent");
	const bukhara_day_1 = t("bukhara.day_1_schedule");
	const bukhara_day_2 = t("bukhara.day_2_schedule");
	const bukhara_day_3 = t("bukhara.day_3_schedule");

	return (
		<SwiperWrapper>
			<Swiper
				className="mySwiper swiper-v"
				spaceBetween={0}
				direction={"vertical"}
				slidesPerView={3}
				initialSlide={1}
				centeredSlides={true}
				slideToClickedSlide={true}
				rewind={true}
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
					<Swiper
						className="mySwiper2 swiper-h"
						direction={"horizontal"}
						centeredSlides={true}
						spaceBetween={50}
						slidesPerView={1}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
					>
						<SwiperSlide>
							<SliderItem>
								<Suptitle>{t("samarkand_suptitle")}</Suptitle>
								<Title>{t("samarkand_title")}</Title>
								<ol>{parse(parsedSamarkand)}</ol>
							</SliderItem>
						</SwiperSlide>
					</Swiper>
				</SwiperSlide>
				<SwiperSlide>
					<ImageWrapper className="image_wrapper">
						<Image
							src="/images/slider_city_2.png"
							layout="fill"
							quality={100}
						/>
					</ImageWrapper>
					<Swiper
						className="mySwiper2 swiper-h"
						direction={"horizontal"}
						spaceBetween={50}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
					>
						<SwiperSlide>
							<SliderItem>
								<Suptitle>{t("tashkent_suptitle")}</Suptitle>
								<Title>{t("tashkent_title")}</Title>
								<ol>{parse(parsedTashkent)}</ol>
							</SliderItem>
						</SwiperSlide>
					</Swiper>
				</SwiperSlide>
				<SwiperSlide>
					<ImageWrapper className="image_wrapper">
						<Image
							src="/images/slider_city_3.png"
							layout="fill"
							quality={100}
						/>
					</ImageWrapper>

					<Swiper
						className="mySwiper2 swiper-h"
						direction={"horizontal"}
						spaceBetween={50}
						slidesPerView={1}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
					>
						<SwiperSlide>
							<SliderItem>
								<Suptitle>{t("bukhara.bukhara_suptitle")}</Suptitle>
								<Title>{t("bukhara.bukhara_title")}</Title>
								<DayTitle>{t("bukhara.day_1_title")}</DayTitle>
								<ol>{parse(bukhara_day_1)}</ol>
							</SliderItem>
						</SwiperSlide>
						<SwiperSlide>
							<SliderItem>
								<DayTitle>{t("bukhara.day_2_title")}</DayTitle>
								<ol>{parse(bukhara_day_2)}</ol>
							</SliderItem>
						</SwiperSlide>

						<SwiperSlide>
							<SliderItem>
								<DayTitle>{t("bukhara.day_3_title")}</DayTitle>
								<ol>{parse(bukhara_day_3)}</ol>
							</SliderItem>
						</SwiperSlide>
					</Swiper>
				</SwiperSlide>
			</Swiper>
		</SwiperWrapper>
	);
}
