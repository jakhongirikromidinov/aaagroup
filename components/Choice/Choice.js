import StyledChoice, {
	Content,
	Left,
	Right,
	SupTitle,
	Title,
	SectionHeader,
} from "./Choice.styled";
import SliderCoupon from "./UI/SliderCoupon/Slider";
import SliderPrices from "./UI/SliderPrices/SliderPrices";
import { Container } from "../Common/Common.styled";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const Choice = () => {
	const [isLoaded, setIsLoaded] = useState(null);
	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const { t: translate } = useTranslation("choice");
	return (
		<StyledChoice>
			<Container>
				<SectionHeader>
					<SupTitle>{translate("label")}</SupTitle>
					<Title>{translate("title")}</Title>
				</SectionHeader>
				<Content>
					<Left>{isLoaded && <SliderCoupon />}</Left>
					<Right>{isLoaded && <SliderPrices />}</Right>
				</Content>
			</Container>
		</StyledChoice>
	);
};

export default Choice;
