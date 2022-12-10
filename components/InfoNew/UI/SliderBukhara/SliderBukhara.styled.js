import styled from "styled-components";

const SwiperWrapper = styled.div`
	.swiper-pagination {
		bottom: -3px;
	}
`;

export const InfoItem = styled.div`
	min-height: 530px;
	font-size: 1.6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
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

export const ItemSuptitle = styled.label`
	display: block;
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 0.65rem;
`;

export const ItemTitle = styled.h3`
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

export default SwiperWrapper;
