import StyledOpportunities, {
	Content,
	Main,
	Title,
	OpportunitiesImage,
	OpportunitiesHatImage,
	List,
} from "./Opportunities.styled";
import { Container } from "../Common/Common.styled";
import { useTranslation } from "next-i18next";
import Image from "next/legacy/image";

const Opportunities = () => {
	const { t } = useTranslation("opportunities");
	return (
		<StyledOpportunities>
			<Container>
				<Content>
					<Main>
						<Title>{t("title")}</Title>
						<List>
							{t("opportunities", { returnObjects: true }).map(
								(item, index) => (
									<li key={index}>{item}</li>
								)
							)}
							<li>{t("subtitle")}</li>
						</List>
					</Main>
					<OpportunitiesImage>
						<Image
							src="/images/opportunities_image.png"
							width={537}
							height={533}
							quality={100}
						/>
						<OpportunitiesHatImage className="hat">
							<Image
								src="/images/opportunities_hat_image.png"
								width={200}
								height={140}
								quality={100}
							/>
						</OpportunitiesHatImage>
					</OpportunitiesImage>
				</Content>
			</Container>
		</StyledOpportunities>
	);
};

export default Opportunities;
