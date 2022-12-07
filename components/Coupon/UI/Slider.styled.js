import styled from "styled-components";

export const SwiperWrapper = styled.div`
	height: 30vh;
	.swiper {
		width: 100%;
		height: 100%;
		&-pagination {
			bottom: 0;
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
		scale: 1.2;
		transition: 0.6s ease-in-out;
		@media screen and (max-width: 500px) {
			scale: unset;
		}
	}
`;

export const SwiperSlideItem = styled.div`
	padding: 2rem;
`;
export const ImageWrapper = styled.div`
	width: 393px;
	height: 160px;
	position: relative;
	@media screen and (max-width: 450px) {
		width: 353.7px;
		height: 144px;
	}
`;
