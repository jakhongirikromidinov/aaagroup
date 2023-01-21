import Image from "next/legacy/image";
import { useState } from "react";
import { Container } from "../../Common/Common.styled";
import parse from "html-react-parser";
import { useTranslation } from "next-i18next";

import StyledMobileSlider, {
	Content,
	TabsContainer,
	TabsBlock,
	TabsButton,
	ContentContainer,
	ContentBlock,
	ImageWrapper,
	Images,
	InnerContentWrapper,
	Suptitle,
	Title,
	DayTitle,
} from "./SliderMobile.styled";
const SliderMobile = ({}) => {
	const { t } = useTranslation("");
	const parsedSamarkand = t("slider:samarkand");
	const parsedTashkent = t("slider:tashkent");
	const bukhara_day_1 = t("slider:bukhara.day_1_schedule");
	const bukhara_day_2 = t("slider:bukhara.day_2_schedule");
	const bukhara_day_3 = t("slider:bukhara.day_3_schedule");

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<StyledMobileSlider>
			<Container>
				<Content>
					<TabsContainer>
						<TabsBlock>
							<TabsButton
								className={toggleState === 1 ? "tab_active" : ""}
								onClick={() => toggleTab(1)}
							>
								{t("slider:samarkand_title")}
							</TabsButton>
							<TabsButton
								className={toggleState === 2 ? "tab_active" : ""}
								onClick={() => toggleTab(2)}
							>
								{t("slider:tashkent_title")}
							</TabsButton>
							<TabsButton
								className={toggleState === 3 ? "tab_active" : ""}
								onClick={() => toggleTab(3)}
							>
								{t("slider:bukhara.bukhara_title")}
							</TabsButton>
						</TabsBlock>

						<ContentContainer>
							<ContentBlock className={toggleState === 1 ? "active" : ""}>
								<Suptitle>{t("slider:samarkand_suptitle")}</Suptitle>
								<Title>{t("slider:samarkand_title")}</Title>
								<InnerContentWrapper>
									<Images>
										<ImageWrapper className="image_wrapper">
											<Image
												src="/images/slider_mobile_samarkand_1.jpg"
												layout="fill"
												quality={100}
												alt="Shakhi Zinda complex"
											/>
										</ImageWrapper>
										<ImageWrapper className="image_wrapper">
											<Image
												src="/images/slider_mobile_samarkand_2.jpg"
												layout="fill"
												quality={100}
												alt="Shakhi Zinda complex"
											/>
										</ImageWrapper>
									</Images>

									<ol>{parse(parsedSamarkand)}</ol>
								</InnerContentWrapper>
							</ContentBlock>
							<ContentBlock className={toggleState === 2 ? "active" : ""}>
								<Suptitle>{t("slider:tashkent_suptitle")}</Suptitle>
								<Title>{t("slider:tashkent_title")}</Title>
								<InnerContentWrapper className="reverse">
									<Images>
										<ImageWrapper className="image_wrapper">
											<Image
												src="/images/tours_mobile_sukak.jpg"
												layout="fill"
												quality={100}
												alt="Sukak hills"
											/>
										</ImageWrapper>
										<ImageWrapper className="image_wrapper">
											<Image
												src="/images/tours_mobile_kumushkan.jpg"
												layout="fill"
												quality={100}
												alt="Kumushkan image"
											/>
										</ImageWrapper>
									</Images>

									<ol>{parse(parsedTashkent)}</ol>
								</InnerContentWrapper>
							</ContentBlock>
							<ContentBlock className={toggleState === 3 ? "active" : ""}>
								<Suptitle>{t("slider:bukhara.bukhara_suptitle")}</Suptitle>
								<Title>{t("slider:bukhara.bukhara_title")}</Title>
								<DayTitle>{t("slider:bukhara.day_1_title")}</DayTitle>
								<InnerContentWrapper>
									<Images className="bukhara_images">
										<ImageWrapper className="image_wrapper">
											<Image
												src="/images/tours_mobile_registan.jpg"
												layout="fill"
												quality={100}
												alt="Registan complex"
											/>
										</ImageWrapper>
										<ImageWrapper className="image_wrapper">
											<Image
												src="/images/tours_mobile_observatory.jpg"
												layout="fill"
												quality={100}
												alt="Ulugbek observatory"
											/>
										</ImageWrapper>
									</Images>

									<ol>{parse(bukhara_day_1)}</ol>
								</InnerContentWrapper>
								<DayTitle>{t("slider:bukhara.day_2_title")}</DayTitle>
								<InnerContentWrapper className="reverse">
									<Images>
										<ImageWrapper className="image_wrapper">
											<Image
												src="/images/tours_mobile_bukhara_ark.jpg"
												layout="fill"
												quality={100}
												alt="Bukhara Ark"
											/>
										</ImageWrapper>
										<ImageWrapper className="image_wrapper">
											<Image
												src="/images/tours_mobile_lyabi_khaus.jpg"
												layout="fill"
												quality={100}
												alt="Lyabi Khaus complex"
											/>
										</ImageWrapper>
									</Images>
									<ol>{parse(bukhara_day_2)}</ol>
								</InnerContentWrapper>
								<DayTitle>{t("slider:bukhara.day_3_title")}</DayTitle>
								<InnerContentWrapper>
									<Images>
										<ImageWrapper className="image_wrapper">
											<Image
												src="/images/tours_mobile_sitorai.jpg"
												layout="fill"
												quality={100}
												alt="Sitorai Mokhi Khosa residence"
											/>
										</ImageWrapper>
									</Images>

									<ol>{parse(bukhara_day_3)}</ol>
								</InnerContentWrapper>
							</ContentBlock>
						</ContentContainer>
					</TabsContainer>
				</Content>
			</Container>
		</StyledMobileSlider>
	);
};

export default SliderMobile;
