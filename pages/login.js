import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/Banner/Banner";
import { Layout } from "../components/Common/Common";
import Login from "../components/LoginPage/Login/Login";

const Coupons = () => {
	return (
		<Layout>
			<Login />
		</Layout>
	);
};
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
				"choice",
				"login",
				"regForm",
			])),
		},
	};
}
export default Coupons;
