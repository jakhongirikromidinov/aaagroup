import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1224px;
	width: 95%;
`;
export const DotsWrapper = styled.div`
	width: 98px;
	display: flex;
	flex-wrap: wrap;
	span {
		display: block;
		border-radius: 50%;
		width: 7px;
		height: 7px;
		margin: 3.5px;
		background: rgba(207, 207, 207, 0.6);
	}
`;
