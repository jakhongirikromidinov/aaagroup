import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/Banner/Banner";

const Coupons = () => {
	return (
		<>
			<Banner />
		</>
	);
};
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "banner", "footer"])),
		},
	};
}
export default Coupons;
