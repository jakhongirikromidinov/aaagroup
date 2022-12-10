import { useTranslation } from "next-i18next";
import Image from "next/image";

import StyledServices, {
	Content,
	SectionHeader,
	SupTitle,
	Title,
	Cards,
	CardItem,
	ImageWrapper,
	MobileContent,
} from "./Services.styled";
import { Container } from "../Common/Common.styled";

const Services = () => {
	const { t } = useTranslation("services");
	return (
		<StyledServices>
			<Container>
				<Content>
					<SectionHeader>
						<SupTitle>{t("supTitle")}</SupTitle>
						<Title>{t("title")}</Title>
					</SectionHeader>

					<Cards>
						<CardItem>
							<ImageWrapper>
								<Image
									src="/images/services_icon_1.png"
									fill
									alt="icon"
									quality={100}
								/>
							</ImageWrapper>

							<h3>{t("card_1_title")}</h3>
							<p>{t("card_1_descr")}</p>
							<div />
						</CardItem>
						<CardItem>
							<ImageWrapper>
								<Image
									src="/images/services_icon_2.png"
									fill
									alt="icon"
									quality={100}
								/>
							</ImageWrapper>
							<h3>{t("card_2_title")}</h3>
							<p>{t("card_2_descr")}</p>
						</CardItem>
						<CardItem>
							<ImageWrapper>
								<Image
									src="/images/services_icon_3.png"
									fill
									alt="icon"
									quality={100}
								/>
							</ImageWrapper>
							<h3>{t("card_3_title")}</h3>
							<p>{t("card_3_descr")}</p>
						</CardItem>
					</Cards>
				</Content>
			</Container>
		</StyledServices>
	);
};

export default Services;
