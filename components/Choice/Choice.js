import StyledChoice, {
	Content,
	Left,
	Right,
	SupTitle,
	Title,
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
				<Content>
					<SupTitle>{translate("label")}</SupTitle>
					<Title>{translate("title")}</Title>
					<Left>{isLoaded && <SliderCoupon />}</Left>
					<Right>{isLoaded && <SliderPrices />}</Right>
				</Content>
			</Container>
		</StyledChoice>
	);
};

export default Choice;
