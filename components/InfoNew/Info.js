import { useTranslation } from "next-i18next";

import Slider from "./UI/Slider";
import SliderMobile from "./UI/SliderMobile";

import { Container } from "../Common/Common.styled";
import StyledInfo, {
	Content,
	Title,
	Left,
	Right,
	InfoItem,
	ItemSuptitle,
	ItemTitle,
	SupTitle,
} from "./Info.styled";

import SliderBukhara from "./UI/SliderBukhara/SliderBukhara";

import { useState } from "react";
import parse from "html-react-parser";

const InfoNew = () => {
	const { t } = useTranslation();
	const parsedSamarkand = t("slider:samarkand");
	const parsedTashkent = t("slider:tashkent");
	const bukhara_day_1 = t("slider:bukhara.day_1_schedule");
	const bukhara_day_2 = t("slider:bukhara.day_2_schedule");
	const bukhara_day_3 = t("slider:bukhara.day_3_schedule");

	const [data, setData] = useState(null);

	const getData = (data) => {
		setData(data);
	};
	return (
		<StyledInfo>
			<Container>
				<Content>
					<SupTitle>
					{t("info:label")}
					</SupTitle>
					<Title>{t("info:title")}</Title>
					<Left>
						{data === 0 && (
							<InfoItem>
								<ItemSuptitle>{t("slider:samarkand_suptitle")}</ItemSuptitle>
								<ItemTitle>{t("slider:samarkand_title")}</ItemTitle>
								<ol>{parse(parsedSamarkand)}</ol>
							</InfoItem>
						)}
						{data === 1 && (
							<InfoItem>
								<ItemSuptitle>{t("slider:tashkent_suptitle")}</ItemSuptitle>
								<ItemTitle>{t("slider:tashkent_title")}</ItemTitle>
								<ol>{parse(parsedTashkent)}</ol>
							</InfoItem>
						)}
						{data === 2 && <SliderBukhara />}
					</Left>
					<Right>
						<Slider getData={getData} />
					</Right>
				</Content>
			</Container>

			<SliderMobile />
		</StyledInfo>
	);
};

export default InfoNew;
