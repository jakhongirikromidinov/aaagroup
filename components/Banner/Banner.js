import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import Image from "next/legacy/image";
import parse from "html-react-parser";

import StyledBanner, {
	Content,
	Main,
	Images,
	SupTitle,
	Title,
	Subtitle,
	Form,
	FormLabel,
	FormInput,
	FormSubmitInput,
	ImageWrapper,
	DotsPosition,
} from "./Banner.styled";
import { MakeDots } from "../Common/Common";

import { Container } from "../Common/Common.styled";

const Banner = () => {
	const { t } = useTranslation("banner");
	const router = useRouter();

	const parsedTitle = t("title");
	return (
		<StyledBanner>
			<Container>
				<Content>
					<Main>
						<SupTitle>{t("supTitle")}</SupTitle>
						<Title>{parse(parsedTitle)}</Title>
						<Subtitle>{t("subtitle")}</Subtitle>
					</Main>

					<Images>
						<ImageWrapper>
							<DotsPosition position="top">
								<MakeDots amount={42} size={"small"} />
							</DotsPosition>
							<Image
								alt="tashkent"
								src="/images/banner_image_1.png"
								width="180"
								height="320"
								quality={100}
								priority
							/>
						</ImageWrapper>
						<ImageWrapper>
							<Image
								alt="samarkand"
								src="/images/banner_image_2.png"
								width="180"
								height="320"
								quality={100}
								priority
							/>
						</ImageWrapper>
						<ImageWrapper>
							<DotsPosition position="bottom">
								<MakeDots amount={42} size={"small"} />
							</DotsPosition>
							<Image
								alt="bukhara"
								src="/images/banner_image_3.png"
								width="180"
								height="320"
								quality={100}
								priority
							/>
						</ImageWrapper>
					</Images>
				</Content>
			</Container>
		</StyledBanner>
	);
};

export default Banner;
