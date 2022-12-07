import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import StyledSidebar, {
	SidebarList,
	SidebarPhone,
	SidebarLang,
} from "./Sidebar.styled";

import { NavbarPhone, NavbarPhoneLogo } from "../Navbar.styled";

const Sidebar = ({ isOpen, toggle }) => {
	const router = useRouter();
	const { t: translate } = useTranslation();
	return (
		<StyledSidebar isOpen={isOpen} toggle={toggle}>
			<SidebarList>
				{translate("common:navbarList", { returnObjects: true }).map(
					(item, index) => (
						<li
							key={index}
							onClick={toggle}
							className={item.link === router.pathname ? "bold" : ""}
						>
							<Link href={item.link}>{item.title}</Link>
						</li>
					)
				)}
				<li>
					<SidebarPhone href="tel:+998901765511" onClick={toggle}>
						<NavbarPhoneLogo sidebar />
						+998 90 176-55-11
					</SidebarPhone>
				</li>
				<li>
					<SidebarLang>
						<li
							className={router.locale === "uz" ? "bold" : ""}
							onClick={toggle}
						>
							<Link href={router.pathname} locale={router.locales[0]}>
								UZ
							</Link>
						</li>
						<li
							className={router.locale === "ru" ? "bold" : ""}
							onClick={toggle}
						>
							<Link href={router.pathname} locale={router.locales[1]}>
								RU
							</Link>
						</li>
						<li
							className={router.locale === "en" ? "bold" : ""}
							onClick={toggle}
						>
							<Link href={router.pathname} locale={router.locales[2]}>
								ENG
							</Link>
						</li>
					</SidebarLang>
				</li>
			</SidebarList>
		</StyledSidebar>
	);
};

export default Sidebar;
