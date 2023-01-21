import Image from "next/legacy/image";

import { useTranslation } from "next-i18next";

import StyledAbout, {
	Content,
	AboutImage,
	Main,
	Suptitle,
	Title,
	Text,
} from "./About.styled";

import { Container } from "../Common/Common.styled";

const About = () => {
	const { t } = useTranslation("about");
	return (
		<StyledAbout>
			<Container>
				<Content>
					<Main>
						<Suptitle>{t("suptitle")}</Suptitle>
						<Title>{t("title")}</Title>
						<Text>{t("main_text_p_1")}</Text>
						<Text>{t("main_text_p_2")}</Text>
					</Main>
					<AboutImage>
						<Image
							src="/images/about_image.png"
							width={500}
							height={548}
							quality={100}
							alt="A pretty family"
						/>
					</AboutImage>
				</Content>
			</Container>
		</StyledAbout>
	);
};

export default About;
