import { useTranslation } from "next-i18next";

import { useState, useEffect } from "react";

import StyledPrices, {
	Content,
	Suptitle,
	Title,
	Table,
} from "./Prices.styled.js.js";
import { Container } from "../Common/Common.styled.js";

import Slider from "./UI/Slider.js";

const Prices = () => {
	const { t } = useTranslation("prices");

	const [isLoaded, setIsLoaded] = useState(null);

	useEffect(() => {
		setIsLoaded(true);
	}, []);
	return (
		<StyledPrices>
			<Container>
				<Content>
					<Suptitle>{t("suptitle")}</Suptitle>
					<Title>{t("title")}</Title>

					{/* <Table>
						<thead>
							<tr>
								{t("table_header", { returnObjects: true }).map(
									(item, index) => (
										<td key={index}>{item}</td>
									)
								)}
							</tr>
						</thead>
						<tbody>
							<tr>
								{t("row_1", { returnObjects: true }).map((item, index) => (
									<td key={index}>{item}</td>
								))}
							</tr>
							<tr>
								{t("row_2", { returnObjects: true }).map((item, index) => (
									<td key={index}>{item}</td>
								))}
							</tr>
							<tr>
								{t("row_3", { returnObjects: true }).map((item, index) => (
									<td key={index}>{item}</td>
								))}
							</tr>
							<tr>
								{t("row_4", { returnObjects: true }).map((item, index) => (
									<td key={index}>{item}</td>
								))}
							</tr>
						</tbody>
					</Table> */}

					{isLoaded && <Slider />}
				</Content>
			</Container>
		</StyledPrices>
	);
};

export default Prices;
