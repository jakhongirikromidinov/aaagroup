import styled from "styled-components";

const StyledInfo = styled.section`
	position: relative;
	padding: 5rem 0;
`;

export const Content = styled.div``;

export const Title = styled.h2`
	text-align: center;
	font-size: 3.2rem;
	font-weight: 600;
`;

export const SliderCircle = styled.div`
	position: relative;
	::after {
		content: url("/images/slider_descr_bg.png");
		display: block;
		position: absolute;
		top: 50px;
		left: 0;
		@media screen and (max-width: 1140px) {
			left: -50px;
		}
		@media screen and (max-width: 1040px) {
			left: -100px;
		}
		@media screen and (max-width: 940px) {
			left: -150px;
		}
		@media screen and (max-width: 840px) {
			left: -200px;
		}
	}
`;

export const SliderRight = styled.div``;

export default StyledInfo;
