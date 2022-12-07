import { useTranslation } from "next-i18next";

import Slider from "./UI/Slider";
import SliderMobile from "./UI/SliderMobile";

import { Container } from "../Common/Common.styled";
import StyledInfo, { Content, Title } from "./Info.styled";

const Info = () => {
	const { t } = useTranslation("info");
	return (
		<StyledInfo>
			<Container>
				<Content>
					<Title>{t("title")}</Title>
				</Content>
			</Container>
			<Slider />
			<SliderMobile />
		</StyledInfo>
	);
};

export default Info;
