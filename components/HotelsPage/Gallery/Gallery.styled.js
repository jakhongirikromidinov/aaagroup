import styled from "styled-components";

const StyledGallery = styled.section`
	padding-top: 12rem;
	.lg-react-element {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		a {
			overflow: hidden;
			box-shadow: 0 3px 10px -3px rgba(0, 0, 0, .7);
		}
		.big {
			width: 320px;
			height: 240px;
		}
		.small {
			width: 180px;
			height: 240px;
		}
	}
`;

export const Content = styled.div``;

export const Row1 = styled.div``;

export const Row2 = styled.div``;

export const Row3 = styled.div``;

export default StyledGallery;
