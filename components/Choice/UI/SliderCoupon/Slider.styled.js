import styled from "styled-components";

export const SwiperWrapper = styled.div`
	height: 410px;
	padding-top: 5rem;
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
		@media screen and (max-width: 500px) {
			scale: unset;
		}
	}
	@media screen and (max-width: 1000px) {
		height: unset;
	}
	@media screen and (max-width: 500px) {
		padding-top: 2rem;
	}
`;

export const SwiperSlideItem = styled.div`
	padding: 0 2rem;
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
