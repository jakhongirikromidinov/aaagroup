import styled from "styled-components";

const StyledCars = styled.section`
	padding-top: 3.6rem;
	padding-bottom: 5rem;
`;

export const Content = styled.div`
`;

export const Suptitle = styled.label`
	display: inline-block;
	font-family: var(--italicFont);
	border-radius: 24px;
	padding: 0.4rem 0.9rem;
	background: var(--accent);
	font-size: 2.4rem;
	font-weight: 400;
`;

export const Title = styled.h2`
	font-size: 3.2rem;
	font-weight: 600;
	margin-bottom: 3.2rem;
`;
export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	font-size: 1.6rem;
	margin-bottom: 5rem;
	thead td {
		font-weight: bold;
		padding: 1.8rem 4.5rem;
	}
	tbody td {
		padding: 2.2rem 4.5rem;
	}
	td:first-child {
		border-top-left-radius: 12px;
		border-bottom-left-radius: 12px;
	}
	td:last-child {
		border-top-right-radius: 12px;
		border-bottom-right-radius: 12px;
	}
	thead tr:nth-child(odd) {
		background-color: #fafafa;
	}
	tbody tr:nth-child(even) {
		background-color: #fafafa;
	}
`;

export default StyledCars;
