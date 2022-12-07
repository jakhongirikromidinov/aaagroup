import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import Image from "next/legacy/image";

import {
	LocationIcon,
	CalendarIcon,
	GuestIcon,
	ChevronIcon,
	SearchIcon,
} from "./Banner.styled";

import StyledBanner, {
	Content,
	Main,
	Images,
	SupTitle,
	Title,
	Subtitle,
	SearchBar,
	SearchBarItem,
	SearchBarItemInner,
	CitySelector,
	SearchIconWrapper,
	ImageWrapper,
	DotsPosition,
} from "./Banner.styled";
import { MakeDots } from "../Common/Common";

import { Container } from "../Common/Common.styled";

const Banner = () => {
	const { t } = useTranslation("banner");
	const router = useRouter();
	return (
		<StyledBanner>
			<Container>
				<Content>
					<Main>
						<SupTitle>{t("supTitle")}</SupTitle>
						<Title>{t("title")}</Title>
						<Subtitle>{t("subtitle")}</Subtitle>

						<SearchBar>
							<SearchBarItem>
								<LocationIcon />
								<SearchBarItemInner>
									<label>{t("LocationLabel")}</label>
									<CitySelector lang={router.locale}>
										{t("LocationAddress")}
										<ChevronIcon />
									</CitySelector>
								</SearchBarItemInner>
							</SearchBarItem>

							<SearchBarItem>
								<CalendarIcon />
								<SearchBarItemInner>
									<label>{t("DateLabel")}</label>
									<div>
										<input type="date" />
									</div>
								</SearchBarItemInner>
							</SearchBarItem>

							<SearchBarItem>
								<GuestIcon />
								<SearchBarItemInner>
									<label>{t("GuestLabel")}</label>
								</SearchBarItemInner>
								<SearchIconWrapper>
									<SearchIcon />
								</SearchIconWrapper>
							</SearchBarItem>
						</SearchBar>
					</Main>

					<Images>
						<ImageWrapper>
							<DotsPosition position="top">
								<MakeDots amount={42} size={"small"} />
							</DotsPosition>
							<Image
								alt="tashkent"
								src="/images/banner_image_1.png"
								width="180"
								height="320"
								quality={100}
								priority
							/>
						</ImageWrapper>
						<ImageWrapper>
							<Image
								alt="samarkand"
								src="/images/banner_image_2.png"
								width="180"
								height="320"
								quality={100}
								priority
							/>
						</ImageWrapper>
						<ImageWrapper>
							<DotsPosition position="bottom">
								<MakeDots amount={42} size={"small"} />
							</DotsPosition>
							<Image
								alt="bukhara"
								src="/images/banner_image_3.png"
								width="180"
								height="320"
								quality={100}
								priority
							/>
						</ImageWrapper>
					</Images>
				</Content>
			</Container>
		</StyledBanner>
	);
};

export default Banner;
