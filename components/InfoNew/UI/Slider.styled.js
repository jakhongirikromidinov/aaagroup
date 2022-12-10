import styled from "styled-components";

export const SwiperWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 699px) {
		display: none;
	}
	.swiper {
		width: 100%;
		height: 800px;
		user-select: none;
		&-wrapper {
			margin-left: 400px;
			@media screen and (max-width: 840px) {
				right: 20px;
			}
			@media screen and (max-width: 1230px) {
				margin-left: 250px;
			}
			@media screen and (max-width: 910px) {
				margin-left: 210px;
			}
			@media screen and (max-width: 790px) {
				margin-left: 170px;
			}
			.swiper-slide {
				transition: 0.7s cubic-bezier(0.76, 0.01, 0.16, 1);
				&-active {
					.image_wrapper {
						transform: translate(-286px, -130px);
						width: 350px;
						height: 473px;
						border: 8px solid white;
						border-radius: 116px;
						@media screen and (max-width: 1240px) {
							transform: translate(-236px, -115px);
							width: 315px;
							height: 425.7px;
						}
						@media screen and (max-width: 1140px) {
							transform: translate(-192px, -82px);
							width: 283.5px;
							height: 383.2px;
						}
						@media screen and (max-width: 940px) {
							transform: translate(-142px, -90px);
						}
						@media screen and (max-width: 840px) {
							transform: translate(-105px, -63px);
							width: 255.15px;
							height: 344px;
						}
					}
				}
			}
		}
		@media screen and (max-width: 840px) {
			&-wrapper {
				right: 20px;
			}
		}
	}
`;

export const SliderItem = styled.div`
	font-size: 1.6rem;
	width: 100%;
	padding: 0 5rem;
	position: relative;
	ol {
		margin-left: 6rem;
		font-size: 1.8rem;
		li {
			margin-bottom: 0.8rem;
		}
		span {
			font-weight: 700;
		}
	}
	ul {
		li {
			font-weight: 700;
		}
	}
	@media screen and (max-width: 1040px) {
		padding: 0rem;
	}
`;
export const Suptitle = styled.label`
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 0.65rem;
	margin-left: 6rem;
`;

export const Title = styled.h3`
	font-size: 3.2rem;
	font-weight: 500;
	margin-bottom: 1.2rem;
	text-align: center;
`;

export const DayTitle = styled.p`
	text-align: center;
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
`;

export const ImageWrapper = styled.div`
	transition: 0.7s cubic-bezier(0.76, 0.01, 0.16, 1);
	overflow: hidden;
	position: relative;
	width: 180px;
	height: 231px;
	border-radius: 66px;
`;
