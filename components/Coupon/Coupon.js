import StyledCoupon, { Content, Title, SliderWrapper } from "./Coupon.styled";
import { Container } from "../Common/Common.styled";
import { useTranslation } from "next-i18next";
import Slider from "./UI/Slider";
import { useEffect, useState } from "react";

const Coupon = () => {
	const [isLoaded, setIsLoaded] = useState(null);
	const { t } = useTranslation("coupon");

	useEffect(() => {
		setIsLoaded(true);
	}, []);
	return (
		<StyledCoupon>
			<Container>
				<Content>
					<Title>{t("title")}</Title>
					{isLoaded && <Slider />}
				</Content>
			</Container>
		</StyledCoupon>
	);
};

export default Coupon;
