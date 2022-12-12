import { useTranslation } from "next-i18next";

import parse from "html-react-parser";

import StyledOpportunities, {
	Content,
	MainTop,
	MainHeader,
	Suptitle,
	Title,
	Subtitle,
	MainBottom,
	CardsWrapper,
} from "./Opportunities.styled";

import Card from "./UI/Card";

import { Container } from "../Common/Common.styled";

const Opportunities = () => {
	const { t: translate } = useTranslation("opportunities");

	const parsedSubtitle = translate("subtitle");
	return (
		<StyledOpportunities>
			<Container>
				<Content>
					<MainTop>
						<MainHeader>
							<Suptitle>{translate("suptitle")}</Suptitle>
							<Title>{translate("title")}</Title>
							<Subtitle>{parse(parsedSubtitle)}</Subtitle>
						</MainHeader>
						<Card
							text={translate("card_1")}
							background="/images/opportunities_card_1.png"
						/>
					</MainTop>

					<MainBottom>
						<CardsWrapper>
							<Card
								text={translate("card_2")}
								background="/images/opportunities_card_2.png"
							/>
							<Card
								text={translate("card_3")}
								background="/images/opportunities_card_3.png"
							/>
							<Card
								text={translate("card_4")}
								background="/images/opportunities_card_4.png"
							/>
						</CardsWrapper>
					</MainBottom>
				</Content>
			</Container>
		</StyledOpportunities>
	);
};

export default Opportunities;
