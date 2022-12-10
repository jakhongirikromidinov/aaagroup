import SwiperWrapper, {
	InfoItem,
	ItemSuptitle,
	ItemTitle,
	DayTitle,
} from "./SliderBukhara.styled";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { useTranslation } from "next-i18next";

import parse from "html-react-parser";

const SliderBukhara = () => {
	const { t: translate } = useTranslation();

	const bukhara_day_1 = translate("slider:bukhara.day_1_schedule");
	const bukhara_day_2 = translate("slider:bukhara.day_2_schedule");
	const bukhara_day_3 = translate("slider:bukhara.day_3_schedule");
	return (
		<SwiperWrapper>
			<Swiper
				slidesPerView={1}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
			>
				<SwiperSlide>
					<InfoItem>
						<ItemSuptitle>
							{translate("slider:bukhara.bukhara_suptitle")}
						</ItemSuptitle>
						<ItemTitle>{translate("slider:bukhara.bukhara_title")}</ItemTitle>
						<DayTitle>{translate("slider:bukhara.day_1_title")}</DayTitle>
						<ol>{parse(bukhara_day_1)}</ol>
					</InfoItem>
				</SwiperSlide>
				<SwiperSlide>
					<InfoItem>
						<DayTitle>{translate("slider:bukhara.day_2_title")}</DayTitle>
						<ol>{parse(bukhara_day_2)}</ol>
					</InfoItem>
				</SwiperSlide>
				<SwiperSlide>
					<InfoItem>
                    <DayTitle>{translate("slider:bukhara.day_3_title")}</DayTitle>
						<ol>{parse(bukhara_day_3)}</ol>
					</InfoItem>
				</SwiperSlide>
			</Swiper>
		</SwiperWrapper>
	);
};

export default SliderBukhara;
