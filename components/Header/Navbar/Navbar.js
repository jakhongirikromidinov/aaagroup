import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { useTranslation } from "next-i18next";
import { Container } from "../../Common/Common.styled";

import StyledNavbar, {
	Content,
	NavbarLogo,
	NavbarList,
	NavbarPhone,
	NavbarLang,
	NavbarBurger,
} from "./Navbar.styled";

import { NavbarPhoneLogo } from "./Navbar.styled";

import Sidebar from "./UI/Sidebar";

import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
	const { t } = useTranslation();

	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		isOpen === true
			? document.body.classList.add("hidden")
			: document.body.classList.remove("hidden");
	}, [isOpen]);

	return (
		<StyledNavbar>
			<Container>
				<Content>
					<NavbarLogo>
						<Link href="/">
							<Image
								alt="Logo img"
								src="/images/navbar_logo.png"
								layout="fill"
								priority
								quality={100}
							/>
						</Link>
					</NavbarLogo>
					<NavbarList>
						{t("common:navbarList", { returnObjects: true }).map(
							(item, index) => (
								<li
									key={index}
									className={router.pathname === item.link ? "bold" : ""}
								>
									<Link href={item.link}>{item.title}</Link>
								</li>
							)
						)}
					</NavbarList>
					<NavbarPhone href="tel:+998901765511">
						<NavbarPhoneLogo />
						+998 90 176-55-11
					</NavbarPhone>

					<NavbarLang>
						<li className={router.locale === "uz" ? "bold" : ""}>
							<Link href={router.pathname} locale={router.locales[0]}>
								UZ
							</Link>
						</li>
						<li className={router.locale === "ru" ? "bold" : ""}>
							<Link href={router.pathname} locale={router.locales[1]}>
								RU
							</Link>
						</li>
						<li className={router.locale === "en" ? "bold" : ""}>
							<Link href={router.pathname} locale={router.locales[2]}>
								ENG
							</Link>
						</li>
					</NavbarLang>

					<NavbarBurger>
						<Hamburger toggle={setIsOpen} toggled={isOpen} color="black" />
					</NavbarBurger>

					<Sidebar isOpen={isOpen} toggle={toggle} />
				</Content>
			</Container>
		</StyledNavbar>
	);
};

export default Navbar;
