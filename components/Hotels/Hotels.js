import StyledHotels, {
	Content,
	Main,
	Title,
	Text,
	Button,
	Images,
	ImagesBig,
	ImagesSmall,
	ButtonArrow,
} from "./Hotels.styled";

import { Container } from "../Common/Common.styled";

import Image from "next/legacy/image";

import { useTranslation } from "next-i18next";

import Link from "next/link";

const Hotels = () => {
	const { t: translate } = useTranslation("hotels");
	return (
		<StyledHotels>
			<Container>
				<Content>
					<Main>
						<Title>{translate("title")}</Title>
						<Text>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Similique, pariatur iure animi perferendis rem magnam eum aut
								assumenda ad libero repellat natus temporibus explicabo officiis
								consectetur aliquid sapiente atque, ipsa ex dolorem illum
								aliquam esse?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Similique, pariatur iure animi perferendis rem magnam eum aut
								assumenda ad libero repellat natus temporibus explicabo officiis
								consectetur aliquid sapiente atque, ipsa ex dolorem illum
								aliquam esse?
							</p>
						</Text>
						<Link legacyBehavior href="/hotels">
							<Button role={"button"}>
								{translate("button")} <ButtonArrow />
							</Button>
						</Link>
					</Main>

					<Images>
						<ImagesBig>
							<Image
								width={184}
								height={229}
								src="/images/hotels_image_1.png"
								quality={100}
								alt="Hotel sign image"
							/>
							<Image
								width={184}
								height={229}
								src="/images/hotels_image_3.png"
								quality={100}
								alt="Hotel pillows image"
							/>
						</ImagesBig>
						<ImagesSmall>
							<Image
								width={184}
								height={203}
								src="/images/hotels_image_2.png"
								quality={100}
								alt="Hotel reception image"
							/>

							<Image
								width={184}
								height={203}
								src="/images/hotels_image_4.png"
								quality={100}
								alt="Hotel sign image"
							/>
						</ImagesSmall>
					</Images>
				</Content>
			</Container>
		</StyledHotels>
	);
};

export default Hotels;
