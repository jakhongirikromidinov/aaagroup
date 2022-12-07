import styled from "styled-components";

export const SwiperWrapper = styled.div`
	@media screen and (max-width: 699px) {
		display: none;
	}
	.swiper-v {
		height: 85vh;
		margin-right: 0;
		margin-left: 0;
		.swiper-wrapper {
			position: absolute;
			top: 0;
			right: 0;
			width: 20%;
			@media screen and (max-width: 840px) {
				right: 20px;
			}
			.swiper-slide {
				.swiper-h {
					display: none;
				}
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
							transform: translate(-142px, -64px);
						}
						@media screen and (max-width: 840px) {
							transform: translate(-105px, -63px);
							width: 255.15px;
							height: 344px;
						}
					}
					.swiper-h {
						display: block;
					}
				}
			}
		}
	}
	.swiper-h {
		width: 250%;
		position: absolute;
		top: -140px;
		left: -1151px;
		.swiper-wrapper {
			position: unset;
			top: unset;
			right: unset;
			width: unset;
			.swiper-slide {
				overflow: visible !important;
				&-active {
					width: 300px;
					transform: translate(0px, 0px);
				}
			}
		}
		@media screen and (min-width: 1570px) {
			left: -1251px;
		}
		@media screen and (min-width: 1670px) {
			left: -1351px;
		}
		@media screen and (max-width: 1340px) {
			left: -1051px;
		}
		@media screen and (max-width: 1240px) {
			left: -951px;
		}
		@media screen and (max-width: 1140px) {
			left: -901px;
			top: -155px;
		}
		@media screen and (max-width: 1040px) {
			left: -801px;
		}
		@media screen and (max-width: 940px) {
			left: -751px;
		}
		@media screen and (max-width: 840px) {
			left: -651px;
		}
	}
`;

export const SlideCircle = styled.div``;
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
