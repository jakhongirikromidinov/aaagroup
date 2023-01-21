import StyledFooter, {
	Content,
	Main,
	MainDescr,
	Links,
	Contacts,
	ContactsTitle,
	ContactsPhone,
	ContactsSocialWrapper,
	FooterImage,
	CopyRight,
} from "./Footer.styled";

import { FbLogo, InstaLogo, YtLogo } from "./Footer.styled";

import { Container } from "../Common/Common.styled";

import Image from "next/legacy/image";

import Link from "next/link";

import { useTranslation } from "next-i18next";

const Footer = ({ footer }) => {
	const { t } = useTranslation();
	return (
		<StyledFooter footer={footer}>
			<Container>
				<Content>
					<Main>
						<Link href="/">
							<Image
								src="/images/footer_logo.png"
								width={242}
								height={54}
								alt="logo img"
								quality={100}
							/>
						</Link>
						<MainDescr>{t("footer:main_descr")}</MainDescr>
					</Main>

					<Links>
						{t("common:navbarList", { returnObjects: true }).map(
							(item, index) => (
								<li key={index}>
									<Link href={item.link}>{item.title}</Link>
								</li>
							)
						)}
					</Links>

					<Contacts>
						<ContactsTitle>{t("footer:contact")}</ContactsTitle>

						<ContactsPhone href="tel:+998901765511">
							+998 90 176-55-11
						</ContactsPhone>

						<ContactsSocialWrapper>
							<a href="https://www.facebook.com/">
								<FbLogo />
							</a>
							<a href="https://www.instagram.com/">
								<InstaLogo />
							</a>
							<a href="https://www.youtube.com/">
								<YtLogo />
							</a>
						</ContactsSocialWrapper>
					</Contacts>

					<FooterImage>
						<Image
							src="/images/footer_plane_image.png"
							width={207}
							height={141}
							quality={100}
							alt="Plane image"
						/>
					</FooterImage>

					<CopyRight>© 2022 WebPark.</CopyRight>
				</Content>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
