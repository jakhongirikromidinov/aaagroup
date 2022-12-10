import { useTranslation } from "next-i18next";
import Image from "next/legacy/image";

import { useRouter } from "next/router";

import { Container } from "../Common/Common.styled";

import StyledExperience, {
	Content,
	Main,
	ExperienceImage,
	SupTitle,
	Title,
	Subtitle,
	FeaturesWrapper,
	FeaturesItem,
	ImageWrapper,
	LocationLabel,
	MobileContent,
	MobileHeader,
} from "./Experience.styled";

import { LocationIcon } from "./Experience.styled";

const Experience = () => {
	const { t } = useTranslation("experience");
	const router = useRouter();
	return (
		<StyledExperience>
			<Container>
				<Content>
					<ExperienceImage>
						<ImageWrapper>
							<Image
								src="/images/experience_image.png"
								width={500}
								height={529}
								quality={100}
							/>
							<LocationLabel>
								<LocationIcon />
								{t("label_text")}
							</LocationLabel>
						</ImageWrapper>
					</ExperienceImage>
					<Main>
						<SupTitle lang={router.locale}>{t("supTitle")}</SupTitle>
						<Title>{t("title")}</Title>
						<Subtitle>{t("subTitle")}</Subtitle>
						<FeaturesWrapper>
							<FeaturesItem lang={router.locale}>
								<label>{t("feature_1_label")}</label>
								<p>{t("feature_1_descr")}</p>
							</FeaturesItem>
							<FeaturesItem lang={router.locale}>
								<label>{t("feature_2_label")}</label>
								<p>{t("feature_2_descr")}</p>
							</FeaturesItem>
							<FeaturesItem lang={router.locale}>
								<label>{t("feature_3_label")}</label>
								<p>{t("feature_3_descr")}</p>
							</FeaturesItem>
						</FeaturesWrapper>
					</Main>
				</Content>

				<MobileContent>
					<MobileHeader>
						<SupTitle lang={router.locale}>{t("supTitle")}</SupTitle>
						<Title>{t("title")}</Title>
					</MobileHeader>

					<ExperienceImage>
						<ImageWrapper>
							<Image
								src="/images/experience_image.png"
								width={500}
								height={529}
								quality={100}
							/>
							<LocationLabel>
								<LocationIcon />
								{t("label_text")}
							</LocationLabel>
						</ImageWrapper>
					</ExperienceImage>

					<FeaturesWrapper>
						<FeaturesItem lang={router.locale}>
							<label>{t("feature_1_label")}</label>
							<p>{t("feature_1_descr")}</p>
						</FeaturesItem>
						<FeaturesItem lang={router.locale}>
							<label>{t("feature_2_label")}</label>
							<p>{t("feature_2_descr")}</p>
						</FeaturesItem>
						<FeaturesItem lang={router.locale}>
							<label>{t("feature_3_label")}</label>
							<p>{t("feature_3_descr")}</p>
						</FeaturesItem>
					</FeaturesWrapper>
				</MobileContent>
			</Container>
		</StyledExperience>
	);
};

export default Experience;
