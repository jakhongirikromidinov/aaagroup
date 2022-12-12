import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/Banner/Banner";

import Gallery from "../components/HotelsPage/Gallery/Gallery";

import { Layout } from "../components/Common/Common";

const Hotels = () => {
	return (
		<Layout>
			<Gallery />
		</Layout>
	);
};
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "banner", "footer"])),
		},
	};
}
export default Hotels;
