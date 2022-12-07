import { Layout } from "../components/Common/Common";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
import Experience from "../components/Experience/Experience";
import About from "../components/About/About";
import Info from "../components/Info/Info";
import Opportunities from "../components/Opportunities/Opportunities";
import Prices from "../components/Prices/Prices";
import Coupon from "../components/Coupon/Coupon";

export default function Home() {
	return (
		<>
			<Banner />
			<Services />
			<Experience />
			<About />
			<Info />
			<Opportunities />
			<Prices />
			<Coupon />
		</>
	);
}
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"banner",
				"services",
				"experience",
				"about",
				"info",
				"slider",
				"opportunities",
				"prices",
				"footer",
				"coupon",
			])),
		},
	};
}
