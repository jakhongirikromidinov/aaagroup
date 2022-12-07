import styled from "styled-components";

export const SwiperWrapper = styled.div`
	height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
    user-select: none;
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
		transition: 0.6s ease-in-out;
		@media screen and (max-width: 500px) {
			scale: unset;
		}
	}
`;

export const SwiperSlideItem = styled.div`
`;
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
