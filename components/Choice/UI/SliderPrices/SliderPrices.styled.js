import styled from "styled-components";

export const SwiperWrapper = styled.div`
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	user-select: none;
	.swiper {
		width: 100%;
		height: 100%;
		&-pagination {
			display: flex;
			justify-content: space-between;
			gap: 1rem;
			left: 50%;
			transform: translateX(-50%);
			bottom: 20px;
			top: unset;
			width: unset;
			&-bullet {
				padding: 1.1em 3.5em;
				font-size: 1.6rem;
				display: flex !important;
				justify-content: center;
				align-items: center;
				border-radius: 0;
				background-color: transparent;
				border: 1px solid var(--accent);
				opacity: 1;
				border-radius: 12px;
				&-active {
					background-color: var(--accent);
					transition: 0.6s all;
				}
			}
		}
		@media screen and (max-width: 550px) {
			&-pagination {
				&-bullet {
					padding: 1.1em 2.7em;
				}
			}
		}
		@media screen and (max-width: 430px) {
			&-pagination {
				gap: 0;
				&-bullet {
					padding: 1.1em 2.3em;
				}
			}
		}

		.swiper-slide {
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
		}
		.swiper-slide-active {
			transition: 0.6s ease-in-out;
			@media screen and (max-width: 500px) {
				scale: unset;
			}
		}
		.swiper-button-prev {
			transform: rotate(90deg);
			right: 10px;
			top: 30px;
		}
		.swiper-button-next {
			transform: rotate(90deg);
			top: 270px;
		}
	}
`;

export const SwiperSlideItem = styled.div``;
export const ImageWrapper = styled.div`
	@media screen and (max-width: 450px) {
		width: 353.7px;
		height: 144px;
	}
`;
export const VehicleInfo = styled.div`
	h3 {
		font-size: 3rem;
		margin-bottom: 1.5rem;
		text-align: center;
	}
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1.6rem;
		li {
			margin-bottom: 1rem;
		}
	}
`;
export const Wrapper = styled.div``;
